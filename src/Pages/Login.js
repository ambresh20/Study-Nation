import React from 'react'
import Templates from '../Component/Templates';
import loginImage from '../assets/login.png' ;

const Login = ({setIsLoggedIn}) => {

  return (
		<Templates
		title="Welcome Back"
		desc1="Build skills for today, tomorrow, and beyond."
		desc2="Education to future proof your career."
		image={loginImage}
		formType="login"
		setIsLoggedIn={setIsLoggedIn}
		/>
  )
}

export default Login ;
