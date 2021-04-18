import arg from 'arg';
import { AnyEntry, AnyObject } from '@src/utils';
import { ConfirmOption, Option } from '@src/options';

type Parser<T = unknown> = (value: string) => T;

function readOptionParser(option: Option): Parser {
  if (option instanceof ConfirmOption) {
    return Boolean;
  }
  return String;
}

function buildFlagEntries(option: Option): [string, string | Parser][] {
  const fullFlagName = `--${option.name}`;
  const aliasName = `-${option.name[0]}`;

  return [
    [fullFlagName, readOptionParser(option)],
    [aliasName, fullFlagName],
  ];
}

function parseInputEntries(inputs: AnyObject & { _: string[] }): AnyEntry[] {
  const removeNonFlagValues = ([key]: AnyEntry): boolean => key !== '_';
  const parseFlagToName = ([key, value]: AnyEntry): AnyEntry => [key.slice(2), value];
  return Object.entries(inputs).filter(removeNonFlagValues).map(parseFlagToName);
}

export function readArguments(args: string[], options: Option[]): Record<string, unknown> {
  if (!args.length) {
    return {};
  }

  const flags = Object.fromEntries(options.flatMap(buildFlagEntries));
  const inputs = arg(flags, { argv: args, permissive: true });
  return Object.fromEntries(parseInputEntries(inputs));
}
