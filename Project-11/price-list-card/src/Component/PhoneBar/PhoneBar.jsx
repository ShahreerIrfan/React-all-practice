/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';


import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart,Bar } from 'recharts';


const PhoneBar = () => {
    const [phones,setPhones] = useState([])
    useEffect(()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res=>res.json())
        // .then(data=>setPhones(data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data=>{
            const loadedData = data.data.data
            // console.log(loadedData)
            const phonesData = loadedData.map(phone=>{
                const parts = phone.slug.split('-')
                const price = parseInt(parts[1])
                const phoneInfo = {
                    name : phone.phone_name,
                    price : price
                }
                return phoneInfo
            })
            console.log(phonesData)
            setPhones(phonesData)
        })
    },[])
    return (
        <div className='ml-12'>
            <BarChart  width={600} height={400} data={phones}>
                <Bar  dataKey="price" fill="#8884d8"></Bar>
                <XAxis dataKey="name"></XAxis>
                <YAxis/>
                <Tooltip/>
            </BarChart>
            
        </div>
    );
};

export default PhoneBar;

// .....