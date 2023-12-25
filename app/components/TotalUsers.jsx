'use client'
import Link from 'next/link'
import React from 'react'
import { Line, LineChart, ResponsiveContainer } from 'recharts'
import { PiUsersBold } from "react-icons/pi";
const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

const TotalUsers = () => {
  return (
      <div className='flex flex-row h-full justify-between'>
          <div className='flex flex-col justify-between flex-1'>
              <h1 className='text-lg font-medium flex items-center gap-2'> <PiUsersBold className='text-[#8884d8] text-xl' /> Total Users</h1>
              <p className='text-3xl font-bold'>11,238</p>
              <Link href="/" className='text-sm text-[#8884d8]'>View all</Link>
          </div>
          <div className='flex flex-col justify-between flex-1'>
              <ResponsiveContainer width="100%" height="100%">
                  <LineChart width={300} height={100} data={data}>
                      <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                  </LineChart>
              </ResponsiveContainer>
              <p className='flex flex-col items-end'>
                  <span className='text-xl text-green-500 font-bold'>45%</span>
                  this month
              </p>
          </div>
          
      </div>
  )
}

export default TotalUsers