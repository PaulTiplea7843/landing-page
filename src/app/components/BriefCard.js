import Image from "next/image";
import notice from "../svg/notice.svg";
import cardImage from "../svg/cardImage.svg";

const BriefCard = () => {
  return (
    <div className="w-[472px]  max-w-[472px] rounded-[40px] bg-[#E2E2E2] -top mt-2">
      <Image
        src={cardImage.src}
        alt="Card image"
        className="float-right"
        width={452}
        height={244}
      />

      <div className="pl-[50px] mb-4 py-10">
        <Image
          src={notice.src}
          alt="Arrow icon"
          width={24}
          height={24}
          className="pb-6"
        />
        <h1 className="text-[#1B1B1B] text-2xl font-bold">Brieft management</h1>
        <p className="text-[#727272] text-base font-normal mt-3">
          Effortlessly view, edit, and update project details as they evolve.
        </p>
      </div>
    </div>
  );
};

export default BriefCard;
