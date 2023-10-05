import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';



const SummaryChart = () => {
  const data = [
    {
      "name": "Jan",
      "items": 100
    },
    {
      "name": "Feb",
      "items": 150
    },
    {
      "name": "Mar",
      "items": 20
    },
    {
      "name": "April",
      "items": 40
    },
    {
      "name": "May",
      "items": 100
    },
    {
      "name": "June",
      "items": 10
    },
    {
      "name": "July",
      "items": 120
    },
    {
      "name": "Aug",
      "items": 10
    },
    {
      "name": "Sept",
      "items": 150
    }
    , {
      "name": "Nov",
      "items": 90
    },
    {
      "name": "Dec",
      "items": 60
    },

  ]
  const renderLineChart = (
    <ResponsiveContainer width={'100%'} height={300} >
      <LineChart data={data}
        margin={{ top: 10, right: 30, left: -10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="items" stroke="#F9A109" />
      </LineChart>
    </ResponsiveContainer>
  );
  return (
    <div className='select-none'>
      <h2 className='font-semibold text-xl mb-4'>Monthly Summary</h2>
      <div className='text-xs'>
        {renderLineChart}
      </div>
    </div>
  )
}

export default SummaryChart