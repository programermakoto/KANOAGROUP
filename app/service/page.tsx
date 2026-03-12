import type { Metadata } from "next";
import React from "react";
import Hero from "./components/hero";
import Service from "./components/service";
import ForContact from "@/components/ForContact";
import Attachment from "@/components/ui/Attachment";
import Mission from "@/components/Mission";
import Movie from "@/components/ui/movie";

export const metadata: Metadata = {
  title: "サービス一覧 | KANOA GROUP",
  description:
    "KANOA GROUPのサービス一覧。Web制作・アプリ開発・光回線代理店・軽貨物・人材紹介・オンラインスクール。",
};

export default function ServicePage() {
  return (
    <div>
      <Hero />
      <Service />
      <Mission />
      <ForContact />
    </div>
  );
}