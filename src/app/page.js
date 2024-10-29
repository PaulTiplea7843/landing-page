import { Card, CardHeader, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import PricingTable from "./components/pricing-table";
import Logo from "../app/svg/logo";
import ilustration from "../app/svg/ilustration.svg";
import ProfileCounter from "./components/profileCounter";
import ProjectBriefGenerator from "./components/projectBrief";
import BriefCard from "./components/BriefCard";
import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col items-center px-4 sm:px-8 lg:px-16">
      <div className="flex justify-between items-center w-full py-4">
        <Logo />
        <div>
          <button className="px-6 py-2 rounded-full bg-white text-[#727272] text-sm  hover:bg-gray-100">
            Sign in
          </button>
        </div>
      </div>
      {/* Hero Section */}
      <section className="text-center py-10">
        <h1 className="text-[60px] leading-[60px] font-bold text-gray-900">
          AI-powered project <br></br> content for social media
        </h1>
        <p className="text-lg leading-6 text-[#727272]  mt-4">
          Transform the way you create content briefs using AI. In seconds, let
          AI <br></br>create your project brief while you focus on bringing your
          vision to life.
        </p>

        <Button className="mt-10 rounded-[90px] w-[183px] h-[48px]">
          Get started
        </Button>
      </section>

      {/* Feature Section */}
      <section className="">
        <div className=" border border-[#A8A8A81A] bg-[#A8A8A81A] rounded-[40px] w-[976px] max-w-[976px] h-[528px] p-1">
          <Image
            src={ilustration.src}
            alt="AI Content Creation Illustration"
            className="max-w-full h-auto p-1.5"
            width={960}
            height={528}
          />
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-[#727272] leading-5">
            Join 80,000+ content creators
          </p>
          <ProfileCounter />
        </div>
      </section>

      <section className="py-20">
        <div className="border border-[#A8A8A81A] bg-[#A8A8A81A] w-[976px] max-w-[976px] rounded-[40px] p-1">
          <ProjectBriefGenerator />
          <div className="flex justify-between p-1">
            <BriefCard />
            <BriefCard />
          </div>
        </div>
      </section>

      {/* Pricing Section */}

      <footer className="py-10 text-sm text-gray-500 text-center">
        © 2024 Your Company Name. All rights reserved.
      </footer>
    </div>
  );
}
