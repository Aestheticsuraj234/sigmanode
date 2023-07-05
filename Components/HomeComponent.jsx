import React from 'react'
import Link from 'next/link'

const HomeComponent = () => {
  return (
    <section className="">
        <Link href="#" className="flex cursor-pointer justify-between items-center w-[100%] h-32 rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
        ">
<p className='font-semibold px-10 py-10 text-white'>✨ <span className='font-bold underline pb-2 '>Unlock premium features</span> designed to enhance your writing with the power of AI — from ideation to publishing your best work.</p>
{/* make a outlined button with rounded-full of try it out */}
<button class=" border border-white text-white font-medium py-2 px-4 rounded-3xl w-32 mr-4">
  Try it out!
</button>
        </Link>
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">New world for tech Content-Creator and readers</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 ">Sigma-Node is a  platform exclusively for software developers, offering various content formats such as posts, blogs, shorts, and podcasts. Connect with other developers, share your expertise, and stay up-to-date with the latest tech news and trends.</p>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-gradient-to-r from-rose-700 to-pink-600 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started it's Free ✨
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
           
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/assests/Group.svg" alt="mockup"/>
        </div>                
    </div>
</section>
  )
}

export default HomeComponent