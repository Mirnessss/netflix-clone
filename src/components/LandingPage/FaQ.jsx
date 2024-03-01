import React from 'react'
import AccordionCustomIcon from './AccordionCustomIcon'

const FaQ = () => {
  return (
    <section className='text-white flex flex-col justify-center items-center h-[100dvh] p-4'>
         <h1 className='text-3xl md:text-5xl font-extrabold text-white mb-4'>Frequently Asket Qustions</h1>
        <AccordionCustomIcon />
         <h5 className='text-md text-center md:text-xl mt-4'>Ready to watch? Enter your email to create or restart your membership.</h5>
         <form action="submit" className='flex flex-wrap justify-center gap-4 mt-4'>
        <input type="email" placeholder='Email address' required className='p-2 w-[20rem] md:w-[25rem] h-[4rem] px-8 text-sm bg-black/50 border border-white/20 rounded-md' />
        <button className='p-2 px-4 w-[20rem] md:w-[8rem] text-white text-md bg-red-600 hover:bg-red-700 rounded-md duration-300'>Get Started</button>
      </form>

    </section>
  )
}

export default FaQ
