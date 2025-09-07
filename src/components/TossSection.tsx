import FlipBtn from "./FlipBtn";
import TossCoin from "./TossCoin";

export default function TossSection() {
  return (
    <div className='fixed top-0 left-0 bottom-0 w-[50dvw] flex items-end justify-center bg-primary '>
      <div
        id='coin-container'
        className='flex flex-col items-center gap-6  nb-shadow-soft   px-9 py-10 rounded-[18px] -translate-y-10'>
        <TossCoin />
        <FlipBtn />
      </div>
    </div>
  );
}
