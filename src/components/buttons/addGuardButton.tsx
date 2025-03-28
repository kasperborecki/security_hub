interface AddGuardButtonProps {
  changeModalState: () => void;
  setSelectedStartDate: (date: string) => void;
  setSelectedEndDate: (date: string) => void;
  startDate: string;
  endDate: string;
}

const AddGuardButton: React.FC<AddGuardButtonProps> = ({
changeModalState,
setSelectedStartDate,
setSelectedEndDate,
startDate,
endDate
}) => {
  return(
      <button
className="rounded-lg relative w-48 h-8 cursor-pointer flex items-center border border-green-500 bg-green-500 group hover:bg-green-500 active:bg-green-500 active:border-green-500"
onClick={() => {
  console.log("Kliknięto przycisk Dodaj Ochroniarza!");
  setSelectedStartDate(startDate); // Przykładowa wartość
  setSelectedEndDate(endDate);
  changeModalState();
}}
>
<span className="text-[#ffffff] font-semibold ml-3 transform group-hover:translate-x-20 transition-all duration-200">
  Dodaj Ochroniarza
</span>
<span className="absolute right-0 h-full w-10 rounded-lg bg-green-500 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
  <svg
    className="svg w-8 text-white"
    fill="none"
    height="24"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="12" x2="12" y1="5" y2="19"></line>
    <line x1="5" x2="19" y1="12" y2="12"></line>
  </svg>
</span>
</button>
  )
}

export default AddGuardButton;
