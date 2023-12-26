'use client'
import Link from 'next/link'
import React from 'react'
import {  Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'



const TopBoxComponent = ({data}) => {
  return (
      <div className='flex flex-row h-full justify-between'>
          <div className='flex flex-col justify-between flex-1'>
        <h1 className='text-lg font-medium flex items-center gap-2'>
          <span className={`text-${data.color}-600 text-xl`}>
          {data.icon}
          </span>
          {data.title}</h1>
        <p className='text-3xl font-bold'>{data.number}</p>
        <Link href="/" className={`text-sm text-${data.color}-600`}>View all</Link>
          </div>
          <div className='flex flex-col justify-between flex-1'>
              <ResponsiveContainer width="100%" height="100%">
                  <LineChart width={300} height={100} data={data.chartData}>
                      <Tooltip
                          contentStyle={{ background: "transparent", border: "none" }}
                          labelStyle={{ display: "none" }}
                          position={{ x: 10, y: 50 }} />
                      <Line type="monotone" dataKey={`${data.dataKey}`} stroke={data.color} strokeWidth={2} dot={false} />
                  </LineChart>
              </ResponsiveContainer>
              <p className='flex flex-col items-end'>
          <span className={`text-xl ${data.percentage > 0 ? 'text-green-500' : 'text-red-600'} font-bold`}>{data.percentage}%</span>
                  this month
              </p>
          </div>
          
      </div>
  )
}

export default TopBoxComponent