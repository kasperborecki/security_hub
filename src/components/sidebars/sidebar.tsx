import SideBarButton from "../buttons/sideBarButton";
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { FaCarOn } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaFilm } from "react-icons/fa6";

const SideBar = () => {
    return(
        <div className="h-[100%] w-[20%] bg-[#ffffff] rounded-[15px] p-5 text-[#3D3D3D] place-items-start">
            <div className="flex flex-row items-center ml-6">
            <MdOutlineSpaceDashboard className="text-[30px] mr-2 "/>
            <SideBarButton text="Panel Główny" />
            </div>
            <div className="flex flex-row items-center ml-6">
            <FaCarOn  className="text-[30px] mr-2"/>
            <SideBarButton text="Interwencje" />
            </div>
            <div className="flex flex-row items-center ml-6">
            <FaMoneyBillWave  className="text-[30px] mr-2"/>
            <SideBarButton  text="Finanse" />
            </div>
            <div className="flex flex-row items-center ml-6">
            <FaFilm   className="text-[30px] mr-2"/>
            <SideBarButton text="Kursy" />
            </div>
            
        </div>
    );
};

export default SideBar;