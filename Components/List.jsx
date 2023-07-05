import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { BsFillPenFill } from 'react-icons/bs';
import Link from 'next/link';

const List = ({ data, handleDelete }) => {
  const keywordColors = [
    'bg-yellow-200',
    'bg-blue-300',
    'bg-green-300',
    'bg-red-200',
    // Add more colors as needed
  ];

  return (
    <>
      <section className="text-gray-600 body-font border-gray-400">
        {data.map((item, index) => (
          <div className="container mt-4" key={item.title}>
            <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mb-5">
              <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
                {item.title}
              </h1>
              <Link href={`/${index}`} key={index}>
                <button className="flex-shrink-0 text-white m-2 bg-[#00BFA6] border-0 py-2 px-8 focus:outline-none  rounded text-lg mt-10 sm:mt-0">
                  <BsFillPenFill />
                </button>
              </Link>
              <button
                onClick={() => handleDelete(index)}
                className="flex-shrink-0 block text-white m-2 bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg mt-10 sm:mt-0"
              >
                <AiFillDelete />
              </button>
            </div>
            <div className="flex flex-wrap">
              {item.keywords &&
                item.keywords.map((keyword, keywordIndex) => (
                  <button
                    key={keyword}
                    className={`text-xs font-medium inline-flex items-center py-1 px-3 m-1 rounded dark:bg-gray-700 dark:text-blue-400 border ${keywordColors[keywordIndex % keywordColors.length]}`}
                  >
                    {keyword}
                  </button>
                ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default List;