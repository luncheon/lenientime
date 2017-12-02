export interface LenientimeLike {
    readonly hour?: number;
    readonly hours?: number;
    readonly minute?: number;
    readonly minutes?: number;
    readonly second?: number;
    readonly seconds?: number;
    readonly millisecond?: number;
    readonly milliseconds?: number;
    readonly am?: boolean;
    readonly pm?: boolean;
}
export default class Lenientime {
    private _totalMilliseconds;
    static INVALID: Lenientime;
    static ZERO: Lenientime;
    static padStart(source: any, maxLength: number, pad?: string): any;
    static padEnd(source: any, maxLength: number, pad?: string): any;
    static _pad(padLength: number, pad?: string): string;
    static firstNumberOf(...args: (any | undefined)[]): number | undefined;
    static totalMillisecondsOf(time: LenientimeLike): number;
    static normalizeMillisecondsInOneDay(milliseconds: number): number;
    static of(hmsaOrMilliseconds: number | LenientimeLike): Lenientime;
    static now(): Lenientime;
    static parse(s: string): Lenientime;
    private constructor();
    readonly hour: number;
    readonly hour12: number;
    readonly minute: number;
    readonly second: number;
    readonly millisecond: number;
    readonly am: boolean;
    readonly pm: boolean;
    readonly hours: number;
    readonly hours12: number;
    readonly minutes: number;
    readonly seconds: number;
    readonly milliseconds: number;
    readonly H: string;
    readonly h: string;
    readonly k: string;
    readonly m: string;
    readonly s: string;
    readonly S: string;
    readonly SS: string;
    readonly SSS: string;
    readonly a: string;
    readonly A: string;
    readonly aa: string;
    readonly AA: string;
    readonly HH: any;
    readonly _H: any;
    readonly hh: any;
    readonly _h: any;
    readonly kk: any;
    readonly _k: any;
    readonly mm: any;
    readonly _m: any;
    readonly ss: any;
    readonly _s: any;
    readonly HHmm: string;
    readonly HHmmss: string;
    readonly HHmmssSSS: string;
    readonly totalMilliseconds: number;
    readonly totalSeconds: number;
    readonly totalMinutes: number;
    readonly valid: boolean;
    readonly invalid: boolean;
    toString(): string;
    format(template: string): string;
    with(time: LenientimeLike): Lenientime;
    plus(time: LenientimeLike): Lenientime;
    minus(time: LenientimeLike): Lenientime;
    equals(time: LenientimeLike): boolean;
    compareTo(time: LenientimeLike): number;
    isBefore(another: LenientimeLike): boolean;
    isBeforeOrEqual(another: LenientimeLike): boolean;
    isAfter(another: LenientimeLike): boolean;
    isAfterOrEqual(another: LenientimeLike): boolean;
    isBetweenExclusive(start: LenientimeLike, end: LenientimeLike): boolean;
    isBetweenInclusive(min: LenientimeLike, max: LenientimeLike): boolean;
}
