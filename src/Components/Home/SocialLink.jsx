import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialLink({ socialLinkItems }) {
  const items = [...socialLinkItems];
  return (
    <div id="social-link" className="flex justify-evenly">
      <ul className="flex gap-5">
        {items.map((item, index) => (
          <li className="" key={index}>
            <a
              href={item.link}
              className="text-4xl text-text_primary dark:text-dark_text_primary hover:text-secondary dark:hover:text-dark_secondary transition-colors"
            >
              <FontAwesomeIcon icon={item.icon} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
