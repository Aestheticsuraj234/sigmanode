"use client"
import React, { useContext, useState } from 'react';
import { BiCommentDetail,BiCodeAlt } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { SlUserFollowing } from 'react-icons/sl';
import {RiAtLine} from "react-icons/ri"

import Table from './Table';

const Tabs = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = [
    { name: 'All Notification' },
    { name: 'Comments', icon: <BiCommentDetail size={28} /> },
    { name: 'Likes', icon: <AiOutlineHeart size={28} /> },
    { name: 'Mentions', icon: <RiAtLine size={28} /> },
    { name: 'Followers', icon: <SlUserFollowing size={28} /> },
    { name: 'Posts', icon: <BiCodeAlt size={28} /> },
  ];
  
  const handleTabClick = (category) => {
    setSelectedCategory(category);
  };

  const TabItem = ({ category }) => {
    return (
      <li className="inline-flex hover:bg-gray-100 rounded-lg  items-center gap-2 mr-2" key={category.name}>
        <a
          href="#"
          className={`px-4 flex flex-row gap-2 py-2 border-b-4 ${selectedCategory === category.name
            ? 'border-red-500 text-red-600 font-bold hover:text-red-600 dark:text-red-300 dark:hover:text-red-300'
            : 'border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 group'
          }`}
          onClick={() => handleTabClick(category.name)}
        >
          <span className="flex items-center justify-center">{category.icon}</span>
          <span className="text-lg">{category.name}</span>
        </a>
      </li>
    );
  };

  return (
    <div className="m-4">
      <div className="border-b border-gray-200 dark:border-gray-700 overflow-x-auto scrollbar scrollbar-track-slate-200 scrollbar-h-2 scrollbar-track-rounded-full scrollbar-thumb-black/30 scrollbar-thumb-rounded-full  ">
        <ul className="flex whitespace-nowrap pb-2">
          {categories.map((category) => (
            <TabItem category={category} key={category.name} />
          ))}
        </ul>
      </div>
      <Table selectedCategory={selectedCategory} />
    </div>
  );
};

export default Tabs;
