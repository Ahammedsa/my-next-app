import React from 'react';
const getTime = async() => {
    const res = await fetch("http://localhost:3000/time", {next:{revalidate:5}})
    const data = await res.json()
    return data.currentTime
}
const page = () => { 
    const currentTime = getTime()
    return (
        <div className='min-h-screen px-12 py-6'>
           <h6 className='text-3xl'>  About page In Build</h6>
           <h3 className='text-3xl'>Time:{currentTime}</h3>
        </div>
    );
};

export default page;