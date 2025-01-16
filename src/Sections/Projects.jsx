import React, { useState} from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectSelect from "../components/ProjectSelect";
import ProjectLeftHeading from "../components/ProjectLeftHeading";
import { Project } from "../constants/Projects";

function Projects() {
  const [type, setType] = useState("all");

  const handleSelect = (value) => {
    setType(value);
    console.log(value);
  };

  return (
    <>
      <section id="projects">
        <div className="bg-black-main p-3 text-White-main h-full lg:flex cursor-round_green">
          <div className="mt-6 lg:mx-32 lg:my-10 lg:flex lg:flex-row lg:gap-56">
            <ProjectLeftHeading />
            <div>
              <ProjectSelect type={type} select={handleSelect} />
              {Project.filter((value) => {
                if (type === "all") {
                  return true;
                }
                return value.type === type;
              }).map((value) => (
                <ProjectCard
                  title={value.title}
                  desc={value.desc}
                  tools={value.tools}
                  year={value.year}
                  src={value.src}
                  link={value.link}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
