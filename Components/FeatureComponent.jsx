import React from 'react'
import FeatureCard from './FeatureCard'



const FeatureComponent = () => {
  return (
    <section className='flex flex-1 justify-center text-center flex-col'>
        {/* heading */}
        <h2 className="text-center mb-5 font-bold text-xl bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent">Own Your Content</h2>

        <h1 className='text-center mb-5 font-extrabold text-5xl  text-gray-700'>Connect, Collaborate, <span className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent'>Inspire you audience</span> </h1>

       <div className='flex justify-around items-center flex-row space-x-4'>
       <FeatureCard/>
       </div>
    </section>
  )
}

export default FeatureComponent