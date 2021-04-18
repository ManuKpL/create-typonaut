import { fromWorkingDirectory } from '@src/adapters';
import { projectName } from '@src/options/availableOptions';
import type { Command } from './Command';

export default function makeCreateTyponaut(): Command {
  return async function createTyponaut(options) {
    const destination = fromWorkingDirectory(projectName.finalValue);
    for (const option of options) {
      await option.execute(destination);
    }
  };
}
