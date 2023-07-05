import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CEOCard = () => {
  return (
    <div className="w-full glassmorphism flex flex-row border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-16 mb-16">
      <div className="flex flex-col items-center justify-center w-80">
        <Image src="/assests/Memoji.svg" height={100} width={100} className="object-contain rounded-full" />
        <h1 className="text-xl font-bold  text-gray-700">Suraj Jha</h1>
      </div>
      <div>
        <div className="p-4 rounded-lg md:p-8 dark:bg-gray-600">
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-600 dark:text-white">Founder & CEO <span className="bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent">SIGMANODE</span></h2>
          <p className="mb-3  text-gray-500 dark:text-gray-400">Supercharge your software development journey with Sigma-Node! Join a vibrant community of like-minded developers for unparalleled knowledge sharing, collaboration, and inspiration. Discover thought-provoking posts, insightful blogs, bite-sized shorts, and engaging podcasts that keep you on the forefront of tech news and trends. Elevate your skills and stay ahead of the curve. Join Sigma-Node today!</p>
          <Link href="#" className="inline-flex items-center font-medium bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent">
            Join the Community
            <svg className="w-6 h-6 ml-1" fill="red" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CEOCard;
