interface Experience {
    header: string;
    date: string;
    linkUrl: string;
    description: string;
    techStacks: string[];
}

export const experiences: Experience[] = [
    {
        header: "CDG Systems (Intern)",
        date: "July 2024 - Present",
        linkUrl: "https://www.cdgs.co.th/",
        description: "Developed web applications based on program specifications. Generated reports using i-net Clear Reports. Created automated tests with Cypress. Assisted and mentored fellow interns.",
        techStacks: ["Angular", "Typescript", "Java", "Cypress", "i-net Clear Reports"]
    },
    {
        header: "Sunday Ins (Intern)",
        date: "April 2024 - June 2024",
        linkUrl: "https://easysunday.com/en/",
        description: "Developed and maintained production-level web applications for the organization. Collaborated with QA teams to minimize the risk of website errors. Resolved high and critical issues from yarn audit to reduce vulnerabilities in web applications.",
        techStacks: ["Next.js", "Node.js", "Ant Design", "MySQL", "Sequelize", "Docker", "Jenkins"]
    }
];