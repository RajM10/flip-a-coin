import Image from "next/image";

export default function TossCoin() {
  return (
    <div className='relative'>
      <div className='absolute inset-0 translate-x-2 translate-y-2 bg-[oklch(0.6_0.3_240)] rounded-full -z-10'></div>
      <Image
        src='/coin/heads.png'
        alt='coin'
        width='140'
        height='140'
        className='rounded-full bg-[oklch(0.98_0.02_95)] p-3 animate-[wobble_2400ms_ease-in-out_infinite]
        '
      />
    </div>
  );
}
