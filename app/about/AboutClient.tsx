"use client";

import ForContact from "@/components/ForContact";
import React from "react";
import President from "./components/President";
import Logo from "./components/Logo";
import CompanyProfile from "./components/CompanyProfile";
import Philosophy from "./components/Philosophy";
import Access from "./components/Access";
import Mission from "@/components/Mission";
import Attachment from "@/components/ui/Attachment";
import Value from "./components/Value";

export default function AboutClient() {
  return (
    <div className="container space-y-40">
      <Philosophy />
      <CompanyProfile />
      <Access />
      <President />
      <Value />
      <Logo />
      <Mission />
      <ForContact />
    </div>
  );
}
