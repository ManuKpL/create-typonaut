import { sortBy } from '@src/utils';
import { Command } from './commands';
import { Option, OPTIONS } from './options';

type Dependencies = {
  createTyponaut: Command;
  retrieveAdditionalValues: Command;
  readInitialValues: Command;
};

export default function makeRun({ createTyponaut, retrieveAdditionalValues, readInitialValues }: Dependencies) {
  return async function run(): Promise<void> {
    const options: Option[] = Object.values(OPTIONS).sort(sortBy('priority'));
    await readInitialValues(options);
    await retrieveAdditionalValues(options);
    await createTyponaut(options);
  };
}
