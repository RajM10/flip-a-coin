"use static";
import Info from "./Info";
import UserStats from "./UserStats";
import Narrative from "./Narrative";

export default function InfoSection() {
  return (
    <div className='bg-secondary h-dvh w-full md:fixed md:top-0 md:right-0 md:bottom-0 md:w-[50dvw] px-9 py-4 pb-10 overflow-y-auto'>
      <header className='mb-3 h-fit w-fit py-2'>
        <h1 className='text-5xl paper-text'>
          The Digital Coin: Can We Trust the Flip?
        </h1>
      </header>

      <p className='text-lg leading-relaxed paper-text mb-8'>
        We’ve all been there: a quick decision needed, a game to settle, or just
        a simple “heads or tails?” The go-to solution for many is a quick search
        for an online coin flipper. You click, you get your answer, and life
        moves on.
      </p>
      <p className='text-lg leading-relaxed paper-text mb-8'>
        But what if I told you that the digital coin you just flipped might not
        be as fair as you think? What if its &quot;randomness&quot; is, in fact,
        predictable?
      </p>

      <div className='space-y-8'>
        <Narrative />
        <Info />
        <UserStats />
      </div>
    </div>
  );
}
