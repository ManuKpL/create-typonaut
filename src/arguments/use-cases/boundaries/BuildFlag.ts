export type FlagValueHandler<T = unknown> = (value: string) => T;
export type Flag = Record<string, string | FlagValueHandler>;
export type BuildFlag = <T>(name: string, parser: (val: string) => T) => Flag;
