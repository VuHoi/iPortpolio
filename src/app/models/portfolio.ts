export interface Portfolio {
    userId: String;
    name: String;
    slug: String;
    profile: String;
    address: String;
    email: String;
    otherLink: String;
    phone: String;
    department: String;
    education: [
        {
            position: String,
            name: String,
            duration: String
        }
    ];
    skills: {
        title: String,
        process: Number
    };
    expertise: [String];
    experiences: [
        {
            discription: String,
            position: [String],
            address: String,
            name: String,
            duration: String
        }
    ];
}
