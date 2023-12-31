/* eslint-disable no-unused-vars */
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DashBoard = () => {
    const marksArray = [
        { id: 1, name: 'John', physics: 85, chemistry: 90, math: 78 },
        { id: 2, name: 'Alice', physics: 70, chemistry: 88, math: 95 },
        { id: 3, name: 'Bob', physics: 92, chemistry: 75, math: 82 },
        { id: 4, name: 'Eva', physics: 80, chemistry: 94, math: 89 },
        { id: 5, name: 'Charlie', physics: 78, chemistry: 85, math: 96 },
        { id: 6, name: 'Sophia', physics: 88, chemistry: 80, math: 74 },
        { id: 7, name: 'Daniel', physics: 95, chemistry: 72, math: 90 },
        { id: 8, name: 'Olivia', physics: 84, chemistry: 87, math: 81 },
        { id: 9, name: 'Liam', physics: 76, chemistry: 91, math: 78 },
        { id: 10, name: 'Emma', physics: 89, chemistry: 82, math: 93 },
        { id: 11, name: 'Mason', physics: 81, chemistry: 93, math: 76 },
        { id: 12, name: 'Ava', physics: 94, chemistry: 79, math: 85 }
      ];
      
    return (
        <div className='m-12'>
            <LineChart className='bg-slate-800 rounded-l-lg'
                width={600}
                height={300}
                data={marksArray}
            >
                <Line dataKey="physics" stroke="#8884d8"></Line>
                <Line dataKey="chemistry" stroke="#82ca9d"></Line>
                <Line dataKey="math"></Line>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip/>

            </LineChart>
        </div>
    );
};

export default DashBoard;