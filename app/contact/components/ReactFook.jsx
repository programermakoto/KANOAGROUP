"use client";

import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "sonner"; 

export default function ReactFook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      nameKanji: "",
      nameKana: "",
      email: "",
      phone: "",
      referral: "",
      companyUrl: "",
      message: "",
    },
  });

  

  // emailjs.send は Promise を返すのでそのまま返すようにする
  const sendEmail = (params) => {
    return emailjs.send(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      params,
      process.env.NEXT_PUBLIC_PUBLIC_KEY
    );
  };

  const onSubmit = async (data) => {
    const templateParams = {
      to_name: "株式会社KANOA GROUP",
      name_kanji: data.nameKanji,
      name_kana: data.nameKana,
      email: data.email,
      phone: data.phone,
      referral: data.referral,
      companyUrl: data.companyUrl,
      message: data.message,
    };

    try {
      // toast.promise で送信中→成功／失敗を表示
      await toast.promise(
        () => sendEmail(templateParams),
        {
          loading: "送信中…",
          success: "送信が完了しました！ありがとうございます。",
          error: "送信に失敗しました。時間をおいて再度お試しください。",
        }
      );
      reset(); // 成功時はフォームをクリア
    } catch (e) {
      // toast.promise がエラー表示するのでここではログのみ
      console.error("email send failed", e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md w-full mx-auto my-20 flex justify-center flex-col items-center space-y-4"
    >
      <input
        type="text"
        placeholder="名前(漢字フルネーム)"
        {...register("nameKanji", {
          required: "必須項目です",
          minLength: { value: 3, message: "名前は３文字以上でお願いします" },
        })}
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
      />
      {errors.nameKanji && <span className="inline-block self-start text-red-500">{errors.nameKanji.message}</span>}

      <input
        type="text"
        placeholder="名前(仮名フルネーム)"
        {...register("nameKana", {
          required: "必須項目です",
          minLength: { value: 3, message: "名前は３文字以上でお願いします" },
        })}
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
      />
      {errors.nameKana && <span className="inline-block self-start text-red-500">{errors.nameKana.message}</span>}

      <input
        type="email"
        placeholder="メールアドレス"
        {...register("email", {
          required: "必須項目です",
          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "有効なメールアドレスを入力してください" },
        })}
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
      />
      {errors.email && <span className="inline-block mt-1 text-sm text-red-500">{errors.email.message}</span>}

      <input
        type="tel"
        placeholder="電話番号"
        {...register("phone", {
          required: "必須項目です",
          pattern: { value: /^[0-9\-+\s()]{7,20}$/, message: "有効な電話番号を入力してください" },
        })}
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
      />
      {errors.phone && <span className="inline-block mt-1 text-sm text-red-500">{errors.phone.message}</span>}

      <select
        {...register("referral", { required: "必須項目です" })}
        defaultValue=""
        aria-invalid={errors.referral ? "true" : "false"}
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
      >
        <option value="" disabled>当サイトを知ったきっかけを選択してください</option>
        <option value="hp">ホームページ</option>
        <option value="sns">SNS</option>
        <option value="ad">広告</option>
        <option value="friend">知人</option>
      </select>
      {errors.referral && <span className="inline-block mt-1 text-sm text-red-500">{errors.referral.message}</span>}

      <input
        type="url"
        placeholder="会社のHPリンクを入力してください(任意)"
        aria-invalid={errors.companyUrl ? "true" : "false"}
        {...register("companyUrl", {
          validate: (v) => {
            if (!v || v.trim() === "") return true;
            try {
              new URL(v);
              return true;
            } catch {
              return "有効なURLを入力してください（例: https://example.com）";
            }
          },
        })}
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
      />
      {errors.companyUrl && <span className="inline-block mt-1 text-sm text-red-500">{errors.companyUrl.message}</span>}

      <textarea
        placeholder="どの事業名でのご相談か、事業名と質問内容を記載してください"
        aria-invalid={errors.message ? "true" : "false"}
        {...register("message", {
          required: "必須項目です",
          minLength: { value: 5, message: "最低5文字入力してください" },
          maxLength: { value: 250, message: "最大250文字までです" },
        })}
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
      />
      {errors.message && <span className="inline-block mt-1 text-sm text-red-500">{errors.message.message}</span>}

      <input
        type="submit"
        value="メッセージ送信"
        className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize"
      />
    </form>
  );
}
