import React from 'react'

const FeatureCard = () => {
    const FeatureItem = [
        {
            "id":1,
            "title":"Unrivaled Community",
            "description":"Sigma-Node provides an unparalleled community of passionate software developers who are eager to connect, collaborate, and share their expertise. Engage with like-minded individuals, expand your network, and foster meaningful connections that can fuel your professional growth..",
            "image":"/assests/Community.png"
        },
        {
            "id":2,
            "title":"Diverse Content Formats",
            "description":"With Sigma-Node, you gain access to a diverse range of content formats tailored to suit your preferences and learning style. Dive into thought-provoking posts, insightful blogs, bite-sized shorts, and engaging podcasts, ensuring you stay up-to-date with the latest tech trends and expand your knowledge in the most convenient way possible.",
            "image":"/assests/Content.png"
        },
        {
            "id":3,
            "title":"Cutting-Edge Tech Insights",
            "description":"Stay at the forefront of the ever-evolving tech landscape with Sigma-Node's focus on delivering the most cutting-edge tech news and trends. Gain valuable insights into emerging technologies, industry best practices, and innovative solutions that can give you a competitive edge in your software development journey.",
            "image":"/assests/3rd_.png"
        }
    ]
  return (
    <>
{FeatureItem.map((item)=>(
    <div key={item.id} className="max-w-sm glassmorphism border  rounded-lg m-3 shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={item.image} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-left  text-gray-900 dark:text-white">{item.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 text-left dark:text-gray-400">{item.description}</p>
       
    </div>
</div>
))}
    </>
  )
}

export default FeatureCard