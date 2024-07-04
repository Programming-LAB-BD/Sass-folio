export default function SkillProgress({ name, progress, index }) {
  return (
    <div className="single_item w-full p-3" key={index}>
      <h3 className="text-lg font-medium mb-1">{name}</h3>
      <div className="w-full rounded-full h-2.5 bg-gray-700">
        <div
          className="bg-secondary dark:bg-dark_secondary h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
