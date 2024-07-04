import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactInfoItem({ name, icon, text, index }) {
  return (
    <div
      className="item flex gap-3 py-4 border-b-2 border-text_secondary dark:border-dark_text_secondary last:border-b-0 mb-4"
      key={index}
    >
      <div className="icon text-xl">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="text">
        <h4 className="text-lg font-medium">{name} :</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}
