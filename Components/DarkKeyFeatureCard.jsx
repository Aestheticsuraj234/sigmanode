import Image from "next/image"
import { AiFillGithub, AiFillThunderbolt } from "react-icons/ai"
import { BiWorld } from "react-icons/bi"
import {SiAppwrite} from "react-icons/si"

const DarkKeyFeatureCard = () => {
    return (
        <section className='bg-[#0f172a] flex w-[100%]  flex-col p-4 mt-12 rounded-lg max-w-full '>
            <h4 className='items-start justify-start flex text-left font-semibold text-green-500 '>Key Feature</h4>
            {/* subsection-1 */}
            <div className='flex flex-row justify-between items-center mt-3'>

                <h2 className='font-bold text-white text-4xl max-w-lg leading-10 '> Unleash Your Creativity with Sigma-Node's Multifaceted Content Platform</h2>
                <Image
                src={"/assests/DarkFeatureCard.png"}
                width={300}
                height={300}
                className="object-contain"
                />

            </div>
{/* Wanted to make a gird div where i need 2 cards in same row and other two into next row */}
            {/* subsection-2 */}
             {/* Subsection-2 */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        {/* Card 1 */}
        <div className="p-4 rounded-lg ">
          <h3 className="text-xl font-bold flex flex-row justify-start text-white items-center text-left gap-3">
          <AiFillGithub size={36} className="text-indigo-400"/>
          Automatic GitHub Backup
        </h3>
          <p className="text-base  text-white font-semibold flex justify-start px-11 items-center">Effortless GitHub Backup Integration: Safeguard Your Content with Sigma-Node's Automatic Backup Feature.</p>
        </div>
        {/* card-2 */}
        <div className="p-4 rounded-lg ">
          <h3 className="text-xl font-bold flex flex-row justify-start text-white items-center text-left gap-3">
          <BiWorld size={36} className="text-green-500"/>
          Social Sphere
        </h3>
          <p className="text-base  text-white font-semibold flex justify-start px-11 items-center">Stand Out in the Social Sphere: Create Your Online Presence on Sigma-Node's Platform without the Need for a Custom Domain.</p>
        </div>
{/* card-3 */}
        <div className="p-4 rounded-lg ">
          <h3 className="text-xl font-bold flex flex-row justify-start text-white items-center text-left gap-3">
          <SiAppwrite size={36} className="text-pink-600"/>
          Write in Markdown
        </h3>
          <p className="text-base  text-white font-semibold flex justify-start px-11 items-center">Seamless Markdown Writing Experience: Embrace Distraction-Free Creation with Sigma-Node's Dynamic Editor and Live Previews.</p>
        </div>
{/* card-4 */}
        <div className="p-4 rounded-lg ">
          <h3 className="text-xl font-bold flex flex-row justify-start text-white items-center text-left gap-3">
          <AiFillThunderbolt size={36} className="text-yellow-400"/>
          Unleash the Power of Next.js
        </h3>
          <p className="text-base  text-white font-semibold flex justify-start px-11 items-center">Experience Lightning-Fast, Next-Level Tech Publishing on Sigma-Node's Cutting-Edge Platform.</p>
        </div>
       
      </div>
           
                
        </section>
    )
}

export default DarkKeyFeatureCard