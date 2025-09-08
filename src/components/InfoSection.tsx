"use static";
import Info from "./Info";
import UserStats from "./UserStats";

export default function InfoSection() {
  return (
    <div className='bg-secondary h-dvh w-full md:fixed md:top-0 md:right-0 md:bottom-0 md:w-[50dvw] px-9 py-4 pb-10 overflow-y-auto'>
      <header className='mb-3 h-fit w-fit py-2'>
        <h1 className='text-5xl paper-text'>Online Coin Flipper</h1>
      </header>

      <p className='text-lg leading-relaxed paper-text mb-8'>
        Instant Heads or Tails. Your digital coin for quick, random decisions
        and probability testing.
      </p>

      <div className='space-y-8'>
        <div>
          <h2 className='text-2xl mb-2 paper-text'>
            Flip a Coin for Instant Results
          </h2>
          <p className='leading-relaxed paper-text'>
            Can&apos;t decide? Settle a bet or make a choice with a simple
            click. Our virtual coin flip uses a cryptographically secure random
            number generator to ensure a truly unpredictable outcome every time.
            Get an immediate Heads or Tails result without digging for a real
            coin.
          </p>
        </div>

        <div>
          <h2 className='text-2xl mb-2 paper-text'>
            Is Your Coin Fair? Test for Bias
          </h2>
          <p className='leading-relaxed paper-text'>
            Think you have a biased coin? Use this tool as a probability
            calculator. Track hundreds or thousands of flips in real-time to see
            if the distribution approaches the expected 50/50 ratio. This is a
            practical way to understand the law of large numbers and test for
            statistical anomalies.
          </p>
        </div>
        <Info />
        <UserStats />
      </div>
    </div>
  );
}
