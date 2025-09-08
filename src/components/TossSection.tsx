"use client";
import { useState } from "react";
import FlipBtn from "./FlipBtn";
import TossCoin from "./TossCoin";
import { recordToss } from "@/helper/api";
import { TossResult } from "@/helper/SuperImp";
type labelFirst = "Press SPACE to flip!";
export type LabelType = TossResult | labelFirst;
export default function TossSection() {
  const [isFliping, setIsFliping] = useState(false);
  const [label, setLabel] = useState<LabelType>("Press SPACE to flip!");

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  async function handleFlip() {
    setIsFliping(true);
    try {
      const [api] = await Promise.all([recordToss(), delay(1500)]);
      setLabel(api.result);
    } catch {
    } finally {
      setIsFliping(false);
    }
  }

  return (
    <div className='fixed top-0 left-0 bottom-0 w-[50dvw] flex items-end justify-center bg-primary '>
      <div
        id='coin-container'
        className=' items-center  px-9 py-10 rounded-[18px] -translate-y-10'>
        <TossCoin
          isFlipping={isFliping}
          Result={label === "Press SPACE to flip!" ? "heads" : label}
        />
        <FlipBtn
          label={label}
          handleFlip={handleFlip}
        />
      </div>
    </div>
  );
}
