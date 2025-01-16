import React from "react";

function ProjectSelect(props) {
  const { type, select } = props;

  return (
    <div className="bg-black-main border border-green-main sticky mt-5 top-12 flex justify-evenly">
      <div
        onClick={()=>select("all")}
        className={`${
          type === "all" ? "bg-green-main" : "bg-black-main"
        } ${
            type === "all" ? "text-black-main" : "text-white"
          } w-full flex justify-center cursor-pointer transition-all ease-in-out`}
      >
        all
      </div>
      <div
        onClick={()=>select("code")}
        className={`${
          type === "code" ? "bg-green-main" : "bg-black-main"
        } ${
            type === "code" ? "text-black-main" : "text-white"
          } w-full flex justify-center cursor-pointer transition-all ease-in-out`}
      >
        code
      </div>
      <div
        onClick={()=>select("ui/ux")}
        className={`${
          type === "ui/ux" ? "bg-green-main" : "bg-black-main"
        } ${
            type === "ui/ux" ? "text-black-main" : "text-white"
          } w-full flex justify-center cursor-pointer transition-all ease-in-out`}
      >
        ui/ux
      </div>
      <div
        onClick={()=>select("graphic")}
        className={`${
          type === "graphic" ? "bg-green-main" : "bg-black-main"
        } ${
            type === "graphic" ? "text-black-main" : "text-white"
          } w-full flex justify-center cursor-pointer transition-all ease-in-out`}
      >
        graphic
      </div>
    </div>
  );
}

export default ProjectSelect;
