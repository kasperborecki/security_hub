import React, { useEffect, useState } from "react";
import { Objects } from "../../interface/objectsInterface";
import AddGuardButton from "../buttons/addGuardButton";
import GuardChoiceModal from "../modals/guardChoiceModal";
import { Duties } from "../../interface/dutiesInterface";
import SelectGuardsData from "../../queries/guards/Select_guards";
import EditGuardButton from "../buttons/editGuardButton";

interface ObjectCardProps {
  object: Objects | null;
}

const ObjectCard: React.FC<ObjectCardProps> = ({ object }) => {
  const [isModalShown, setIsModalShown] = useState<boolean>(false);
  const [dutiesData, setDuties] = useState<Duties[]>([]);
  const [selectedStartDate, setSelectedStartDate] = useState<string>('');
  const [selectedEndDate, setSelectedEndDate] = useState<string>('');

  useEffect(() => {
    const fetchDuties = async () => {
      try {
        const dutiesRes = await SelectGuardsData.Select_duties(object?.id);
        console.log(dutiesRes);
        setDuties(dutiesRes);
      } catch (error) {
        console.log('Error fetching object', error);
      }
    };
    fetchDuties();
  }, [object, isModalShown]);

  const getSchedule = (startDate: string, endDate: string, startHour: string, endHour: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      console.error("Nieprawidłowa data początkowa lub końcowa");
      return [];
    }

    const startHourParts = startHour.split(":");
    const endHourParts = endHour.split(":");

    start.setHours(parseInt(startHourParts[0]), parseInt(startHourParts[1]), 0, 0);
    end.setHours(parseInt(endHourParts[0]), parseInt(endHourParts[1]), 0, 0);

    const result = [];
    let currentStart = new Date(start);

    while (currentStart < end) {
      const currentEnd = new Date(currentStart);

      if (
        parseInt(endHourParts[0]) < parseInt(startHourParts[0]) ||
        (parseInt(endHourParts[0]) === parseInt(startHourParts[0]) && parseInt(endHourParts[1]) < parseInt(startHourParts[1]))
      ) {
        currentEnd.setDate(currentEnd.getDate() + 1);
      }

      currentEnd.setHours(parseInt(endHourParts[0]), parseInt(endHourParts[1]), 0, 0);

      const adjustedStart = new Date(currentStart.getTime() + 2 * 60 * 60 * 1000);
      const adjustedEnd = new Date(currentEnd.getTime() + 2 * 60 * 60 * 1000);

      const startFormatted = `${adjustedStart.getFullYear()}-${(adjustedStart.getMonth() + 1).toString().padStart(2, '0')}-${adjustedStart.getDate().toString().padStart(2, '0')} ${startHour}`;
      const endFormatted = `${adjustedEnd.getFullYear()}-${(adjustedEnd.getMonth() + 1).toString().padStart(2, '0')}-${adjustedEnd.getDate().toString().padStart(2, '0')} ${endHour}`;

      if (currentEnd > end) {
        result.push({
          start: startFormatted,
          end: endFormatted,
        });
        break;
      } else {
        result.push({
          start: startFormatted,
          end: endFormatted,
        });
      }

      currentStart = new Date(currentStart);
      currentStart.setDate(currentStart.getDate() + 1);
      currentStart.setHours(parseInt(startHourParts[0]), parseInt(startHourParts[1]), 0, 0);
    }

    return result;
  };

  const schedule = getSchedule(object?.start_date || '', object?.end_date || '', object?.start_hour || '', object?.end_hour || '');

  return (
    <div className="relative bg-[#ffffff] rounded-[15px] h-[100%] w-[60%] pb-4">
      <div className="h-full overflow-y-auto">
        <div className="flex items-center justify-center text-3xl font-bold m-4">
          {object?.object_name}
        </div>
        <div className="bg-[#D0DDD0] h-[350px] rounded-[15px] mx-8"></div>
        <div className="mx-8">
          <div className="mt-3">
            <p className="text-xl font-bold">Obiekt</p>
            <div className="ml-3">
              <p className="flex">
                <p className="font-semibold pr-1">Nazwa Obiektu: </p> {object?.object_name}
              </p>
              <p className="flex">
                <p className="font-semibold pr-1">Właściciel: </p> {object?.owner}
              </p>
              <p className="flex">
                <p className="font-semibold pr-1">Numer Kontaktowy: </p> {object?.contact_number}
              </p>
            </div>
          </div>
          <div className="mt-3">
            <p className="text-xl font-bold">Lokalizacja</p>
            <div className="ml-3">
              <p className="flex">
                <p className="font-semibold pr-1">Ulica: </p> {object?.streat} {object?.streat_number}
              </p>
              <p className="flex">
                <p className="font-semibold pr-1">Miasto: </p> {object?.city}
              </p>
              <p className="flex">
                <p className="font-semibold pr-1">Kod pocztowy: </p> {object?.zip_code}
              </p>
            </div>
          </div>
          <div className="mt-3">
            <p className="text-xl font-bold">Informacje dodatkowe</p>
            <div className="ml-3">
              <p className="flex">
                <p className="font-semibold pr-1">Data i godzina rozpoczęcia: </p> {object?.start_date.replace(/T|-/g, match => (match === 'T' ? ' ' : '.')).slice(0, 16)}
              </p>
              <p className="flex">
                <p className="font-semibold pr-1">Data i godzina zakończenia : </p> {object?.end_date.replace(/T|-/g, match => (match === 'T' ? ' ' : '.')).slice(0, 16)}
              </p>
              <p className="flex">
                <p className="font-semibold pr-1">Obchody: </p> {object?.object_round ? 'Tak' : 'Nie'}
              </p>
              {object?.object_round && (
                <p className="flex">
                  <p className="font-semibold pr-1">Ilość obchodów na zmianę: </p> {object?.number_of_rounds}
                </p>
              )}
              <p className="flex">
                <p className="font-semibold pr-1">Rodzaj ochroniarza: </p> {object?.body_guard_specialization}
              </p>
              <p className="flex">
                <p className="font-semibold pr-1">Stawka: </p> {object?.hour_rate} PLN
              </p>
            </div>
            <div>
              <p className="text-xl font-bold mt-3">Harmonogram zmian</p>
              <div className="ml-3">
                {schedule.map((item, index) => {
                  // Sprawdzamy, czy istnieje duty pasujące do zmiany
                  const matchingDuty = dutiesData.find(
                    (duty) =>
                      duty.start_date.replace(/T/g, ' ').slice(0, 16) === item.start
                  );

                  return (
                    <div key={index} className="flex pt-5">
                      <p className="flex pr-5 pt-1">
                        {item.start} - {item.end}
                      </p>
                      {matchingDuty ? (
                        <EditGuardButton />
                      ) : (
                        <AddGuardButton
                          changeModalState={() => setIsModalShown(!isModalShown)}
                          setSelectedStartDate={() => {
                            setSelectedStartDate(item.start);
                          }}
                          setSelectedEndDate={() => {
                            setSelectedEndDate(item.end);
                          }}
                          startDate={item.start}
                          endDate={item.end}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalShown ? (
        <GuardChoiceModal 
          changeModalState={() => setIsModalShown(prevState => !prevState)}
          city={object?.city}
          specialization={object?.body_guard_specialization} 
          objectId={object?.id}
          startDate={selectedStartDate}
          endDate={selectedEndDate}
        />
      ) : null}
    </div>
  );
};

export default ObjectCard;
