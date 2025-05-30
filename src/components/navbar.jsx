import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../context/AuthContext";

const Navbar = ()=>{
	const navigate = useNavigate()
	const {isAuthenticated} = useContext(authContext)
	const isAuth = isAuthenticated()
	
	const handleLogout = ()=>{
		localStorage.removeItem("accessToken")
		navigate("/")
	}
    return(
        <>
            <nav className=" w-screen relative sticky top-0 z-50 px-4 py-4 flex justify-between items-center bg-white shadow-md">
	        	<Link className="text-2xl flex items-center font-bold" to="/" >
	        		Trackify
	        	</Link>
	        	<div className="lg:hidden">
	        		<button className="navbar-burger flex items-center text-blue-600 p-3">
	        			<svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
	        				<title>Mobile menu</title>
	        				<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
	        			</svg>
	        		</button>
	        	</div>
	        	<ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex gap-2 lg:items-center lg:w-auto lg:space-x-6">
	        		<li><Link className="text-sm text-black-600 font-bold hover:text-gray-500" to="/" >Home</Link></li>
	        		<li><Link className="text-sm text-black-600 font-bold hover:text-gray-500" to="/about" >About Us</Link></li>
	        		<li><a className="text-sm text-black-600 font-bold hover:text-gray-500" >Services</a></li>
	        		<li><Link className="text-sm text-black-600 font-bold hover:text-gray-500" to="/contact" >Contact</Link></li>
	        		<li><Link className="text-sm text-black-600 font-bold hover:text-gray-500" to="/admin" >Admin</Link></li>
	        		<li><Link className="text-sm text-black-600 font-bold hover:text-gray-500" to="/products" >Products</Link></li>
					<p style={{color: "blue"}}>Thank you Abdullah</p>
	        	</ul>
				<div>

				{
					isAuth ? (
						
						<>
							<button className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" >Explore</button>
							<button onClick={handleLogout} className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" >Logout</button>
						</>
					):(
						<>
							<Link to={"/signup"} className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" >Sign up</Link>
							<Link to={"/signin"} className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" >Sign In</Link>
						</>
					)
				}
				</div>
	        </nav>
		<div className="navbar-menu relative z-50 hidden">
			<div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
	        	<nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
	        		<div className="flex items-center mb-8">
	        			<a className="mr-auto text-3xl font-bold leading-none" href="#">
	        				Trackify
	        			</a>
	        			<button className="navbar-close">
	        				<svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	        					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
	        				</svg>
	        			</button>
	        		</div>
	        		<div>
	        			<ul>
	        				<li className="mb-1">
	        					<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" >Home</a>
	        				</li>
	        				<li className="mb-1">
	        					<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" >About Us</a>
	        				</li>
	        				<li className="mb-1">
	        					<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" >Services</a>
	        				</li>
	        				<li className="mb-1">
	        					<a  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" >Contact</a>
	        				</li>
	        			</ul>
	        		</div>
	        		<div className="mt-auto">
	        			<div className="pt-6">
	        				<a className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl" href="*">Sign in</a>
	        				<a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl" >Sign Up</a>
	        			</div>
	        			<p className="my-4 text-xs text-center text-gray-400">
	        				<span>Copyright © 2025</span>
	        			</p>
	        		</div>
	        	</nav>
	        </div>
        </>
    )
}
export default Navbar;