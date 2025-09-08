import Info from "./Info";

export default function InfoSection() {
  return (
    <div className='top-0 fixed right-0 bg-secondary  bottom-0 w-[50dvw] px-9 py-4 pb-10 overflow-y-auto'>
      <header className='mb-3 h-fit w-fit py-2'>
        <h1 className='text-5xl paper-text'>Coin Flipper</h1>
      </header>

      <div className='space-y-8'>
        <div className='  px-6'>
          <div className='inline-block  -translate-y-1 bg-accent paper-text'>
            What is this?
          </div>
          <h2 className='text-2xl mb-2 paper-text'>Purpose</h2>
          <p className='leading-relaxed paper-text '>
            This website helps you test whether a coin flip is fair or biased.
            By tracking your flips in real-time, you can see the probability of
            heads vs tails and determine if the coin is truly random.
          </p>
        </div>

        <Info />
      </div>
    </div>
  );
}
