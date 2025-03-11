import React, {useEffect, useState} from 'react';
import SelectObjectsData from '../../queries/objects/Select_objects';
import {Objects} from '../../interface/objectsInterface';

const ObjectsTable: React.FC = () => {
  const [objectsData, setObjectData] = useState<Objects[]>([]);
  const completeDuties = 0;

  useEffect(() => {
    const fetchObjects = async () => {
      try {
        const objectsRes = await SelectObjectsData.Select_objects();
        setObjectData(objectsRes);
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
    <div className='bg-[#FFFFFF] rounded-[15px] h-[100%] overflow-hidden'>
      {objectsData.map((object, index) => (
        <div
          key={index}
          className='h-[120xp] px-[30px] py-[15px] justify-between flex'>
          <div></div>
          <div>
            <div>
              {object.streat} {object.streat_number} {object.zip_code}{' '}
              {object.city}
            </div>
            <div>
              {object.start_date} - {object.end_date}
            </div>
          </div>
          <div className='pt-3 flex space-x-1 text-[18px] font-bold'>
            <p
              className={` ${
                completeDuties == 2 ? 'text-red-500' : 'text-greend-500'
              }`}>
              {completeDuties}
            </p>
            <p className='pt-1'>/</p>
            <p className='pt-2'>
              {countWorkingDays(object.start_date, object.end_date)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ObjectsTable;
