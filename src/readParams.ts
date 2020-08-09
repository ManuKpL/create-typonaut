import { join } from 'path';

export function readParams() {
  return {
    destination: process.cwd(),
    source: join(__dirname, '../templates/full'),
  };
}
