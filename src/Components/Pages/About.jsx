import AboutText from "../About/AboutText";
import SkillArea from "../About/SkillArea";
import PageContainer from "../Container/PageContainer";

const skillProgressItems = [
  {
    name: "HTML",
    progress: 90,
  },
  {
    name: "CSS with TailwindCSS",
    progress: 65,
  },
  {
    name: "Javascript (ES6)",
    progress: 70,
  },
  {
    name: "MEN (MongoDB, ExpressJS, NodeJS)",
    progress: 40,
  },
  {
    name: "ReactJS with NextJS",
    progress: 80,
  },
];

const aboutText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti possimus exercitationem eius dolore rem fugit porro at maiores, nulla magnam iste tempore recusandae et quo accusantium rerum odio, cupiditate nemo quasi vel blanditiis. Culpa repellat quisquam consequuntur dolorem explicabo rem repellendus dolore vel quos exercitationem dicta, laborum accusamus quasi odit tempore. Rerum iure id pariatur commodi velit, nihil repudiandae odit voluptas nobis, voluptate quas cum. Nobis, odit ea! Officia praesentium quisquam sed rem, veniam id non ullam modi dicta maiores a eius asperiores neque iste recusandae! Quis, cumque! Delectus aliquid labore quisquam eaque voluptatum! Ex doloribus quibusdam nihil inventore incidunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti possimus exercitationem eius dolore rem fugit porro at maiores, nulla magnam iste tempore recusandae et quo accusantium rerum odio, cupiditate nemo quasi vel blanditiis. Culpa repellat quisquam consequuntur dolorem explicabo rem repellendus dolore vel quos exercitationem dicta, laborum accusamus quasi odit tempore. Rerum iure id pariatur commodi velit, nihil repudiandae odit voluptas nobis, voluptate quas cum. Nobis, odit ea! Officia praesentium quisquam sed rem, veniam id non ullam modi dicta maiores a eius asperiores neque iste recusandae! Quis, cumque! Delectus aliquid labore quisquam eaque voluptatum! Ex doloribus quibusdam nihil inventore incidunt?";

export default function AboutPage() {
  return (
    <PageContainer heading={"About me"}>
      <div id="about" className="flex flex-col-reverse md:flex-row gap-14">
        <SkillArea skillProgressItems={skillProgressItems} />
        <AboutText text={aboutText} />
      </div>
    </PageContainer>
  );
}
