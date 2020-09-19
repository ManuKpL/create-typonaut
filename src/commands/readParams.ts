import { join } from 'path';

import { Initializer } from '../initializers';

export function readParams(options: Initializer[]) {
  const destinationOption = options.find((o) => o.name === 'destination');
  const destinationPath = join(process.cwd(), (destinationOption?.value as string) ?? 'typonaut');

  return {
    destination: destinationPath,
    source: join(__dirname, '../../templates/full'),
  };
}
