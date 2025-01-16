import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { ToolStack, TechStack } from "../constants/Tech_Tools_Stack";
import { ProjectSource } from "../constants/ProjectSource";
function ProjectLeftHeading() {
  return (
    <>
      <div>
        <div className="lg:sticky lg:top-10">
          <h1 className="font-extrabold text-3xl lg:text-6xl">
            MY
            <br />
            PROJECTS
          </h1>
          <div className="flex flex-row gap-5">
            {ProjectSource.map((source) => (
              <a href={source.url}>
                <div className="flex lg:items-center" key={source.title}>
                  {source.title}
                  <FiArrowUpRight className="text-green-main size-6" />
                </div>
              </a>
            ))}
          </div>
          <div className="mt-3">
            <h1 className="text-lg">Tech Stack</h1>
            <div className="flex flex-wrap gap-1 ">
              {TechStack.map((stack, index) => (
                <div
                  key={stack}
                  className="hover:bg-green-main px-6 border border-green-main"
                >
                  {stack}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-3">
            <h1 className="text-lg">Tool Stack</h1>
            <div className="flex flex-wrap gap-1 ">
              {ToolStack.map((stack, index) => (
                <div
                  key={stack}
                  className="hover:bg-green-main px-6 border border-green-main"
                >
                  {stack}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectLeftHeading;
