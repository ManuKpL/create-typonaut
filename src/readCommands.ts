import { Initializer } from './initializers';
import { readParams } from './readParams';

type Command = () => Promise<void>;

export function readCommands(options: Initializer<unknown>[]): Command[] {
  const activedOptions = options.filter((option) => option.value);
  const params = readParams();

  return activedOptions.map((option) => async () => option.handler(params));
}
