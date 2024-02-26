import React from 'react'
import Logo from '../assets/Logo.svg' ;
import { Link } from 'react-router-dom';
import {toast} from 'react-hot-toast' ;

const Navbar = (props) => {
	let isLoggedIn = props.isLoggedIn ;
	let setIsLoggedIn = props.setIsLoggedIn ;

  return (
	<div className='w-11/12 max-w-[1170px] flex justify-between items-center text-white py-4 mx-auto '>

		<div>
			<img src={Logo} alt='Logo' className='w-[160] hight-[32] lazy ' />
		</div>

		<nav>
			<ul className='flex gap-x-6'>
				<li>
					<Link to="/" >Home</Link>
				</li>
				<li>
					<Link to="/" >About</Link>
				</li>
				<li>
					<Link to="/" >Contack</Link>
				</li>
			</ul>

		</nav>

		<div className='flex gap-x-4 items-center '>
			{ !isLoggedIn &&
				<Link to="/login">
				   <button className='bg-gray-800 py-[6px] px-[12px] rounded-[12px] border border-gay-700 '>Log in</button>
				</Link>
			}
			{ !isLoggedIn &&
				<Link to="/signup">
				   <button className='bg-gray-800 py-[6px] px-[12px] rounded-[12px] border border-gay-700 '>Sign up</button>
				</Link>
			}
			{ isLoggedIn &&
				<Link to="/">
				   <button onClick={ () => {
					   setIsLoggedIn(false) ;
					   toast.success("Logged Out")
				   }} className='bg-gray-800 py-[6px] px-[12px] rounded-[12px] border border-gay-700 ' >Log out</button>
				</Link>
			}
			{ isLoggedIn &&
				<Link to="/dashboard">
				   <button className='bg-gray-800 py-[6px] px-[12px] rounded-[12px] border border-gay-700 '>Dashboard</button>
				</Link>
			}
		</div>
	  
	</div>
  )
}

export default Navbar ;