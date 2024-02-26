import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {Link, useNavigate} from 'react-router-dom' ;
import {toast} from 'react-hot-toast' ;

const LogInForm = ({setIsLoggedIn}) => {

	const navigate = useNavigate() ;

	const [formData, setFormData] = useState({email:"", password:""}) ;
	const [showPassword, setShowPassword] = useState(false) ;

	function changeHandler(event) {
		
		setFormData( (prevData) => (
			{...prevData,
			[event.target.name]:event.target.value}
		))
	}

	function submitHandler(event){
        event.preventDefault() ;
		setIsLoggedIn(true) ;
		toast.success("Logged In") ;
		navigate("/dashboard") ;
	}

  return (

	<form onSubmit={submitHandler}
	    className='flex flex-col w-full pt-5 gap-y-4 '>

		<label className='w-full '>

			<p className='text-[0.875rem] text-gray-300 mb-1 leading-[1.375rem] '>
				Email Address 
			    <sup className='text-pink-500 '>*</sup>
			</p>

			<input type='text' required name='email'  placeholder='Enter Email Id'
			value={formData.email} onChange={changeHandler}  
			className="bg-gray-800 rounded-[0.5rem] w-full p-[12px] text-gray-200 shadow-2xl "
			/>
		</label>

		<label className='w-full relative '>

			<p className='text-[0.875rem] text-gray-300 mb-1 leading-[1.375rem] '>
				Password 
				<sup  className='text-pink-500 '>*</sup>
			</p>

			<input type={showPassword ? ("text") : ("password")}
			required name='password'  placeholder='Enter Password'
			value={formData.password} onChange={changeHandler}  
			className="bg-gray-800 rounded-[0.5rem] w-full p-[12px] text-gray-200  "
			/>

            <span 
		        className='absolute right-3 top-[38px] cursor-pointer '
		        onClick={() => setShowPassword((prev) => !prev)}>
			    {showPassword ? 
			    (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 
			    (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) }
		    </span>

		    <Link to="#">
		        <p className='text-xs text-blue-400 max-w-max ml-auto mt-1'>Forgote Password</p>
		    </Link>

		</label>

		<button className='bg-yellow-400 rounded-md font-medium px-[12px] py-[8px] text-gray-700  mt-6'>Sign In</button>

	</form>

  )
}

export default LogInForm ;
