import React from "react";

type Props = {
  className?: string;
};

export default function Attachment({ className = "h-[25vh] md:h-[30vh]" }: Props) {
  return (
    <div
      className={`${className} bg-cover bg-center relative bg-[url('/BeiTower.webp')]`}
    ></div>
  );
}