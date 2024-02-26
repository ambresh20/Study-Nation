import React from 'react'
import Templates from '../Component/Templates';
import singupImg from '../assets/signup.png' ;

const Signup = ({setIsLoggedIn}) => {

  return (
	<Templates
		title="Join the millions learning code to with StudyNation for free"
		desc1="Build skills for today, tomorrow, and beyond."
		desc2="Education to future proof your career."
		image={singupImg}
		formType="signup"
		setIsLoggedIn={setIsLoggedIn}
	/>
  )
}

export default Signup ;
