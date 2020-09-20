export interface Option<T = unknown> {
  name: string;
  path: string;
  initialValue: T;
  parser: (val: string) => T;
}

export interface OptionValues {
  [key: string]: unknown;
}

export type ReadArguments = (args: string[], options: Option[]) => OptionValues;
