import arg from 'arg';

import { Initializer } from '../../initializers';
import { findHandler } from './findHandler';

function parseFlag({ argPath, type }: Initializer): arg.Spec {
  const fullFlag = argPath;
  const alias = argPath.slice(1, 3);
  const handler = findHandler(type);

  return {
    [fullFlag]: handler,
    [alias]: fullFlag,
  };
}

export function buildFlags(initializers: Initializer<unknown>[]) {
  return initializers
    .filter(({ flag }) => flag)
    .map(parseFlag)
    .reduce(
      (allFlags, singleFlagDefinition) => ({
        ...allFlags,
        ...singleFlagDefinition,
      }),
      {},
    );
}
