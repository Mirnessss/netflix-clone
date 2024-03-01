import React from 'react'

const Footer = () => {
  return (
    <footer className='flex justify-center py-8 px-2 md:p-8 border-t-2 border-gray-800'>
      <div className='flex flex-row gap-6 justify-around md:w-[70dvw]'>
      <ul className='text-gray-700 flex flex-col gap-4 underline'>
        <li><a href='/'>Questions? Contact us</a></li>
        <li><a href='/'>FAQ</a></li>
        <li><a href='/'>Media Center</a></li>
        <li><a href='/'>Redeem Gift Cards</a></li>
        <li><a href='/'>Privacy</a></li>
        <li><a href='/'>Speed Test</a></li>
        <li><a href='/'>Ad Choices</a></li>
        <li><select className='bg-transparent text-white border border-white/20 bg-gray-900 py-2 px-4 rounded-md text-sm' name="language" id="language">
  <option className='text-gray-900' value="en">English</option>
  <option className='text-gray-900'  value="es">Spanish</option>
  <option className='text-gray-900'  value="fr">French</option>
</select></li>
        <li>Netflix Germany</li>
      </ul>
      <ul className='text-gray-700  md:hidden flex-col gap-4 underline' >
        <li><a href='/'>Investor Relations</a></li>
        <li><a href='/'>Buy Gift Cards</a></li>
        <li><a href='/'>Media Center</a></li>
        <li><a href='/'>Cookie Preferences</a></li>
        <li><a href='/'>Legal Guarantee</a></li>
        <li><a href='/'>Help Center</a></li>
        <li><a href='/'>Jobs</a></li>
        <li><a href='/'>Ways to watch</a></li>
        <li><a href='/'>Impressum</a></li>
        <li><a href='/'>Legal Notices</a></li>
        <li><a href='/'>Account</a></li>
        <li><a href='/'>Netflix Shop</a></li>
        <li><a href='/'>Therms of Use</a></li>
        <li><a href='/'>Contact Us</a></li>
        <li><a href='/'>Only on Netflix</a></li>
        </ul>
      <ul className='text-gray-700 hidden md:flex flex-col gap-4 underline' >
        <li><a href='/'>Investor Relations</a></li>
        <li><a href='/'>Buy Gift Cards</a></li>
        <li><a href='/'>Media Center</a></li>
        <li><a href='/'>Cookie Preferences</a></li>
        <li><a href='/'>Legal Guarantee</a></li>
        </ul>
        <ul className='text-gray-700 hidden md:flex  flex-col gap-4 underline'>
        <li><a href='/'>Help Center</a></li>
        <li><a href='/'>Jobs</a></li>
        <li><a href='/'>Ways to watch</a></li>
        <li><a href='/'>Impressum</a></li>
        <li><a href='/'>Legal Notices</a></li>
        </ul>
        <ul className='text-gray-700 hidden md:flex  flex-col gap-4 underline'>
        <li><a href='/'>Account</a></li>
        <li><a href='/'>Netflix Shop</a></li>
        <li><a href='/'>Therms of Use</a></li>
        <li><a href='/'>Contact Us</a></li>
        <li><a href='/'>Only on Netflix</a></li>
        </ul>
        </div>
    </footer>
  )
}

export default Footer
