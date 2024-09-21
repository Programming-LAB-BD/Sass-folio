import { useContext } from "react";
import SDContext from "../../Contexts/ShowcaseDataContext";
import ImageArea from "../Home/ImageArea";
import SocialLink from "../Home/SocialLink";
import TextArea from "../Home/TextArea";

export default function Home() {
  const { name, introduction, facebook, instagram, twitter, github, linkedin } =
    useContext(SDContext);

  return (
    <section>
      <div className="bg-primary_transparent dark:bg-dark_primary_transparent min-h-screen md:min-h-[91.3vh] text-text_primary dark:text-dark_text_primary">
        <div className="w-5/6 bg-opacity-100 mx-auto py-20 md:py-24 md:flex md:items-center md:justify-center md:min-h-full">
          <div className="flex gap-20 flex-col-reverse md:flex-row justify-between">
            <div className="text-center md:max-w-[60%]">
              <h1 className="text-4xl font-semibold mb-3">Hi, I&apos;m</h1>
              <h2 className="text-3xl mb-3">{name}</h2>
              <TextArea introduction={introduction} />
              <SocialLink
                socialLinkItems={{
                  facebook,
                  instagram,
                  twitter,
                  github,
                  linkedin,
                }}
              />
            </div>
            <ImageArea />
          </div>
        </div>
      </div>
    </section>
  );
}
