import React, { useState } from 'react'
import {assets} from '../assets/assets'
import {NavLink, useNavigate} from 'react-router-dom'


const Navbar = () => {

  // here all the state variables will define
  const [showMenu, setShowMenu] = useState(false)
  const [token, setToken] =  useState(true)

  const navigate = useNavigate()

  // all the functions will define here
  // this is the function to navigate to the login page after hitting thr create account button
  const createAccountRedirect = () =>{
    console.log("Redirecting to the login page")
    navigate('/login')
    console.log('Redirected')
  }
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img className="w-44 cursor-pointer" src={assets.logo} alt="prescripto logo" />
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        {/* for the home */}
        <NavLink
            to="/"
            className={({ isActive }) =>
              "flex flex-col items-center" // container styling
            }
          >
            {({ isActive }) => (
              <>
                <li className="py-1">HOME</li>
                <hr
                  className={`border-none outline-none h-0.5 w-3/5 m-auto ${
                    isActive ? "bg-[#5f6FFF]" : "bg-transparent"
                  }`}
                />
              </>
            )}
        </NavLink>

        {/* for all the doctors */}
        <NavLink
            to="/doctors"
            className={({ isActive }) =>
              "flex flex-col items-center" // container styling
            }
          >
            {({ isActive }) => (
              <>
                <li className="py-1">ALL DOCTORS</li>
                <hr
                  className={`border-none outline-none h-0.5 w-3/5 m-auto ${
                    isActive ? "bg-[#5f6FFF]" : "bg-transparent"
                  }`}
                />
              </>
            )}
        </NavLink>

        {/* for the about */}
        <NavLink
            to="/about"
            className={({ isActive }) =>
              "flex flex-col items-center" // container styling
            }
          >
            {({ isActive }) => (
              <>
                <li className="py-1">ABOUT</li>
                <hr
                  className={`border-none outline-none h-0.5 w-3/5 m-auto ${
                    isActive ? "bg-[#5f6FFF]" : "bg-transparent"
                  }`}
                />
              </>
            )}
        </NavLink>
        {/* for the contact */}
        <NavLink
            to="/contact"
            className={({ isActive }) =>
              "flex flex-col items-center" // container styling
            }
          >
            {({ isActive }) => (
              <>
                <li className="py-1">CONTACT</li>
                <hr
                  className={`border-none outline-none h-0.5 w-3/5 m-auto ${
                    isActive ? "bg-[#5f6FFF]" : "bg-transparent"
                  }`}
                />
              </>
            )}
        </NavLink>


      </ul>
      {/* button for create account */}
      <div className='flex items-center gap-4'>
        {
          token
          ? (
            <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-9 rounded-full' src={assets.profile_pic} alt="" />
              <img className='w-2.5' src={assets.dropdown_icon} alt="" />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-3 p-4 '>
                  <p onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                  <p onClick={()=>navigate('/my-rprofile')} className='hover:text-black cursor-pointer'>My Appointments</p>
                  <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                </div>
              </div>
            </div>
          )
          :  (<button onClick={createAccountRedirect} className='btn-primary text-white px-8 py-3 rounded-full font-light hidden md:block cursor-pointer'>Create account</button>)
        }
      </div>
    </div>
  )
}

export default Navbar