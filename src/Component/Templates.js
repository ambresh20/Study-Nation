import React from 'react'
import LogInForm from './LogInForm' ;
import SignupForm from './SignupForm';
import frameImage from '../assets/frame.png' ;
import { FcGoogle } from "react-icons/fc";

const Templates = ({title, desc1, desc2, formType, image, setIsLoggedIn}) => {
  return (
	<div className='w-11/12 max-w-[1150px] flex justify-between py-12 mx-auto gap-x-12 gap-y-5 h-[150vh]'>

		<div className='w-11/12 max-w-[450px]'>
			<h1 className='font-bold text-gray-50 text-[1.875rem] leading-[2.735rem] '>{title}</h1>

			<p className='text-[1.225rem] leading-[1.625rem] mt-4 '>
				<span className='text-gray-300  '>{desc1}</span> <br/>
				<span className='text-blue-400 italic '>{desc2}</span>
			</p>

			{formType === "signup" ? 
			(<SignupForm setIsLoggedIn={setIsLoggedIn} />) : 
			(<LogInForm setIsLoggedIn={setIsLoggedIn} />) }

			<div className='w-full flex items-center my-4 gap-x-2 '>
				<div className='w-full h-[1px] bg-gray-700 '></div>
				<p className='font-semibold leading-[1.534rem] text-gray-400 '>OR</p>
				<div className='w-full h-[1px] bg-gray-700 '></div>
			</div>

			<button className='w-full flex justify-center items-center border border-gray-600 px-9 py-2 rounded-md font-medium gap-x-2'>
			    <FcGoogle className='text-3xl'/>
				<p className='text-gray-300 '>Sign in with Google</p>
			</button>

		</div>

        {/* for image and background images (frame images)  */}
		<div className='relative w-11/12 max-w-[450px] '> 
			<img src={frameImage} alt='frameImage' 
			width={558} height={504} loading='lazy' />
			
			<img src={image} alt='StudentImage'
			width={558} height={490} loading='lazy'
			className='absolute -top-4 right-5 ' />
		</div>
	  
	</div>
  )
}

export default Templates ;
