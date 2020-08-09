import arg from 'arg';

import { Initializer } from '../../initializers';
import { buildFlags } from './buildFlags';

function readValue(inputs: arg.Result<arg.Spec>): (initializer: Initializer) => Initializer {
  return (initializer) => {
    const { flag, argPath } = initializer;
    const value = flag ? inputs[argPath] : inputs._[+argPath];
    return {
      ...initializer,
      value: value ?? initializer.value,
    };
  };
}

export function readArguments(args: string[], initializers: Initializer[]): Initializer[] {
  const flags = buildFlags(initializers);
  const inputs = arg(flags, { argv: args });
  return initializers.map(readValue(inputs));
}
