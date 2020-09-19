import { InitializerType } from './InitializerType';
import { Initialize } from './Initialize';

export interface Initializer<T = unknown> {
  priority: number;
  name: string;
  argPath: string;
  flag: boolean;
  type: InitializerType;
  defaultValue: T;
  value: T | null;
  prompt: string;
  handler: Initialize;
  choices?: T[];
}
