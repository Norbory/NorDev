import {type Project} from "../../types/project";
import {REACT, NODE, EXPRESS, MONGODB, SOCKETIO, TAILWINDCSS, VITE} from "../../constants/svg";

export const ProjectCard = ({ project, index }: { project: Project, index:number }) => {
  return (
    <section className="bg-sunny text-dark rounded-lg p-6 mb-6 flex flex-wrap lg:flex-nowrap border-2 border-border">
        <div className={index%2!==0 ? "w-full lg:w-2/5": "w-full lg:w-2/5 order-2"}>
            <img src={project.image} alt={project.title} className="rounded-lg border-md shadow-lg w-full h-auto lg:h-full" style={{"aspectRatio": 16/9}} />
        </div>
        <div className=" w-full lg:w-3/5 px-10 lg:px-12 lg:pl-4 mt-4">
            <h2 className="text-xl font-bold mb-3">{project.title}</h2>
            <p className="mb-4">{project.description}</p>
            <div className="flex flex-1 flex-row font-medium">
                {project.tools.map((tool) => {
                    switch (tool) {
                        case "React":
                            return (
                                <div className="flex items-center bg-transparent border-2 border-main text-border px-3 py-1 rounded-full mr-2 mb-2 hover:bg-main hover:text-sunny hover:font-semibold">
                                    <REACT />
                                    <span className="ml-2">{tool}</span>
                                </div>
                            );
                        case "Node.js":
                            return (
                                <div className="flex items-center bg-transparent border-2 border-main text-border px-3 py-1 rounded-full mr-2 mb-2 hover:bg-main hover:text-sunny hover:font-semibold">
                                    <NODE />
                                    <span className="ml-2">{tool}</span>
                                </div>
                            );
                        case "Express":
                            return (
                                <div className="flex items-center bg-transparent border-2 border-main text-border px-3 py-1 rounded-full mr-2 mb-2 hover:bg-main hover:text-sunny hover:font-semibold">
                                    <EXPRESS />
                                    <span className="ml-2">{tool}</span>
                                </div>
                            );
                        case "MongoDB":
                            return (
                                <div className="flex items-center bg-transparent border-2 border-main text-border px-3 py-1 rounded-full mr-2 mb-2 hover:bg-main hover:text-sunny hover:font-semibold">
                                    <MONGODB />
                                    <span className="ml-2">{tool}</span>
                                </div>
                            );
                        case "Socket.io":
                            return (
                                <div className="flex items-center bg-transparent border-2 border-main text-border px-3 py-1 rounded-full mr-2 mb-2 hover:bg-main hover:text-sunny hover:font-semibold">
                                    <SOCKETIO />
                                    <span className="ml-2">{tool}</span>
                                </div>
                            );
                        case "TailwindCSS":
                        return (
                            <div className="flex items-center bg-transparent border-2 border-main text-border px-3 py-1 rounded-full mr-2 mb-2 hover:bg-main hover:text-sunny hover:font-semibold">
                                <TAILWINDCSS />
                                <span className="ml-2">{tool}</span>
                            </div>
                        );
                        case "Vite":
                        return (
                            <div className="flex items-center bg-transparent border-2 border-main text-border px-3 py-1 rounded-full mr-2 mb-2 hover:bg-main hover:text-sunny hover:font-semibold">
                                <VITE />
                                <span className="ml-2">{tool}</span>
                            </div>
                        );
                        default:
                            return (
                                <div className="flex items-center bg-transparent border-2 border-main text-border px-3 py-1 rounded-full mr-2 mb-2">
                                    <span>{tool}</span>
                                </div>
                            );
                    }
                })}
            </div>
            <a href={project.link} target="_blank" rel="noreferrer" className="inline-block bg-main text-sunny py-2 px-4 rounded transition duration-300 hover:bg-active border-md">
                View Project
            </a>
        </div>
            
    </section>

    )
};