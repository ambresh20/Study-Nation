import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {toast} from 'react-hot-toast' ;
import { useNavigate } from "react-router-dom";

const SignupForm = ({setIsLoggedIn}) => {

  const navigate = useNavigate() ;

  const [accountType, setAccountType] = useState("student") ;
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false) ;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event){
    event.preventDefault() ;
    if(formData.password !== formData.confirmPassword){
      toast.error("Password do not Match !") ;
      return ;
    }

		setIsLoggedIn(true) ;
		toast.success("Account Created") ;
    console.log(formData) ;
		navigate("/dashboard") ;
  }

  return (
    <div className="flex flex-col gap-x-2">
      {/* student and Instructor tab  */}
      <div className="bg-gray-800 rounded-full p-2 my-6 gap-x-3 w-1/2 flex justify-around max-w-max transition-all duration-200 ">
        <button 
        onClick={() =>{setAccountType("student")}}
        className={`${accountType === "student" ? 
        "text-gray-300 rounded-full py-2 px-5  bg-gray-950" : 
        "text-gray-500 rounded-full bg-gray-800" } ` }
        >
          Student
        </button>
  
        <button 
        onClick={() => {setAccountType("instructor")}}
        className={`${accountType === "instructor" ? 
        "text-gray-300 rounded-full py-2 px-5 bg-gray-950" : 
        "text-gray-500 rounded-full bg-gray-800" } ` }
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>

        {/* first and last  name  */}
        <div className="flex gap-x-4 m-3">

          <label className='w-full gap-y-2'>
            <p className='text-[0.875rem] text-gray-300 mb-1 leading-[1.375rem] '>
              First Name 
              <sup className='text-pink-500 '>*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              onChange={changeHandler}
              value={formData.firstName}
              className="bg-gray-800 rounded-[0.5rem] w-full p-[12px] text-gray-200  "
            />
          </label>

          <label className='w-full gap-y-2 '>
            <p className='text-[0.875rem] text-gray-300 mb-1 leading-[1.375rem] '>
              Last Name 
              <sup className='text-pink-500 '>*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              onChange={changeHandler}
              value={formData.lastName}
              className="bg-gray-800 rounded-[0.5rem] w-full p-[12px] text-gray-200  "
            />
          </label>
        </div>

        <div className="m-3">
          <label className='w-full gap-y-2'>
            <p className='text-[0.875rem] text-gray-300 mb-1 leading-[1.375rem] '>
              Email Address
              <sup className='text-pink-500 '>*</sup>
            </p>
            <input
              required
              name="email"
              placeholder="Enter email address"
              type="email"
              onChange={changeHandler}
              value={formData.email}
              className="bg-gray-800 rounded-[0.5rem] w-full p-[12px] text-gray-200  "
            />
          </label>
        </div>

        {/* create password and confirm password  */}
        <div className="flex gap-x-4 m-3">
          <label className='w-full mb-2 relative '>
            <p className='text-[0.875rem] text-gray-300 mb-1 leading-[1.375rem] '>
              Create Password 
              <sup className='text-pink-500 '>*</sup>
            </p>
            <input
              type={showPassword ? ("text") : ("password")}
              required
              name="password"
              placeholder="Enter Password"
              onChange={changeHandler}
              value={formData.password}
              className="bg-gray-800 rounded-[0.5rem] w-full p-[12px] text-gray-200  "
            />

            <span 
              className='absolute right-3 top-[38px] cursor-pointer '
              onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? 
              <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : 
              <AiOutlineEye fontSize={24} fill='#AFB2BF'/>}
            </span>

          </label>


          <label className='w-full mb-3 relative '>
            <p className='text-[0.875rem] text-gray-300 mb-1 leading-[1.375rem] '>
              Confirm Password 
              <sup>*</sup>
            </p>
            <input
              type={confirmShowPassword ? ("text") : ("password")}
              required
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={changeHandler}
              value={formData.confirmPassword}
              className="bg-gray-800 rounded-[0.5rem] w-full p-[12px] text-gray-200  "
            />

            <span 
              className='absolute right-3 top-[38px] cursor-pointer '
              onClick={() => setConfirmShowPassword((prev) => !prev)}>
              {confirmShowPassword ? 
              <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : 
              <AiOutlineEye  fontSize={24} fill='#AFB2BF'/>}
            </span>

          </label>

        </div>

		    <button className='bg-yellow-400 rounded-md font-medium px-[12px] py-[8px] text-gray-700  mt-6 w-full' >Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;
