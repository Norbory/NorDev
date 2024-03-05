import { type Project } from '../types/project';
import { SECRET_CHAT, INSTAGRAM_CLONE, WAREHOUSE, GEOCLOUD } from '../constants/images';

export const project: Project[] = [
    
        {
            title: "Instagram Clone",
            description: "Developing an Instagram clone utilizing WebSockets for real-time notifications. Features include secure login, user profiles, social interactions, real-time feed updates and notifications. Aimed at providing practical experience with modern web technologies and real-time functionalities. Use Amandros as user to login.",
            linkfront: "https://notify-me-lovat.vercel.app/",
            linkback: "https://github.com/Norbory/NotifyMe_Server",
            code: "https://github.com/Norbory/NotifyMe",
            image: INSTAGRAM_CLONE,
            tools: ["React", "Vite", "Node.js", "Express", "Socket.io", "Cloudinary", "TailwindCSS"]
        },
        {
            title: "Secret Chat",
            description: "Real-time editable notes board built using Node.js, Express, MongoDB, and sockets. It allows users to create, view, edit, and delete notes collaboratively. Node.js with Express handles the server-side logic and API endpoints, while MongoDB stores the notes data. Socket.IO facilitates real-time communication, ensuring that changes made by one user are instantly reflected across all connected clients viewing the same note.",
            linkfront: "",
            linkback: "https://github.com/Norbory/SecretChat",
            code: "",
            image: SECRET_CHAT,
            tools: ["Node.js", "Express", "MongoDB", "Socket.io", "TailwindCSS"]
        },
        {
            title: "Geodigital Warehouse",
            description: "Geohidrac S.A.C.'s digital warehouse, powered by React, Supabase, Next.js, and Tailwind CSS, revolutionizes inventory management for mining operations. Combining Next.js for server-side rendering and Supabase for backend operations ensures scalability and security. Tailwind CSS facilitates responsive design. The application includes features such as real-time inventory tracking, barcode integration, low stock notifications, and comprehensive reporting. This streamlined solution optimizes Geohidrac S.A.C.'s warehouse operations in mining environments efficiently..",
            linkfront: "https://geo-digital.vercel.app/",
            linkback: "https://github.com/Norbory/RESTInventario",
            code: "https://github.com/Norbory/GeoDigital",
            image: WAREHOUSE,
            tools: ["React", "NextJS", "Supabase", "TailwindCSS"]
        },
        {
            title: "Geocloud",
            description: "Geohidrac S.A.C.'s project involves gathering sensor data from various mines across Peru. Leveraging tools such as React, Vite, DynamoDB, Amazon SNS, Tailwind CSS, IoT Core, and Google Maps API, the project creates a robust system. IoT technologies, including RFID, are employed to collect data on-site and upload it to the cloud seamlessly. This comprehensive approach enables Geohidrac S.A.C. to efficiently monitor and manage mining operations, enhancing safety, productivity, and decision-making processes.",
            linkfront: "",
            linkback: "",
            code: "https://github.com/Norbory/GeoDigital",
            image: GEOCLOUD,
            tools: ["React", "Vite", "DynamoDB", "AmazonSNS", "TailwindCSS", "IoT Core", "GoogleMapsAPI"]
        },
];