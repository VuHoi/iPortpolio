export enum haha {
    mot = 'mot',
    hai = 'hai'
}

export type numbertest = Partial<Record<haha, string>>;

export class Numbertest2 {
    numbers: Record<string, string> = {};
    number1s: numbertest;
}
