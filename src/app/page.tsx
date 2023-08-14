import Image from "next/image";
import { Button } from "@/components/ui/button";
import LandingNav from "@/components/landingnav/LandingNav";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <LandingNav />
      <div className="flex flex-col md:flex-row h-[550px]">
        <div className="left justify-center items-center w-full md:w-1/2 p-10 h-[550px]">
          <h1 className="font-extrabold text-5xl leading-relaxed text-black">NEXT JS 13 AUTHENTICATION AND AUTHORIZATION DEMO</h1>
          <div className="btns flex justify-between mt-4">
            <Link href='/signup'>
              <Button className="bg-black hover:bg-white hover:text-black">Sign Up</Button></Link>
            <Link href='/login'>            <Button className="bg-black hover:bg-white hover:text-black">Login</Button></Link>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col right w-full h-full md:w-1/2">
          <div className="flex items-center justify-center"><Image src='/Next.js.png' width={300} height={200} alt="next" /></div>
          <div className="flex items-center justify-center"><Image src='/next.svg' width={300} height={100} alt="next" /></div>

        </div>
      </div>


    </>
  );
}
