
import { useState } from 'react';
import ObjectCard from '../components/cards/objectCard';
import ObjectsTable from '../components/tables/objectsTable';
import { Objects } from '../interface/objectsInterface';

function ObjectsScreen() {

    const [selectedObject, setSelectedObject] = useState<Objects | null>(null);

  return (
    <div className="bg-[#f8f8f4] h-screen overflow-hiden flex p-5 items-end justify-end text-[#3D3D3D]">
        <ObjectsTable setSelectedObject={setSelectedObject} />
        <ObjectCard object={selectedObject}/>
    </div>
  );
}

export default ObjectsScreen;
