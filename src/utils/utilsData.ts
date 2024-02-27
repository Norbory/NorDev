import { type Project } from '../types/project';
import { SECRET_CHAT, INSTAGRAM_CLONE } from '../constants/images';

export const project: Project[] = [
    
        {
            title: "Instagram Clone",
            description: "Developing an Instagram clone utilizing WebSockets for real-time notifications. Features include secure login, user profiles, social interactions, real-time feed updates and notifications. Aimed at providing practical experience with modern web technologies and real-time functionalities.",
            link: "https://notify-me-lovat.vercel.app/",
            image: INSTAGRAM_CLONE,
            tools: ["React", "Vite", "Node.js", "Express", "Socket.io", "Cloudinary", "TailwindCSS"]
        },
        {
            title: "Secret Chat",
            description: "This is a description for Project 2",
            link: "https://github.com/Norbory/SecretChat",
            image: SECRET_CHAT,
            tools: ["Node.js", "Express", "MongoDB", "Socket.io", "TailwindCSS"]
        },
        {
            title: "Project 3",
            description: "This is a description for Project 3",
            link: "https://github.com",
            image: "https://via.placeholder.com/150",
            tools: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "Cloudinary", "TailwindCSS"]
        }
];