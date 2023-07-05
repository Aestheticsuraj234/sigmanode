import Tabs from "./Tabs";
import { BsCheck2All } from "react-icons/bs"
const NotificationCard = () => {
   


    return (
        <div className="fixed z-50 top-16 right-3 bottom-28 left-auto w-full max-w-3xl p-4 bg-white border border-gray-100 rounded-lg shadow-lg sm:p-8">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 ">Notifications</h5>
                <span className="text-sm flex gap-2 cursor-pointer font-semibold px-5 py-5 hover:bg-gray-200 rounded-lg leading-none text-green-600  ">Mark All As Read <BsCheck2All size={18} /></span>
                {/* <!-- Heroicon name: chevron-down --> */}
            </div>
            <hr className="bg-gray-600"/>
            <div className="flow-root h-64 ">
                <Tabs/>
            </div>

        </div>
    );
};

export default NotificationCard;
