import React from 'react'
import Logo from '../../assets/images/logo.png'

const Header = () => {
  return (
   <header className='flex justify-around items-center h-[10dvh] absolute z-10 inset-0' >
    <img src={Logo} alt="Logo" className='h-[20px] md:h-[40px]' />
    <div>
    <select className='bg-transparent text-white border border-white/20 py-2 px-4 rounded-md text-sm' name="language" id="language">
  <option className='text-gray-900' value="en">English</option>
  <option className='text-gray-900'  value="es">Spanish</option>
  <option className='text-gray-900'  value="fr">French</option>
</select>
    <button className='py-2 px-4 ml-6 bg-red-600 hover:bg-red-700 rounded-md text-white text-sm duration-300'>Sign In</button>
   </div>

   </header>
  )
}

export default Header
