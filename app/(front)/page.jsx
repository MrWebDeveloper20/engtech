import SlickBanner from '@/components/slick/slickBanner'
import Image from 'next/image';
export default function Home() {
  return (
    <div className=" items-center bg-gray-200 justify-items-center min-h-screen pb-5 ">
      <main className="flex w-full flex-col justify-center items-center sm:items-start">
        <div className="w-[1400px] flex justify-center items-center mx-auto my-2">
         <SlickBanner /> 
        </div>
        
      </main>     
    </div>
  );
}
