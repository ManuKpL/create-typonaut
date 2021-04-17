import arg from 'arg';

import { BuildArgumentReader } from '../use-cases';

export default function makeBuildArgumentReader(): BuildArgumentReader {
  return function buildArgumentReader(args, flags) {
    const { _: inputs, ...flagsInputs } = arg(flags, { argv: args });

    return function readArgument(path, currentValue) {
      const isFlag = path.startsWith('-');
      const value = isFlag ? flagsInputs[path] : inputs[+path];
      return value ?? currentValue;
    };
  };
}
