import { Option } from '@src/options';

export type Command = (options: Option[]) => Promise<void>;
