import { useContext } from "react";
import SDContext from "../../Contexts/ShowcaseDataContext";
import AboutText from "../About/AboutText";
import SkillArea from "../About/SkillArea";
import PageContainer from "../Container/PageContainer";

export default function AboutPage() {
  const { aboutText, skills } = useContext(SDContext);

  return (
    <PageContainer heading={"About me"}>
      <div id="about" className="flex flex-col-reverse md:flex-row gap-14">
        <SkillArea skillProgressItems={skills} />
        <AboutText text={aboutText} />
      </div>
    </PageContainer>
  );
}
