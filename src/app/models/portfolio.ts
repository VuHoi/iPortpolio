export interface Portfolio {
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
    education: [
        {
            position: String,
            name: String,
            duration: String
        },
        {
            position: String,
            name: String,
            duration: String
        },
        {
            position: String,
            name: String,
            duration: String
        }
    ];
    skills: [
        {
            title: String,
            process: Number
        },
        {
            title: String,
            process: Number
        },
        {
            title: String,
            process: Number
        },
        {
            title: String,
            process: Number
        },
        {
            title: String,
            process: Number
        },
        {
            title: String,
            process: Number
        }];
    expertise: [
        { title: String },
        { title: String },
        { title: String },
        { title: String },
        { title: String },
        { title: String },
        { title: String },
        { title: String }

    ];
    experiences: [
        {
            discription: String,
            position: [
                { title: String },
                { title: String },
                { title: String }
            ],
            address: String,
            name: String,
            duration: String
        }
    ];
    projects: [
        {
            name: String,
            param1: String,
            param2: String,
            icons: [String]
        },
        {
            name: String,
            param1: String,
            param2: String,
            icons: [String]
        },
        {
            name: String,
            param1: String,
            param2: String,
            icons: [String]
        },
        {
            name: String,
            param1: String,
            param2: String,
            icons: [String]
        }
    ];
}
