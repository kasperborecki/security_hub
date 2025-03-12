import { useEffect, useState } from "react";
import SelectGuardsData from "../../queries/guards/Select_guards";
import { Guards } from "../../interface/guardsInterface";

interface GuardChoiceModalProps {
    changeModalState: () => void;
    city: string | undefined,
    specialization:  number | undefined;
}

const GuardChoiceModal: React.FC<GuardChoiceModalProps> = ({ changeModalState, city, specialization }) => {

    const [guardsData, setGuardsData] = useState<Guards[]>([]);

    useEffect(() => {
        const fetchObjects = async () => {
          try {
            const objectsRes = await SelectGuardsData.Select_guards_basic_data(city, specialization);
            setGuardsData(objectsRes);
          } catch (error) {
            console.log('Error fetching object', error);
          }
        };
        fetchObjects();
    }, [city]);

    useEffect(() => {
        console.log(guardsData);
    }, [guardsData]);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-[1px] font-sans">
            <div className="relative bg-white h-[70%] w-[30%] rounded-2xl p-6">
                <div className="absolute top-1 right-4 font-extrabold text-2xl" onClick={changeModalState}>X</div>
                <div className="max-w-xl mx-auto px-4 sm:px-0 pt-4">
                    <div className="relative">
                      <input
                        placeholder="Wyszukaj pracownika"
                        className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100 hover:border-gray-400 dark:hover:border-gray-500 shadow-sm"
                        name="business-email"
                        type="email"
                      />
                    </div>
                </div>
                {guardsData.map((guard, index) => (
                <div key={index} className="flex justify-between items-center py-4">
                    <div className='h-[40px] w-[40px] bg-[#D0DDD0] rounded-full'/>
                    <div className="text-lg font-sans font-semibold">{guard.full_name}</div>
                    <div>
                    <button
                      title="Add New"
                      className="group cursor-pointer outline-none hover:rotate-90 duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35px"
                        height="35px"
                        viewBox="0 0 24 24"
                        className="stroke-blue-300 fill-none group-hover:fill-blue-500 group-active:stroke-blue-200 group-active:fill-blue-600 group-active:duration-0 duration-300"
                      >
                        <path
                          d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                          stroke-width="1.5"
                        ></path>
                        <path d="M8 12H16" stroke-width="1.5"></path>
                        <path d="M12 16V8" stroke-width="1.5"></path>
                      </svg>
                    </button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default GuardChoiceModal;
