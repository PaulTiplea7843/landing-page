import Image from "next/image";
import arrow from "../svg/arrow.svg";

const BriefCard = () => {
  return (
    <div className="w-[472px] h-[516px] max-w-[472px] max-h-[516px] rounded-[40px] bg-[#E2E2E2] mt-2">
      <div className="px-10">
        <Image src={arrow} alt="Arrow icon" width={24} height={24} />
        <h1 className="text-[#1B1B1B] text-2xl font-bold mt-4">
          Brieft management
        </h1>
        <p className="text-[#727272] text-base font-normal mt-4">
          Effortlessly view, edit, and update project details as they evolve.
        </p>
      </div>
    </div>
  );
};

export default BriefCard;
