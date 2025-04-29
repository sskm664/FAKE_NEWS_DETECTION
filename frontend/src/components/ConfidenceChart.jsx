import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const COLORS = ['#00C49F', '#FF8042'];

const ConfidenceChart = ({ real, fake }) => {
  const data = [
    { name: 'Real', value: real },
    { name: 'Fake', value: fake },
  ];

  return (
    <div className="flex justify-center">
      <PieChart width={300} height={250}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  );
};

export default ConfidenceChart;
