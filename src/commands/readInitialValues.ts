import { readArguments } from '@src/adapters';
import type { Command } from './Command';
import { Option } from '../options';

export default function makeReadInitialValues(): Command {
  const args = process.argv.slice(2);

  return async function readInitialValues(options) {
    const initialValues = readArguments(args, options);
    options.forEach(Option.updateValueFromMap(initialValues));
  };
}
