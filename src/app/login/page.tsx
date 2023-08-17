"use client";
import Link from "next/link";
import { useState } from "react";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // setting states 

  const handleLogin = async () => {
    setError("") // clearing previous errors 
    if (!name || !email || !password) { // checking properties
      setError("Enter your name, email and password");
      return error // rerturning error
    }
    const loginData = { // constructing the object
      name: name,
      email: email,
      password: password,
    };
    try {
      const apiresponse = await fetch( //calling the login api
        `${window.location.origin}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData), // sending data in stringified form
        }
      );
      const apiResponseData = await apiresponse.json(); //parsing the data in json to access its properties 
      // console.log("API Response:", apiResponseData);
      if (apiResponseData.status === 200) { // if status is 200 redirect to the dashboard
        return (window.location.href = "/dashboard");
      }
      else {
        setError(apiResponseData.message) //  setting the error messsage to teh error state
      }
    } catch (error) {
      console.log("login failed");
    }
  };
  return (
    <>
      <div className="w-fit h-3/4 my-auto m-4 border-2 border-black  mx-auto p-10 mt-20 rounded-lg">
        <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0">
          <h1 className="font-semibold text-3xl  m-2">Log In</h1>
          <p className="text-center">Now login to your account</p>
        </div>
        <div className="flex flex-col justify-center items-center mt-10 md:mt-4 space-y-6 md:space-y-8">
          <div className="w-full">
            <p className="text-red-600 mb-5 text-center">{error}</p>

            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)} //onchange event
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
        </div>
        <div className="text-center mt-7 flex flex-col space-y-5">
          <button
            onClick={handleLogin} // onclick event
            className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-black  font-medium w-full hover:opacity-90"
          >
            login
          </button>
          <p className="text-center text-lg">
            Not a user?
            <Link
              href="/signup"
              className="hover:underline hover:underline-offset-8 hover:decoration-black hover:decoration-2"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
