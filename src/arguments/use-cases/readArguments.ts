import { merge } from '@src/utils';
import { BuildFlag, ReadArguments, BuildArgumentReader } from './boundaries';

interface ReadArgumentsBoundary {
  buildFlag: BuildFlag;
  buildArgumentReader: BuildArgumentReader;
}

export default function makeReadArguments({ buildFlag, buildArgumentReader }: ReadArgumentsBoundary): ReadArguments {
  return function readArguments(args, options) {
    const flags = options.map((option) => buildFlag(option.path, option.parser)).reduce(merge, {});

    const readArgument = buildArgumentReader(args, flags);

    return options
      .map((option) => ({
        [option.name]: readArgument(option.path, option.initialValue),
      }))
      .reduce(merge, {});
  };
}
