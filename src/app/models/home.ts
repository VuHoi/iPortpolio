export interface Param2 {
    param1: String;
    param2: String;
}
export interface Param3 extends Param2 {
    param3: String;
}
export type Home = Partial<{
    userId: String;
    name: String;
    slug: String;
    university: Param2;
    hometown: Param2;
    hobbies: Param2;
    whoIam: Param3;
    skill_summary: Param3;
    _id?: String;
    status: boolean;
}>;
