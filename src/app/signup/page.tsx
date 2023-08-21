"use client";
import { useState } from "react";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfpwd, setcnfpwd] = useState('')
  const [error, setError] = useState("")
// setting states
  const handleSignUp = async () => {
    setError("") // clearing previous errors
    if (!name || !email || !password || !cnfpwd) { // checking properties
      setError("Enter your name, email, password and confirmation")
      return error
    }
    const signupData = { // building the object
      name: name, 
      email: email,
      password: password,
      confirmPassword: cnfpwd
    };
    try {
      const apiresponse = await fetch(
        `${window.location.origin}/api/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signupData), // sending data in request
        }
      );
      const apiResponseData = await apiresponse.json(); //paersing in json
      // console.log("API Response:", apiResponseData);
      if (apiResponseData.status === 200) {
        return (window.location.href = "/dashboard"); // redirecting top dashboard
      }
      else {
        setError(apiResponseData.message)
      }

    } catch (error) {
      console.log("signup failed")
    }
  };

  return (
    <>
      <div className="w-fit h-3/4 my-auto m-4 border-2 border-black  mx-auto p-10 mt-20 rounded-lg">
        <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0">
          <h1 className="font-semibold text-3xl  m-2">Sign Up</h1>
        </div>
        <div className="flex flex-col justify-center items-center mt-10 md:mt-4 space-y-6 md:space-y-8">
          <div className="w-full">
            <p className="text-red-600 mb-5 text-center">{error}</p>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-black-600 focus:outline-black  text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold  w-full"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-black-600 focus:outline-black text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold  w-full"
            />
          </div>
          <div className="w-full">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-black-600 focus:outline-black  text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold  w-full"
            />
          </div>
          <div className="w-full">
            <input
              type="password"
              placeholder="Confirm Password"
              value={cnfpwd}
              onChange={(event) => {
                setcnfpwd(event.target.value);
              }}
              className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-black-600 focus:outline-black  text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold  w-full"
            />
          </div>
        </div>
        <div className="text-center mt-7 flex flex-col space-y-5">
          <button onClick={handleSignUp} className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-black  font-medium w-full hover:opacity-90">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
