/* eslint-disable react/jsx-key */
import React from 'react'
import Footer from './Footer'
import TopDeals from './TopDeals'
import TopBoxComponent from './TopBoxComponent'
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../data'
import BarChartComponent from './BarChartComponent'
import PieChartComponent from './PieChartComponent'
import AreaChartComponent from './AreaChartComponent'

let arr = [<TopDeals />,
<TopBoxComponent data={chartBoxUser} />, <TopBoxComponent data={chartBoxProduct} />, <PieChartComponent />,
<TopBoxComponent data={chartBoxConversion} />, <TopBoxComponent data={chartBoxRevenue} />, <AreaChartComponent />, <BarChartComponent data={barChartBoxVisit} />, <BarChartComponent data={barChartBoxRevenue} />]

const Default = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 grid-flow-dense auto-rows-[minmax(190px,auto)]'>
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