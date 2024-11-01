import Image from "next/image";
import arrow from "../svg/arrow.svg";
import brief2 from "../svg/brief2.svg";

const BriefCardTwo = () => {
  return (
    <div className="w-[472px]  max-w-[472px] rounded-[40px] bg-[#E2E2E2] mt-2">
      <Image
        src={brief2.src}
        alt="Card image"
        className="float-right"
        width={452}
        height={244}
      />

      <div className="pl-[50px] mb-4 py-10">
        <Image
          src={arrow.src}
          alt="Arrow icon"
          width={24}
          height={24}
          className="pb-6"
        />
        <h1 className="text-[#1B1B1B] text-2xl font-bold">Quick share</h1>
        <p className="text-[#727272] text-base font-normal mt-3">
          Instantly generate shareable links for your <br></br> project briefs.
        </p>
      </div>
    </div>
  );
};

export default BriefCardTwo;
