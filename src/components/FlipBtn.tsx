"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { recordToss } from "@/helper/api";

export default function FlipBtn() {
  const [isFliping, setIsFliping] = useState(false);
  const [label, setLabel] = useState("Press SPACE to flip!");

  const doFlip = useCallback(async () => {
    try {
      setIsFliping(true);
      const { result } = await recordToss();
      setLabel(result.toUpperCase());
    } catch (e) {
      setLabel("Error");
    } finally {
      setTimeout(() => setIsFliping(false), 400);
    }
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        void doFlip();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [doFlip]);
  return (
    <div
      id='button-result'
      className='flex flex-col items-center gap-2.5'>
      <button
        id='flip-button'
        className={`rounded-full relative size-20 flex items-center justify-center select-none bg-secondary
        transition-transform active:translate-x-[2px] active:translate-y-[2px]
         before:absolute before:inset-0 before:translate-x-[2px] before:translate-y-[2px] before:bg-accent before:-z-10 before:rounded-full
         after:absolute after:inset-[2px] after:rounded-full
        ${isFliping ? "animate-[wobble_500ms_ease-in-out]" : ""}
        `}
        aria-label='Flip coin'
        onClick={() => void doFlip()}>
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
        {label}
      </p>
    </div>
  );
}
