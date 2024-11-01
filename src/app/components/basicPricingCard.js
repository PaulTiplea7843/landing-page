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

const FreePricingCard = () => {
  const features = [
    "AI-generated project briefs",
    "Basic editing",
    "Shareable links",
  ];

  return (
    <Card className="w-72 border-0 bg-transparent">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">Free</CardTitle>
      </CardHeader>

      <CardContent className=" h-[192px]">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 mt-2">
              <Check className="h-4 w-4 text-emerald-500 flex-shrink-0" />
              <span className="text-sm text-gray-600">{feature}</span>
            </li>
          ))}
          <li className="flex items-center gap-2 mt-2">
            <Zap className="h-4 w-4 text-purple-500 flex-shrink-0" />
            <span className="text-sm text-gray-600">
              <span className="text-purple-500">5</span> generation
              credits/month
            </span>
          </li>
        </ul>
      </CardContent>

      <CardFooter className="mt-4">
        <div className="w-72 rounded-3xl border px-2 py-4">
          <div className="flex items-baseline">
            <span className="text-[40px] font-bold">$0</span>
            <span className="text-gray-400 text-lg ml-2">/ month</span>
          </div>
          <Button className="w-fit bg-white text-[#727272] rounded-2xl text-sm py-2 mt-2 hover:bg-white">
            Create an account
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default FreePricingCard;
