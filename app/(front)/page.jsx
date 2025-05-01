import SlickBanner from '@/components/slick/slickBanner'
import Image from 'next/image';
export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen  pb-5 ">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <div className="w-[1400px]">
         <SlickBanner /> 
        </div>
        
      </main>     
    </div>
  );
}
