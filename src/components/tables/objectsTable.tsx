import React, { useEffect, useState } from 'react';
import SelectObjectsData from '../../queries/objects/Select_objects';
import { Objects } from '../../interface/objectsInterface';

interface ObjectTableProps {
  setSelectedObject: (object: Objects) => void;
}

const ObjectsTable: React.FC<ObjectTableProps> = ({setSelectedObject}) => {
  const [objectsData, setObjectData] = useState<Objects[]>([]);
  const completeDuties = 0;

  useEffect(() => {
    const fetchObjects = async () => {
      try {
        const objectsRes = await SelectObjectsData.Select_objects();
        setObjectData(objectsRes);
        setSelectedObject(objectsData[1]);
        console.log(objectsData);
      } catch (error) {
        console.log('Error fetching object', error);
      }
    };
    fetchObjects();
  }, []);

  const countWorkingDays = (startDay: string, endDay: string) => {
    let startDate = new Date(startDay);
    let endDate = new Date(endDay);

    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);

    const timeDiff = endDate.getTime() - startDate.getTime();
    const daysDiff = timeDiff / (1000 * 3600 * 24);

    return Math.max(Math.round(daysDiff), 1);
  };

  return (
    <div className='relative bg-[#ffffff] rounded-[15px] h-[100%] w-[40%] overflow-hidden mx-8'>
      <div className='h-full overflow-y-auto'>
        {objectsData.map((object, index) => (
          <div
            key={index}
            className='h-[15%] px-[30px] py-[15px] flex justify-between border-b border-gray-200 items-center'
            onClick={() => {setSelectedObject(object)}}
            >
              <div className='h-[60px] w-[60px] bg-[#D0DDD0] rounded-full'/>
            <div className='flex flex-col justify-between h-full py-3'>
            <div>
              {object.streat} {object.streat_number}, {object.city} {object.zip_code} 
            </div>
            <div>
              {object.start_date.replace(/T|-/g, match => (match === 'T' ? ' ' : '.')).slice(0,16)} - {object.end_date.replace(/T|-/g, match => (match === 'T' ? ' ' : '.')).slice(0,16)}
            </div>
            </div>
            <div className='pt-3 flex space-x-1 text-[18px] font-bold'>
              <p
                className={`${
                  completeDuties === 0 ? 'text-red-500' : 'text-green-500'
                }`}>
                {completeDuties}
              </p>
              <p className='pt-1 col'>/</p>
              <p className='pt-2'>
                {countWorkingDays(object.start_date, object.end_date)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ObjectsTable;
