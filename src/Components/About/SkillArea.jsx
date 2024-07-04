import SkillProgress from "./SkillProgress";

export default function SkillArea({ skillProgressItems }) {
  const items = [...skillProgressItems];
  return (
    <div
      id="skill_section"
      className="md:min-w-[40%] text-text_secondary dark:text-dark_text_secondary"
    >
      <div className="bg-primary dark:bg-dark_primary py-6 rounded-md">
        <div className="text-center">
          <h2 className="text-2xl font-semibold inline-block border-b-2 border-text_secondary px-2">
            Skills
          </h2>
        </div>
        <div className="flex flex-col items-center px-2">
          {items.map((item, index) => (
            <SkillProgress
              name={item.name}
              progress={item.progress}
              key={index}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
