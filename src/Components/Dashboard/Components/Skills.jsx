import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Skills({handleSkillLengthDecrease, uniqueKey, name, progress, onNameChange, onProgressChange}) {
  
  const clickF = () => {
    handleSkillLengthDecrease(uniqueKey);
  };

  return (
    <div className="flex items-center gap-2 mb-2">
      <div className="grid grid-flow-col grid-cols-3 gap-2 w-full">
        <input
          type="text"
          placeholder="Enter Your Skill Name"
          className="p-2 border rounded border-gray-900 bg-[#c7ebee] text-gray-900 col-span-2"
          value={name}
          onChange={(e) => onNameChange(uniqueKey, e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Your Skill Progress"
          className="p-2 border rounded border-gray-900 bg-[#c7ebee] text-gray-900 col-span-1"
          value={progress}
          onChange={(e) => onProgressChange(uniqueKey, e.target.value)}
        />
      </div>
      <FontAwesomeIcon icon="fa-solid fa-circle-xmark" className="text-xl cursor-pointer" onClick={clickF} />
    </div>
  );
}
