import React from 'react'

import {

  HiOutlineUserGroup,
  HiOutlineWrenchScrewdriver,
} from 'react-icons/hi2'

import { HiArrowRight } from 'react-icons/hi2'
import { AiFillDollarCircle } from 'react-icons/ai'

import supportImg from '../assets/imgonline-com-ua-ReplaceColor-qbAJkEPkGb5FmSjY.jpg'

const Support = () => {
  return (
    <div name='support' className='w-full  mt-24'>
      <div className='w-full h-[700px] bg-gray-900/90 absolute blur-sm'>
        <img
          className='w-full h-full object-cover mix-blend-overlay'
          src={supportImg}
          alt='supImg'
        />
      </div>
      <div className='max-w-[1240px] mx-auto text-white relative'>
        <div className='px-4 py-12'>
          <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>
            Support
          </h2>
          <h3 className='text-5xl font-bold tpy-6 text-center'>
            Finding the right team
          </h3>
          <p className='py-4 text-2xl text-slate-300 text-center'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
            assumenda iste fugit ipsam exercitationem dolorum. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Atque, qui?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis cumque deserunt earum deleniti voluptas excepturi!
          </p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
          <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
              <AiFillDollarCircle className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem] h-20' />
              <h3 className='font-bold text-2xl my-6'>Sales</h3>
              <p className='text-gray-600 text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi provident iure placeat blanditiis ea sint earum hic
                iste quibusdam exercitationem.
              </p>
            </div>
            <div className='bg-slate-100 pl-8 py-4'>
              <p className='flex items-center text-indigo-600'>
                Contact Us <HiArrowRight className='w-5 ml-2' />
              </p>
            </div>
          </div>
          <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
              <HiOutlineUserGroup className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem] h-20' />
              <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
              <p className='text-gray-600 text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi provident iure placeat blanditiis ea sint earum hic
                iste quibusdam exercitationem.
              </p>
            </div>
            <div className='bg-slate-100 pl-8 py-4'>
              <p className='flex items-center text-indigo-600'>
                Contact Us <HiArrowRight className='w-5 ml-2' />
              </p>
            </div>
          </div>
          <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
              <HiOutlineWrenchScrewdriver className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem] h-20' />
              <h3 className='font-bold text-2xl my-6'>Media Inquiries</h3>
              <p className='text-gray-600 text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi provident iure placeat blanditiis ea sint earum hic
                iste quibusdam exercitationem.
              </p>
            </div>
            <div className='bg-slate-100 pl-8 py-4'>
              <p className='flex items-center text-indigo-600'>
                Contact Us <HiArrowRight className='w-5 ml-2' />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support
