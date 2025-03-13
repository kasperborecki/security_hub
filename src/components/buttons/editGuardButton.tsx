
const EditGuardButton = () => {
    return(
        <button
  className="rounded-lg relative w-48 h-8 cursor-pointer flex items-center border border-blue-500 bg-blue-500 group hover:bg-blue-500 active:bg-blue-500 active:border-greblueen-500"
>
  <span
    className="text-[#ffffff] font-semibold ml-3 transform group-hover:translate-x-20 transition-all duration-200"
    >Zmień Ochroniarza</span>
  <span
    className="absolute right-0 h-full w-10 rounded-lg bg-blue-500 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
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

export default EditGuardButton