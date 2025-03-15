import { useState } from 'react';
import ObjectCard from '../components/cards/objectCard';
import ObjectsTable from '../components/tables/objectsTable';
import { Objects } from '../interface/objectsInterface';

function ObjectsScreen() {
  const [selectedObject, setSelectedObject] = useState<Objects | null>(null);

  return (
    <div className="w-full h-full bg-[#f8f8f4] flex text-[#3D3D3D]">
      <ObjectsTable setSelectedObject={setSelectedObject} />
      <ObjectCard object={selectedObject} />
    </div>
  );
}

export default ObjectsScreen;
