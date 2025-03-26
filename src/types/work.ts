export interface Work {
    id: number;
    title: string;
    description: string;
    problem: string;
    solution: string;
    role: string;
    time: string;
    image: {
        link: string,
        alt: string
    };
}