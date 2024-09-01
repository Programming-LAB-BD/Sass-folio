import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import PositionContext from "../../../Contexts/PositionContext";

export default function Navigations({ navitems }) {
  const items = navitems;
  const { position, setPosition } = useContext(PositionContext);

  return (
    <div id="nav_area" className="md:pt-12">
      <ul className="flex flex-col gap-1">
        {items.map((item, index) => (
          <li
            className="pl-2 border-b border-secondary dark:border-dark_secondary py-2 last:border-b-0"
            key={index}
          >
            <button
              className="flex items-center justify-start gap-2"
              onClick={() => setPosition(item.name)}
            >
              <FontAwesomeIcon icon={`fa-solid ${item.icon}`} />
              <span> {item.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
