"use client";

import Image from "next/image";
import { useEffect } from "react";
import { LabelType } from "./TossSection";

interface FlipBtnProp {
  label: LabelType;
  handleFlip: () => Promise<void>;
}
export default function FlipBtn({ label, handleFlip }: FlipBtnProp) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        handleFlip();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleFlip]);
  return (
    <div
      id='button-result'
      className='flex flex-col items-center gap-2.5 mt-2 mx-auto'>
      <button
        id='flip-button'
        className={`rounded-full relative size-20 flex items-center justify-center select-none bg-secondary
        transition-transform active:translate-x-[2px] active:translate-y-[2px]
         before:absolute before:inset-0 before:translate-x-[2px] before:translate-y-[2px] before:bg-accent before:-z-10 before:rounded-full
         after:absolute after:inset-[2px] after:rounded-full
        `}
        aria-label='Flip coin'
        onClick={handleFlip}>
        <Image
          id='coin-image'
          src='/coin.png'
          alt='flip'
          width='56'
          height='56'
        />
      </button>
      <p
        id='result'
        className='px-3 py-1 nb-border-light surface-muted nb-shadow-soft rounded-md text-sm'>
        {labelFormat(label)}
      </p>
    </div>
  );
}
function labelFormat(label: LabelType) {
  if (label === "Press SPACE to flip!") return label;
  return label === "heads" ? "It's Head" : "It's Tail";
}
