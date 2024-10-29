import React from "react";
import star from "../svg/star.svg";
import Image from "next/image";
import brief from "../svg/brief.svg";

const ProjectBriefGenerator = () => {
  return (
    <div className="rounded-[40px] bg-[#E2E2E2]">
      <div className="flex items-center justify-between">
        <div className="px-10">
          <Image src={star} alt="Star icon" width={24} height={24} />
          <h1 className="text-[#1B1B1B] text-2xl font-bold mt-4">
            Create project briefs instantly
          </h1>
          <p className="text-[#727272] text-base font-normal mt-4">
            Save hours of preparation time with <br></br> intelligent brief
            generation.
          </p>
        </div>
        <div>
          <Image src={brief.src} alt="brief" width={495} height={306} />
        </div>
      </div>
    </div>
  );
};

export default ProjectBriefGenerator;
