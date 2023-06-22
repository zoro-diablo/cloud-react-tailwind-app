import React from 'react'

import { HiCheck } from 'react-icons/hi2'

// const myStyle = {
//   fontFamily: 'Droid Sans',
// }

const AllinOne = () => {
  return (
    <div name='platforms' className='w-full my-32 '>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center'>All-in-One Platform</h2>
        <p className='3xl text-2xl py-8 text-gray-500 text-center'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At aliquam
          sit reiciendis harum maiores maxime accusamus facere quo porro soluta?
        </p>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
          <div className='flex'>
            <div>
              <HiCheck className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='text-lg font-bold'>Notifications</h3>
              <p className='text-sm pt-2 pb-4 ' style={{fontFamily:'Verdana'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus in obcaecati, debitis nesciunt voluptate architecto?
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <HiCheck className='w-7 mr-4 text-green-600'/>
            </div>
            <div>
              <h3 className='text-lg font-bold'>Machine Learning (ML)</h3>
              <p className='text-sm pt-2 pb-4 ' style={{fontFamily:'Verdana'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus in obcaecati, debitis nesciunt voluptate architecto?
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <HiCheck className='w-7 mr-4 text-green-600'/>
            </div>
            <div>
              <h3 className='text-lg font-bold'>Cloud Networking</h3>
              <p className='text-sm pt-2 pb-4 ' style={{fontFamily:'Verdana'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus in obcaecati, debitis nesciunt voluptate architecto?
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <HiCheck className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='text-lg font-bold'>Cloud Security</h3>
              <p className='text-sm pt-2 pb-4 ' style={{fontFamily:'Verdana'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus in obcaecati, debitis nesciunt voluptate architecto?
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <HiCheck className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='text-lg font-bold'>Microservices</h3>
              <p className='text-sm pt-2 pb-4 ' style={{fontFamily:'Verdana'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus in obcaecati, debitis nesciunt voluptate architecto?
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <HiCheck className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='text-lg font-bold'>High Availability</h3>
              <p className='text-sm pt-2 pb-4 ' style={{fontFamily:'Verdana'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus in obcaecati, debitis nesciunt voluptate architecto?
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <HiCheck className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='text-lg font-bold'>Private Cloud</h3>
              <p className='text-sm pt-2 pb-4 ' style={{fontFamily:'Verdana'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus in obcaecati, debitis nesciunt voluptate architecto?
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <HiCheck className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='text-lg font-bold'>Hybrid Cloud</h3>
              <p className='text-sm pt-2 pb-4 ' style={{fontFamily:'Verdana'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus in obcaecati, debitis nesciunt voluptate architecto?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllinOne
