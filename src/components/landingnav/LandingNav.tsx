import Image from "next/image"
const LandingNav = () => {
    return (
        <div className="flex justify-center  bg-white overflow-hidden border-black border-b-2 py-3">
            <nav className=" w-full  ">
                <div className="flex flex-col lg:flex-row justify-center space-x-4 items-center text-black">
                    <Image src='/next.svg' width={100} height={50} alt="next" />
                    <p className="font-bold">by</p>
                    <Image src='vercel.svg' width={100} height={50} alt="vercel"></Image>
                </div>
            </nav>
        </div>)
}

export default LandingNav