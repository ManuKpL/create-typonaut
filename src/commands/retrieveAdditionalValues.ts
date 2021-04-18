import { promptUser } from '@src/adapters';
import { Option } from '../options';
import type { Command } from './Command';

export default function makeRetrieveAdditionalValues(): Command {
  return async function retrieveAdditionalValues(options) {
    const openOptions = options.filter(Option.shouldPrompt);
    const additionalValues = await promptUser(openOptions);
    openOptions.forEach(Option.updateValueFromMap(additionalValues));
  };
}
