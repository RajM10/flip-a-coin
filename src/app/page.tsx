import InfoSection from "@/components/InfoSection";
import TossSection from "@/components/TossSection";

export default function Home() {
  return (
    <div
      id='main-content'
      className='flex flex-col md:block'>
      <TossSection />
      <InfoSection />
    </div>
  );
}
