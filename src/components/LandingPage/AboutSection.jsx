import React from 'react'
import TVmockup from '../../assets/images/tv.png'
import OtherDevices from '../../assets/images/otherdevices.png'
import Kids from '../../assets/images/kids.png'
import Download from '../../assets/images/download.jpg'
import Movie from '../../assets/images/movie.png'
import DownloadIcon from '../../assets/images/download-icon.gif'
import OtherVideo from '../../assets/images/video-devices.mp4'
import VideoTV from '../../assets/images/video-tv.mp4'

const AboutSection = () => {
  return (
    <section>
        <div className='h-[70dvh] bg-black pt-20 md:mt-10 md:pt-0 flex flex-col lg:flex-row text-center lg:text-left p-4 items-center justify-center gap-2'>
        <div className='text-white'>
        <h1 className='text-2xl lg:text-5xl font-extrabold'>Enjoy on your TV</h1>
        <h3 className='lg:text-2xl mt-4'>Watch on Smart TVs, Playstation, Xbox, Chromecast,<br />Apple TV, Bu-ray players, and more.</h3>
        </div>
        <div className="relative">
  <img src={TVmockup} alt="Other Devices Mockup" className="relative z-10" />
  <div className="absolute inset-0 flex items-center justify-center">
    <video src={VideoTV} autoPlay loop muted playsInline className="object-contain h-[275px] mb-1" />
  </div>
</div>
    </div>
    <div className='h-[70dvh] bg-black  flex flex-col lg:flex-row text-center lg:text-left p-4 items-center justify-center gap-2'>
    <div className="relative">
  <img src={OtherDevices} alt="Other Devices Mockup" className="relative z-10" />
  <div className="absolute inset-0 flex items-center justify-center">
    <video src={OtherVideo} autoPlay loop muted playsInline className="object-contain h-[150px] md:h-[220px] mb-20 md:mb-40" />
  </div>
</div>
        <div className='text-white'>
        <h1 className='text-2xl lg:text-5xl font-extrabold'>Watch everywhere</h1>
        <h3 className='lg:text-2xl mt-4'>Stream unlimited movies and TV shows on your phone, <br />tablet, laptop, and TV</h3>
        </div>
    </div>
    <div className='h-[70dvh] bg-black   flex flex-col lg:flex-row text-center lg:text-left p-4 items-center justify-center gap-2'>
        <div className='text-white'>
        <h1 className='text-2xl lg:text-5xl font-extrabold'>Create profiles for kids</h1>
        <h3 className='lg:text-2xl mt-4'>Send kids on adventures with their favorite characters <br />in a space made just for them--free with your <br />membership</h3>
        </div>
    <img src={Kids} alt="Kids" />
    </div>
    <div className='h-[70dvh] bg-black  flex flex-col lg:flex-row text-center lg:text-left p-4 items-center justify-center gap-2'>
        <div className='flex flex-col items-center'>
    <img className='relative' src={Download} alt="Download mockup" />
    <div className='h-[90px] w-[280px] md:h-[110px] md:w-[350px] rounded-lg bg-black border-2 border-white/40 absolute mt-60 lg:mt-80 p-4 flex gap-4 items-center justify-between'>
        <div className='flex items-center gap-4'>
        <img src={Movie} width={60} alt="" />
        <div>
        <h5 className='text-md text-white'>Stranger Things</h5>
        <p className='text-sm text-blue-600'>Downloading...</p>
        </div>
        </div>
        <img src={DownloadIcon} alt="download icon" width={50} />

    </div>
        </div>
        <div className='text-white mt-6 md:mt-0'>
        <h1 className='text-2xl lg:text-5xl font-extrabold'>Download your shows <br />to watch offline</h1>
        <h3 className='lg:text-2xl mt-4'>Watch on a plane, train, or submarine...</h3>
        </div>
    </div>
    </section>
  )
}

export default AboutSection
