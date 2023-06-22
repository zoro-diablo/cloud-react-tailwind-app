import React from 'react'

import bgImg from '../assets/anuntatech_Blog-08_Sep-21-removebg-preview-transformed.png'
import {
  HiCloudUpload,
  HiDatabase,
  HiOutlineServer,
  HiPaperAirplane,
} from 'react-icons/hi'

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
          <p className='text-2xl '>Unique Sequencing & Production</p>
          <h1 className='text-5xl py-3 md:text-7xl font-bold'>
            Cloud Management
          </h1>
          <p className='text-2xl'>This is our tech brand.</p>
          <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
        </div>
        <div>
          <img className='w-full' src={bgImg} alt='img' />
        </div>
        <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl'>
          <p className='mb-3'>Data Services</p>
          <div className='flex justify-between flex-wrap px-4 '>
            <p className='flex py-2 px-4 text-slate-500'>
              <HiCloudUpload className='h-6 text-indigo-600 mr-2 text-2xl ' />
                App Security
            </p>
            <p className='flex py-2 px-4 text-slate-500'>
              <HiDatabase className='h-6 text-indigo-600 mr-2 text-2xl' />
                Dashboard Design
            </p>
            <p className='flex py-2 px-4 text-slate-500'>
              <HiOutlineServer className='h-6 text-indigo-600 mr-2 text-2xl' />
                Cloud Data
            </p>
            <p className='flex py-2 px-4 text-slate-500'>
              <HiPaperAirplane className='h-6 text-indigo-600 mr-2 text-2xl' />
                Api
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
