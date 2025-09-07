"use client";

import Image from "next/image";
import { useState } from "react";

export default function FlipBtn() {
  const [isFliping, setIsFliping] = useState(false);
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
        onMouseDown={() => setIsFliping(true)}
        onMouseUp={() => setIsFliping(false)}
        onMouseLeave={() => setIsFliping(false)}>
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
        Press SPACE to flip!
      </p>
    </div>
  );
}
