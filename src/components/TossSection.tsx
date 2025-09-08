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
      if (typeof window !== "undefined") {
        window.dispatchEvent(
          new CustomEvent("user-toss", { detail: { result: api.result } })
        );
      }
    } catch {
    } finally {
      setIsFliping(false);
    }
  }

  return (
    <div className='bg-primary w-full h-dvh md:fixed md:top-0 md:left-0 md:bottom-0 md:w-[50dvw] flex items-end justify-center'>
      <div
        id='coin-container'
        className='items-center px-9 py-10 rounded-[18px] md:-translate-y-10'>
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
