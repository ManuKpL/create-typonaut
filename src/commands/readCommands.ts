import { Initializer } from '../initializers';
import { sortBy } from '../utils';
import { readParams } from './readParams';

type Command = () => Promise<void>;

export function readCommands(options: Initializer[]): Command[] {
  const activedOptions = options.filter((option) => option.value);
  const params = readParams(activedOptions);

  return activedOptions.sort(sortBy('priority')).map((option) => async () => option.handler(params));
}
