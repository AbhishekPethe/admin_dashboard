'use client'
import React from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'


const data = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Laptop", value: 300, color: "#FFBB28" },
  { name: "Tablet", value: 200, color: "#FF8042" },
];

const PieChartComponent = () => {
  return (
    <div className='flex flex-col justify-between h-full '>
      <h1 className='text-3xl mb-2 font-bold'>Leads by Source</h1>
      <div>
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "10px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className='flex flex-row gap-1 justify-between'>
        <div class="flex flex-col gap-2">
            <div class="w-3 h-3 rounded-full bg-[#0088FE] "></div>
            <p>Mobile</p>
          </div>
          <div class="flex flex-col gap-2 ">
            <div class="w-3 h-3 rounded-full bg-[#00C49F] ">
            </div>
            <p>Desktop</p>
          </div>
          <div class="flex flex-col gap-2 ">
            <div class="w-3 h-3 rounded-full bg-[#FFBB28] ">
            </div>
            <p>Laptop</p>
          </div>
          <div class="flex flex-col gap-2 ">
            <div class="w-3 h-3 rounded-full bg-[#FF8042] ">
            </div>
            <p>Tablet</p>
          </div>
        
      </div>
    </div>
  )
}

export default PieChartComponent