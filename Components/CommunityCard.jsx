import React from 'react'
import Image from 'next/image'

const CommunityCard = () => {
    return (
        <div className="flex mt-14 cursor-pointer justify-between items-center w-[100%] h-auto rounded-lg bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-300 mb-16   shadow-lg
    ">
            <div className=' flex justify-start items-start flex-col w-[60%]'>
                <h1 className='font-extrabold px-10 py-10 text-gray-800 text-left text-3xl'>✨Join a growing dev community of millions of active developers!.</h1>

                <p className=' px-10  text-gray-800 text-left font-semibold text-xl mb-4'>Sigma-Node is a platform exclusively for software developers, offering various content formats such as posts, blogs, shorts, and podcasts. Connect with other developers, share your expertise, and stay up-to-date with the latest tech news and trends.</p>

                <div className="flex  flex-row items-start justify-start  gap-3 mb-4 px-10 ">
                    <button class=" border place-items-start bg-gradient-to-r from-rose-700 to-pink-600 text-white font-medium py-2 px-4 rounded-3xl w-52 mr-4">
                        Get Started It's Free
                    </button>
                    <button class=" border  border-white place-items-start text-black font-medium py-2 px-4 rounded-3xl w-32 mr-4">
                        Try it out!
                    </button>
                </div>

            </div>

            {/* make a outlined button with rounded-full of try it out */}
            <Image
            src={"/assests/world.png"}
            width={500}
            height={500}
            alt='WOrld'
            className="object-contain mr-4"

            />
            
        </div>
    )
}

export default CommunityCard