"use static";

export default function Narrative() {
  return (
    <section className='space-y-4 px-6'>
      <h2 className='text-2xl paper-text'>
        The Digital Coin: A Global Experiment
      </h2>
      <p className='leading-relaxed paper-text'>
        We’ve all been there: a quick decision needed, a game to settle, or just
        a simple “heads or tails?” The go-to solution for many is a quick search
        for an online coin flipper. You click, you get your answer, and life
        moves on.
      </p>
      <p className='leading-relaxed paper-text'>
        But what if the digital coin you just flipped isn’t as fair as you
        think? What if its “randomness” is, in fact, predictable?
      </p>

      <h3 className='paper-text inline-block'>
        The Heart of the Machine: Math.random()
      </h3>
      <p className='leading-relaxed paper-text'>
        At the core of many simple online coin flippers lies JavaScript’s
        <span className='px-1'>Math.random()</span>. On the surface, it seems
        perfect: generate a number between 0 and 1, then map it to heads or
        tails.
      </p>
      <div className='bg-[oklch(0.98_0.02_95)] rounded-md p-3 overflow-auto'>
        <pre className='text-sm'>
          {`export type TossResult = "heads" | "tails";
export default function SuperImp(): TossResult {
  return Math.random() > 0.5 ? "heads" : "tails";
}`}
        </pre>
      </div>
      <p className='leading-relaxed paper-text'>
        But computers are deterministic machines. They follow instructions.
        True, unpredictable randomness—like chaotic physical processes or
        quantum phenomena—is hard to produce purely in software. Math.random()
        is a pseudo-random number generator (PRNG). With the right knowledge of
        its algorithm and seed, its outputs can be predicted.
      </p>
      <p className='leading-relaxed paper-text'>
        For many tasks, a PRNG is fine. But for a coin flip—where
        unpredictability is the point—does pseudo-random truly behave like a
        fair 50/50 over time?
      </p>
      <p className='leading-relaxed paper-text'>
        This project invites you to join a live, global experiment. Flip the
        coin, watch the distribution evolve, and help us explore whether
        practice meets theory.
      </p>
    </section>
  );
}
