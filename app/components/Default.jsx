/* eslint-disable react/jsx-key */
import React from 'react'
import Footer from './Footer'
import TopDeals from './TopDeals'
import TotalUsers from './TotalUsers'

let arr = [<TopDeals />, <TotalUsers />, 3, 4, 5, 6, 7, 8, 9]

const Default = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 grid-flow-dense auto-rows-[minmax(180px,auto)]'>
      {
        arr.map((each , i) => {
          return (
            <div key={i} className='border-gray-600 border-2 rounded-xl p-5 [&:nth-child(1)]:row-span-3 [&:nth-child(4)]:row-span-3 
            md:[&:nth-child(7)]:col-span-2 [&:nth-child(7)]:row-span-2'>
              {each}
            </div>
          )
        })
        
      }
    </div>
  )
}

export default Default