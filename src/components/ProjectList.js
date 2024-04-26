import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project.id">
        {projects.map((projects)=>
                    <projectItem 
                    key={projects.id}
                    name={projects.name}
                    technologies={projects.technologies}
                    about={projects.about}
                    ></projectItem>)}
        </div>
    </div>
  );
}

export default ProjectList;
