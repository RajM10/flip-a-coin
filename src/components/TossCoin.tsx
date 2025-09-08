import { TossResult } from "@/helper/SuperImp";
import Image from "next/image";

export default function TossCoin({
  isFlipping,
  Result,
}: {
  isFlipping: boolean;
  Result: TossResult;
}) {
  return (
    <div className={`relative mx-auto ${isFlipping ? "coin-fall-motion" : ""}`}>
      <Image
        src={`${Result === "heads" ? "/coin/heads.png" : "/coin/tails.png"}`}
        alt='coin'
        width='140'
        height='140'
        className={`rounded-full bg-[oklch(0.98_0.02_95)] p-3 ${
          isFlipping ? "coin-spin-animation" : "coin-wooble"
        }  `}
      />
    </div>
  );
}
