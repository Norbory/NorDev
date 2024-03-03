import {type Project} from "../../types/project";
import {
    REACT, 
    NODE, 
    EXPRESS, 
    MONGODB, 
    SOCKETIO, 
    TAILWINDCSS, 
    VITE, 
    CLOUDINARY, 
    NEXTJS, 
    SUPABASE, 
    DYNAMODB,
    SNS,
    IOTCORE,
    MAPS
} from "../../constants/svg";
import { useEffect, useState } from "react";

export const ProjectCard = ({ project, index }: { project: Project, index:number }) => {
    

  return (
    <section className={`fade-in text-dark rounded-lg p-6 mb-6 flex flex-wrap lg:flex-nowrap border-2 border-border bg-sunny bg-cover bg-center`} style={{backgroundImage: `url(${project.image})`}}>
        <div className={index%2!==0 ? "sm:block hidden w-full lg:w-2/5 self-center order-1 image-container": "sm:block hidden self-center w-full lg:w-2/5 order-1 md:order-3 image-container"} id={`image-${index}`}>
            <img src={project.image} alt={project.title} className="rounded-lg border-md shadow-lg w-full h-auto image" style={{"aspectRatio": 16/9}} />
        </div>
        <div className="w-full lg:w-3/5 px-10 lg:px-12 lg:pl-4 mt-4 order-2">
            <h2 className="text-xl font-bold mb-3 sm:text-dark text-tecno" style={{"textShadow": "2px 2px 4px #252525"}}>{project.title}</h2>
            <p className="mb-4 sm:block hidden">{project.description}</p>
            <div className="sm:flex flex-1 flex-row flex-wrap font-medium hidden">
                {project.tools.map((tool) => {
                    switch (tool) {
                        case "React":
                            return (
                                <div className="flex items-center bg-transparent border-1 text-active px-3 py-1 rounded-full mr-2 mb-2 bg-tecno hover:font-semibold">
                                    <REACT />
                                    <span className="ml-2 font-regular">{tool}</span>
                                </div>
                            );
                        case "Node.js":
                            return (
                                <div className="flex items-center bg-transparent border-1 text-active px-3 py-1 rounded-full mr-2 mb-2 bg-tecno hover:font-semibold">
                                    <NODE />
                                    <span className="ml-2 font-regular">{tool}</span>
                                </div>
                            );
                        case "Express":
                            return (
                                <div className="flex items-center bg-transparent border-1 text-active px-3 py-1 rounded-full mr-2 mb-2 bg-tecno hover:font-semibold">
                                    <EXPRESS />
                                    <span className="ml-2 font-regular">{tool}</span>
                                </div>
                            );
                        case "MongoDB":
                            return (
                                <div className="flex items-center bg-transparent border-1 text-active px-3 py-1 rounded-full mr-2 mb-2 bg-tecno hover:font-semibold">
                                    <MONGODB />
                                    <span className="ml-2 font-regular">{tool}</span>
                                </div>
                            );
                        case "Socket.io":
                            return (
                                <div className="flex items-center bg-transparent border-1 text-active px-3 py-1 rounded-full mr-2 mb-2 bg-tecno hover:font-semibold">
                                    <SOCKETIO />
                                    <span className="ml-2 font-regular">{tool}</span>
                                </div>
                            );
                        case "TailwindCSS":
                        return (
                            <div className="flex items-center bg-transparent border-1 text-active px-3 py-1 rounded-full mr-2 mb-2 bg-tecno hover:font-semibold">
                                <TAILWINDCSS />
                                <span className="ml-2 font-regular">{tool}</span>
                            </div>
                        );
                        case "Vite":
                        return (
                            <div className="flex items-center bg-transparent border-1 text-active px-3 py-1 rounded-full mr-2 mb-2 bg-tecno hover:font-semibold">
                                <VITE />
                                <span className="ml-2 font-regular">{tool}</span>
                            </div>
                        );
                        case "Cloudinary":
                        return (
                            <div className="flex items-center bg-transparent border-1 text-active px-3 py-1 rounded-full mr-2 mb-2 bg-tecno hover:font-semibold">
                                <CLOUDINARY />
                                <span className="ml-2 font-regular">{tool}</span>
                            </div>
                        );
                        case "NextJS":
                        return (
                            <div className="flex items-center bg-transparent border-1 text-active px-3 py-1 rounded-full mr-2 mb-2 bg-tecno hover:font-semibold">
                                <NEXTJS />
                                <span className="ml-2 font-regular">{tool}</span>
                            </div>
                        );
                        case "Supabase":
                        return (
                            <div className="flex items-center bg-transparent border-1 text-active px-3 py-1 rounded-full mr-2 mb-2 bg-tecno hover:font-semibold">
                                <SUPABASE />
                                <span className="ml-2 font-regular">{tool}</span>
                            </div>
                        );
                        case "DynamoDB":
                        return (
                            <div className="flex items-center bg-transparent border-1 text-active px-3 py-1 rounded-full mr-2 mb-2 bg-tecno hover:font-semibold">
                                <DYNAMODB />
                                <span className="ml-2 font-regular">{tool}</span>
                            </div>
                        );
                        case "AmazonSNS":
                        return (
                            <div className="flex items-center bg-transparent border-1 text-active px-3 py-1 rounded-full mr-2 mb-2 bg-tecno hover:font-semibold">
                                <SNS />
                                <span className="ml-2 font-regular">{tool}</span>
                            </div>
                        );
                        case "IoT Core":
                        return (
                            <div className="flex items-center bg-transparent border-1 text-active px-3 py-1 rounded-full mr-2 mb-2 bg-tecno hover:font-semibold">
                                <IOTCORE />
                                <span className="ml-2 font-regular">{tool}</span>
                            </div>
                        );
                        case "GoogleMapsAPI":
                        return (
                            <div className="flex items-center bg-transparent border-1 text-active px-3 py-1 rounded-full mr-2 mb-2 bg-tecno hover:font-semibold">
                                <MAPS />
                                <span className="ml-2 font-regular">{tool}</span>
                            </div>
                        );
                        default:
                            return (
                                <div className="flex items-center bg-transparent border-1 text-active px-3 py-1 rounded-full mr-2 mb-2">
                                    <span>{tool}</span>
                                </div>
                            );
                    }
                })}
            </div>
            <div className="sm:flex flex-row justify-end flex-wrap py-4 hidden">
                {project.linkfront && 
                (
                    <a href={project.linkfront} target="_blank" rel="noreferrer" className="flex flex-row justify-center items-center w-auto text-active py-1 px-4 transition duration-300 hover:bg-contrast border-lg border-2 border-border shadow-xl focus:outline-none focus:border-main focus:shadow-xl my-2 mx-2 rounded-lg hover:text-sunny">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="16px" height="20px">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </g>
                        </svg>
                        <span className="ml-2">Live Demo</span>
                    </a>
                )
                }
                {project.linkback && 
                (
                    <a href={project.linkback} target="_blank" rel="noreferrer" className="flex flex-row justify-center items-center w-auto text-active py-1 px-4 transition duration-300 hover:bg-contrast border-lg border-2 border-border shadow-xl focus:outline-none focus:border-main focus:shadow-xl my-2 mx-2 rounded-lg hover:text-sunny">
                         <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="16px" height="20px">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </g>
                        </svg>
                        <span className="ml-2">Code Backend</span>
                    </a>
                )
                }
                {project.code &&
                (
                    <a href={project.code} target="_blank" rel="noreferrer" className="flex flex-row justify-center items-center w-auto text-active py-1 px-4 transition duration-300 hover:bg-contrast border-lg border-2 border-border shadow-xl focus:outline-none focus:border-main focus:shadow-xl my-2 mx-2 rounded-lg hover:text-sunny">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="16px" height="20px">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </g>
                        </svg>
                        <span className="ml-2">Code Frontend</span>
                    </a>
                )
                }
                
            </div>
        </div>
    </section>
    )
};