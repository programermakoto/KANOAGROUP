"use client";
import { useEffect, useState, useRef } from "react";
import { motion, PanInfo, useMotionValue, useTransform } from "motion/react";
import React, { JSX } from "react";

// replace icons with your own if needed
import { FiCircle, FiCode, FiFileText, FiLayers, FiLayout } from "react-icons/fi";

export interface CarouselItem {
  title: string;
  description: string;
  id: number;
  icon: React.ReactNode;
}

export interface CarouselProps {
  items?: CarouselItem[];
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
}

const DEFAULT_ITEMS: CarouselItem[] = [
  {
    title: "Diversity",
    description:
      "田舎に移住して働いたっていい。旅行をしながら働いたっていい。好きなカフェで働いたっていい。KANOAは8割がリモートワーク。もっと多様な生き方をする仲間が集まっても成長し続ける組織だとこれからも証明し続けていきます。",
    id: 1,
    icon: <FiFileText className="h-[16px] w-[16px] text-white" />,
  },
  {
    title: "Freedom",
    description:
      "多様な生き方の為には仲間達と「自由」を守り続けなければいけません。しかし自由とは自己責任の裏返し。自由とは徹底的な自己管理の継続。それを理解している「自由人」にはKANOAは徹底的に自由を尊重します。",
    id: 2,
    icon: <FiCircle className="h-[16px] w-[16px] text-white" />,
  },
  {
    title: "Distribution",
    description:
      "株式会社は株主のものです。よって従業員が作った利益も株主に流れる。だから普通の会社ではどんなに結果を出しても従業員への配分は低くなるこれでは前述の「自由の尊重」に矛盾します。だからこそ、KANOAは外部投資家や株主は​一切入れずに仲間だけで株を守り続けて給与や報酬の高水準で仲間を尊重します。",
    id: 3,
    icon: <FiLayers className="h-[16px] w-[16px] text-white" />,
  },
  {
    title: "Joy First",
    description:
      "前述した、仲間の自由を守るために外部株主を入れないという事は創業者や経営者が一番儲けられる行為「株式売却」を行わないということ。KANOAは利益やお金だけを優先した経営ではなく「楽しさ」を優先した経営を大切にしていく事。​楽しい事への挑戦を徹底的に支援します。",
    id: 4,
    icon: <FiLayout className="h-[16px] w-[16px] text-white" />,
  },
  {
    title: "Challenge",
    description:
      "23歳で地元の仲間が集まり始まった会社梅田の1R室から始まった会社。僕らは元々は何もなかったんです。オフィスで寝る日々も経験しデータベースバグ発生で数社のクレーム嵐も経験しました。それでも若さとノリを武器に鉄人のように成長し続けここまで大きくなった会社です。これからも「イカれた会社」で居続けます。",
    id: 5,
    icon: <FiCode className="h-[16px] w-[16px] text-white" />,
  },
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS: any = { type: 'spring', stiffness: 300, damping: 30 };

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
}: CarouselProps): JSX.Element {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isResetting, setIsResetting] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Hover
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  // Autoplay
  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === items.length - 1 && loop) return prev + 1;
          if (prev === carouselItems.length - 1) return loop ? 0 : prev;
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, isHovered, loop, items.length, carouselItems.length, pauseOnHover]);

  const effectiveTransition: any = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) setCurrentIndex(currentIndex + 1);
      else setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) setCurrentIndex(items.length - 1);
      else setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: { left: -trackItemOffset * (carouselItems.length - 1), right: 0 },
      };

  // ----- 子コンポーネント化して各アイテムごとに useTransform を使う -----
  // Hooks をループ内で直接呼ばない運用にするため、ItemCard を作成する
  function ItemCard({
    item,
    index,
  }: {
    item: CarouselItem;
    index: number;
  }): JSX.Element {
    // ここはコンポーネント本体なので Hooks 使用OK（順序は固定）
    const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
    const rotateY = useTransform(x, range, [90, 0, -90], { clamp: false });

    return (
      <motion.div
        className={`relative shrink-0 flex flex-col ${
          round ? "items-center justify-center text-center bg-[#060010] border-0" : "items-start justify-between bg-[#222] border border-[#222] rounded-[12px]"
        } overflow-hidden cursor-grab active:cursor-grabbing`}
        style={{
          width: itemWidth,
          height: round ? itemWidth : "100%",
          rotateY,
          ...(round && { borderRadius: "50%" }),
        }}
        transition={effectiveTransition as any}
      >
        <div className={`${round ? "p-0 m-0" : "mb-4 p-5"}`}>
          <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#060010]">
            {item.icon}
          </span>
        </div>
        <div className="p-5">
          <div className="mb-1 font-black text-lg text-white">{item.title}</div>
          <p className="text-sm text-white">{item.description}</p>
        </div>
      </motion.div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative mx-auto overflow-hidden p-4 ${round ? "rounded-full border border-white" : "rounded-[24px] border border-[#222]"}`}
      style={{ width: `${baseWidth}px`, ...(round && { height: `${baseWidth}px` }) }}
    >
      <motion.div
        className="flex"
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
          x,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => (
          <ItemCard key={index} item={item} index={index} />
        ))}
      </motion.div>

      {/* Dots */}
      <div className={`flex w-full justify-center ${round ? "absolute z-20 bottom-12 left-1/2 -translate-x-1/2" : ""}`}>
        <div className="mt-4 flex w-[150px] justify-between px-8">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${
                currentIndex % items.length === index ? (round ? "bg-white" : "bg-[#333333]") : round ? "bg-[#555]" : "bg-[rgba(51,51,51,0.4)]"
              }`}
              animate={{ scale: currentIndex % items.length === index ? 1.2 : 1 }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
