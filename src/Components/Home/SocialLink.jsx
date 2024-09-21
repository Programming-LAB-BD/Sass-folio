import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialLink({ socialLinkItems }) {
  const { facebook, instagram, twitter, github, linkedin } = socialLinkItems;
  return (
    <div id="social-link" className="flex justify-evenly">
      <ul className="flex gap-5">
        {facebook && (
          <li className="">
            <a
              href={facebook}
              className="text-4xl text-text_primary dark:text-dark_text_primary hover:text-secondary dark:hover:text-dark_secondary transition-colors"
            >
              <FontAwesomeIcon icon="fa-brands fa-facebook" />
            </a>
          </li>
        )}

        {instagram && (
          <li className="">
            <a
              href={instagram}
              className="text-4xl text-text_primary dark:text-dark_text_primary hover:text-secondary dark:hover:text-dark_secondary transition-colors"
            >
              <FontAwesomeIcon icon="fa-brands fa-instagram" />
            </a>
          </li>
        )}

        {twitter && (
          <li className="">
            <a
              href={twitter}
              className="text-4xl text-text_primary dark:text-dark_text_primary hover:text-secondary dark:hover:text-dark_secondary transition-colors"
            >
              <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
            </a>
          </li>
        )}

        {github && (
          <li className="">
            <a
              href={github}
              className="text-4xl text-text_primary dark:text-dark_text_primary hover:text-secondary dark:hover:text-dark_secondary transition-colors"
            >
              <FontAwesomeIcon icon="fa-brands fa-github" />
            </a>
          </li>
        )}

        {linkedin && (
          <li className="">
            <a
              href={linkedin}
              className="text-4xl text-text_primary dark:text-dark_text_primary hover:text-secondary dark:hover:text-dark_secondary transition-colors"
            >
              <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}
