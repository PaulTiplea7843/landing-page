import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";
import rightTop from "../svg/rightTop.svg";
import Image from "next/image";

const PremiumPricingCard = () => {
  const features = [
    "Including all free features",
    "No watermarks on shared links",
    "Section regeneration",
    "PDF export",
    "Email sharing",
  ];

  return (
    <Card className="w-72 bg-white shadow-lg">
      <CardHeader className="relative">
        <button className="absolute right-2 top-2 w-6 h-6 rounded-full border flex items-center justify-center">
          <Image src={rightTop.src} width={24} height={24} alt="rightTop" />
        </button>
        <CardTitle className="text-2xl font-semibold">Premium</CardTitle>
      </CardHeader>

      <CardContent className="h-[192px]">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-500 flex-shrink-0" />
              <span className="text-sm text-gray-600">{feature}</span>
            </li>
          ))}
          <li className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-purple-500 flex-shrink-0" />
            <span className="text-sm text-gray-600">
              <span className="text-purple-500">25</span> generation
              credits/month
            </span>
          </li>
        </ul>
      </CardContent>

      <CardFooter className="mt-4">
        <div className="w-72 rounded-3xl border px-2 py-4">
          <div className="flex items-baseline">
            <span className="text-[40px] font-bold">$3</span>
            <span className="text-gray-400 text-lg ml-2">/ month</span>
          </div>
          <Button className="w-fit text-white rounded-2xl text-sm py-2 mt-2">
            Create an account
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PremiumPricingCard;
