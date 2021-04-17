import { buildArgumentReader, buildFlag } from '../services';
import makeReadArguments from './readArguments';

const readArguments = makeReadArguments({
  buildFlag,
  buildArgumentReader,
});
export { readArguments };
export * from './boundaries';
