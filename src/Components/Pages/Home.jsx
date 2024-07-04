import ImageArea from "../Home/ImageArea";
import SocialLink from "../Home/SocialLink";
import TextArea from "../Home/TextArea";

const socialLinkItems = [
  {
    link: "https://www.facebook.com/profile.php?id=100082335716805",
    icon: "fa-brands fa-facebook",
  },
  {
    link: "https://www.x.com",
    icon: "fa-brands fa-x-twitter",
  },
  {
    link: "https://github.com/Programming-LAB-BD",
    icon: "fa-brands fa-github",
  },
  {
    link: "https://bd.linkedin.com/",
    icon: "fa-brands fa-linkedin",
  },
];

const paragraph =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis excepturi possimus error eaque fugiat, quos nisi, aspernatur, porro beatae iste nostrum voluptates voluptatum dicta quasi quidem dolorem delectus. Temporibus, sed! Lorem ipsum dolor sit amet consectetur adipisicing elit.";

const span =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis excepturi possimus error eaque fugiat, quos nisi, aspernatur, porro beatae iste nostrum voluptates voluptatum dicta quasi quidem dolorem delectus. Temporibus, sed! Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis excepturi possimus error eaque fugiat, quos nisi, aspernatur, porro beatae iste nostrum voluptates voluptatum dicta quasi quidem dolorem delectus. Temporibus, sed! Lorem ipsum dolor sit amet consectetur adipisicing elit.";

const name = "MD. Mehedi Hasan Talha";

export default function Home() {
  return (
    <section>
      <div className="bg-primary_transparent dark:bg-dark_primary_transparent min-h-screen md:min-h-[91.3vh] text-text_primary dark:text-dark_text_primary">
        <div className="w-5/6 bg-opacity-100 mx-auto py-20 md:py-24 md:flex md:items-center md:justify-center md:min-h-full">
          <div className="flex gap-20 flex-col-reverse md:flex-row justify-between">
            <div className="text-center md:max-w-[60%]">
              <h1 className="text-4xl font-semibold mb-3">Hi, I&apos;m</h1>
              <h2 className="text-3xl mb-3">{name}</h2>
              <TextArea paragraph={paragraph} span={span} />
              <SocialLink socialLinkItems={socialLinkItems} />
            </div>
            <ImageArea />
          </div>
        </div>
      </div>
    </section>
  );
}
