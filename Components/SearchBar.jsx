import { useContext } from "react";
import { GlobalContext } from "@/context/globalContext";
import { AiOutlineClose } from "react-icons/ai"

const SearchBar = () => {

    const { handleToggleSearchBar } = useContext(GlobalContext)
    return (
        <div className='absolute top-0 left-0 right-0 bottom-0 glassmorphism h-screen w-screen justify-center items-center'>
            <form>
                <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-600  font-bold border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Search Blogs, Posts , Shorts , Podcasts , Tags , People" required />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
                </div>
            </form>
            <div onClick={handleToggleSearchBar} className="rounded-full cursor-pointer py-2 px-2 text-gray-600 transition-all h text-center text-sm font-inter flex items-center justify-center">
                <AiOutlineClose className="text-2xl" />
            </div>
        </div>

    );
};

export default SearchBar;
