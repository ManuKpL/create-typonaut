import { Flag } from './BuildFlag';

export type BuildArgumentReader = (args: string[], flags: Flag) => ReadValue;
type ReadValue = <T>(path: string, currentValue: T | string | null) => T | string | null;
