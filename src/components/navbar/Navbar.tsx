import Image from "next/image"
import { Button } from "../ui/button"
const Navbar = () => {
  return (
    <div className="flex justify-center  bg-white overflow-hidden border-black border-b-2 py-3">
      <nav className=" w-full  ">
        <div className="flex flex-col lg:flex-row justify-around items-center text-black">
          <Image src='/next.svg' width={100} height={50} alt="next" />
          <ul className="hidden lg:flex items-center text-[18px] font-semibold pl-32">

            <li className="hover:underline underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5">
              Home
            </li>
            <li className="hover:underline underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5">
              Contact
            </li>
            <li className="hover:underline underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5">
              Services
            </li>
            <li className="hover:underline underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5">
              About
            </li>
            <li className="hover:underline underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5">
              Pricing
            </li>
            <Button className="bg-black hover:bg-white hover:text-black">Logout</Button>
          </ul>
        </div>
      </nav>
    </div>)
}

export default Navbar