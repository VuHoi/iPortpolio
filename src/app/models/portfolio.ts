
export interface Education {
    position: String;
    name: String;
    duration: String;
}
export interface Skill {
    title: String;
    process: Number;
}
export interface Expertise {
    title: String;
}
export interface Experience {
    discription: String;
    position: [
        { title: String },
        { title: String },
        { title: String }
    ];
    address: String;
    name: String;
    duration: String;
}
export interface Project {
    name: String;
    param1: String;
    param2: String;
    icons: [String];
}
export type Portfolio = Partial<{
    _id?: String;
    userId: String;
    name: String;
    slug: String;
    profile: String;
    address: String;
    email: String;
    otherLink: String;
    phone: String;
    department: String;
    education: [Education, Education, Education];
    skills: [Skill, Skill, Skill, Skill, Skill, Skill];
    expertise: [Expertise, Expertise, Expertise, Expertise, Expertise, Expertise, Expertise, Expertise];
    experiences: [Experience, Experience];
    projects: [Project, Project, Project, Project];
}>;
