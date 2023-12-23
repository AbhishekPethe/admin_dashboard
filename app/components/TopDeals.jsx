import React from 'react'
import { topDealUsers } from '../data'
import Image from 'next/image'

const TopDeals = () => {
  return (
      <div className='flex flex-col gap-3'>
          
          <h1 className='text-3xl mb-2 font-bold'>Top Deals</h1>
          <div className='flex flex-col gap-6'>
              
        {
            topDealUsers.map((each , i) => {
                  return (
                      <div key={i} className='flex  justify-between items-center text-sm' >
                          {/* image */}
                          <div className='rounded-full overflow-hidden w-[40px] h-[40px] max-[400px]:hidden '>
                              {/* <img src={each.img} alt="" className='object-cover w-full h-full' /> */}
                              <Image
                                  src={each.img}
                                  alt=''
                                  width={40}
                                  height={40}
                                  className='w-full h-full object-cover'

                              />
                          </div>

                          {/* name && email */}
                          <div className='flex flex-col gap-1'>
                              <p className='font-medium'>{each.username}</p>
                              <p className='text-xs'>{each.email}</p>
                          </div>

                          {/* price */}
                          <p>${each.amount}</p>

                      </div>
                )
            })      
              }
          </div>
    </div>
  )
}

export default TopDeals