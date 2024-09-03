import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Skill() {
  return (
    <div className="input-form-group mb-8 w-[100%] md:w-[550px]">
      <label htmlFor="input" className="font-medium pl-1">
        Skills :
      </label>
      <div className="flex items-center gap-2">
        <div className="grid grid-flow-col grid-cols-3 gap-2 w-full">
          <input
            type="text"
            placeholder="Enter Your Skill Name"
            className="p-2 border rounded border-gray-900 bg-[#c7ebee] text-gray-900 col-span-2"
          />
          <input
            type="number"
            placeholder="Enter Your Skill Progress"
            className="p-2 border rounded border-gray-900 bg-[#c7ebee] text-gray-900 col-span-1"
          />
        </div>
        <FontAwesomeIcon
          icon="fa-solid fa-circle-info"
          className="text-xl cursor-pointer"
        />
      </div>
      <div className="info text-xs text-zinc-400 mb-6">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nam
          porro, fugiat voluptatibus
        </p>
      </div>
    </div>
  );
}
