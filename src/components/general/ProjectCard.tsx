import {type Project} from "../../types/project";
import * as Icons from "../../constants/svg";

export const ProjectCard = ({ project, index }: { project: Project, index:number }) => {
  return (
    <section className="bg-sunny text-dark rounded-lg p-6 mb-6 flex flex-wrap lg:flex-nowrap border-2 border-border">
        <div className={index%2!==0 ? "w-full lg:w-2/5": "w-full lg:w-2/5 order-2"}>
            <img src={project.image} alt={project.title} className="rounded-lg border-md shadow-lg w-full h-auto lg:h-full" style={{"aspectRatio": 16/9}} />
        </div>
        <div className="w-full lg:w-3/5 px-10 lg:px-12 lg:pl-4 mt-4">
            <h2 className="text-xl font-bold mb-3">{project.title}</h2>
            <p className="mb-4">{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer" className="inline-block bg-main text-sunny py-2 px-4 rounded transition duration-300 hover:bg-active">
                View Project
            </a>
        </div>
            <div className="flex flex-1 flex-row">
                {project.tools.map((tool, index) => {
                    const IconComponent = Icons[tool.replace(".", "") as keyof typeof Icons];
                    return (
                        <div key={index} className="flex items-center mr-2">
                            <IconComponent className="w-6 h-6 mr-1"/>
                            <span>{tool}</span>
                        </div>
                    );
                })}
            </div>
    </section>

    )
};