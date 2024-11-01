import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroImage from "../svg/hero.svg";

const HeroSection = () => {
  return (
    <div className="border p-1.5 rounded-2xl">
      <div className="relative w-[960px] flex flex-col justify-between bg-[#E9E9E9F2] rounded-2xl pt-20">
        {/* Main content */}
        <div className="mx-auto text-center pb-32">
          <h1 className="text-[44px] leading-[48px] font-bold text-gray-900 mb-4">
            Start crafting brilliant briefs today
          </h1>
          <p className="text-gray-600 text-lg leading-6 mb-8">
            Join thousands of designers and elevate your project workflow for
            free
          </p>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-[90px] px-3.5 py-4 text-base h-auto">
            Get started for free
          </Button>
        </div>
        <div className="rounded-t-2xl bg-[#FDFDFD] mx-auto px-16">
          <Image
            src={heroImage.src}
            alt="heroImage"
            width={620}
            height={500}
            className="mt-[-64px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
