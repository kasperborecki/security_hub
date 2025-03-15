import { IoSettingsSharp } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";

const TopBar = () => {
    return(
        <div className="h-[100%] w-[100%] bg-[#ffffff] rounded-[15px] justify-end place-content-center px-5 flex flex-row items-center">
            <IoSettingsSharp  className="text-[35px] mr-5 text-[#3D3D3D]" />
            <IoMdNotifications  className="text-[35px] mr-5 text-[#3D3D3D]" />
            <div className='h-[50px] w-[50px] bg-[#D0DDD0] rounded-full'/>
        </div>
    );
};

export default TopBar;