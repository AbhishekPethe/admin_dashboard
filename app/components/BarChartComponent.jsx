'use client'
import React from 'react'
import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts'
const dataa = [
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

const BarChartComponent = ({data}) => {
    return (
    <div className='flex flex-col gap-2 w-full h-[200px]'>
            <h1 className='font-semibold text-xl'>{data.title}</h1>
            <div className='w-full h-full'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart width={150} height={40} data={data.chartData}>
                        <Tooltip
                         contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
                         labelStyle={{ display: "none" }}
                         cursor={{fill:"none"}}
                        />
                        <Bar dataKey={data.dataKey} fill={data.color} />
                    </BarChart>
                </ResponsiveContainer>
               
            </div>
    </div>
  )
}

export default BarChartComponent