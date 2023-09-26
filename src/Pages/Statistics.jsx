import React, { useState, useEffect, PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const StatisticsPage = () => {
  const [donationData, setDonationData] = useState([]);

  useEffect(() => {
    const initialData = JSON.parse(localStorage.getItem('donation')) || [];
    setDonationData(initialData);
  }, []);

  const totalItems = 12;
  const donatedItems = donationData.length;

  const data = [
    { name: 'Not Donated', value: totalItems - donatedItems },
    { name: 'Donated', value: donatedItems },
  ];

  const COLORS = ['#FF444A', '#00C49F'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className='py-20'>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={160}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className='mx-20 lg:flex md:flex gap-14 h-full justify-center'>
        <div className='flex gap-3 items-center'>
          <p className='font-medium'>Your Donation</p> <div className='w-24 h-3 bg-[#00C49F]'></div>
        </div>
        <div className='flex gap-3 items-center'>
          <p className='font-medium'>Total Donation</p> <div className='w-24 h-3 bg-[#FF444A]'></div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
