export interface Home {
    userId: String;
    name: String;
    slug: String;
    university: {
        param1: String,
        param2: String
    };
    hometown: {
        param1: String,
        param2: String
    };
    hobbies: {
        param1: String,
        param2: String
    };
    whoIam: {
        param1: String,
        param2: String,
        param3: String
    };
    skill_summary: {
        param1: String,
        param2: String,
        param3: String
    };
    _id?: String;
}
