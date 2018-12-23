export enum haha {
    mot = 'mot',
    hai = 'hai'
}

export type numbertest = Partial<Record<haha, string>>;

export class Numbertest2 {
    numbers: Record<string, string> = {};
    number1s: numbertest;
}


export type anytest = Partial<{ (...param: object[]) }>;
interface Foo {
    foo: number;
    common: string;
}

interface Bar {
    bar: number;
    common: string;
}

/**
 * User Defined Type Guard!
 */
function isFoo(arg: any): arg is Foo {
    return arg.foo !== undefined;
}
