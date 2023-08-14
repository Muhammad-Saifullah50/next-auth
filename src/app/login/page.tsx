import Link from "next/link"
const LoginPage = () => {
    return (<>
        <div className="w-fit h-3/4 my-auto m-4 border-2 border-black  mx-auto p-10 mt-20 rounded-lg">
            <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0">
                <h1 className="font-semibold text-3xl  m-2">Log In</h1>
            </div>
            <div className="flex flex-col justify-center items-center mt-10 md:mt-4 space-y-6 md:space-y-8">
                <div className="w-full">
                    <input type="text" placeholder="Name"
                        className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-black-600 focus:outline-black  text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold  w-full" />
                </div>
                <div className="w-full">
                    <input type="text" placeholder="Email"
                        className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-black-600 focus:outline-black text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold  w-full" />
                </div>
                <div className="w-full">
                    <input type="password" placeholder="Password"
                        className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-black-600 focus:outline-black  text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold  w-full" />
                </div>
            </div>
            <div className="text-center mt-7 flex flex-col space-y-5">
                <Link href='/login'>
                    <button
                        className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-black  font-medium w-full hover:opacity-90">login</button>
                </Link>
                <p className="text-center text-lg">Not a user? <Link href='/signup' className="hover:underline hover:underline-offset-8 hover:decoration-black hover:decoration-2"> Sign Up</Link></p>
                
            </div>

        </div>
    </>)
}

export default LoginPage