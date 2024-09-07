interface Project {
    header: string;
    linkUrl: string;
    description: string;
    techStacks: string[];
}

export const projects: Project[] = [
    {
        header: "Anonymii",
        linkUrl: "https://github.com/ipxz-p/anonymii-cloud",
        description: "Developed real-time web applications using Socket.io, deployed on EC2 in AWS, and utilized RDS for MySQL database management.",
        techStacks: ["React.js", "Node.js", "MySQL", "Socket.io"]
    },
    {
        header: "KMITinity",
        linkUrl: "https://github.com/ipxz-p/KMITinity",
        description: "Developed a community website with features for posting messages and images, allowing users to comment, like posts, and edit their profiles.",
        techStacks: ["React.js", "Node.js", "MongoDB"]
    },
    {
        header: "English-vocap",
        linkUrl: "https://github.com/ipxz-p/English-vocap",
        description: "Developed a website to assist in English language learning, featuring three main systems: creating vocabulary sets to store words and their translations, flashcards, and selecting translations from user-created or publicly available vocabulary sets.",
        techStacks: ["Vue.js", "Node.js", "MySQL"]
    },
    {
        header: "NovelApplication",
        linkUrl: "https://github.com/ipxz-p/NovelApplication",
        description: "Developed a service for managing novels, including handling individual chapters and authentication.",
        techStacks: ["react-native", "Node.js", "MongoDB"]
    }
];