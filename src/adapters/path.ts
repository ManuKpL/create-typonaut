import { join, resolve } from 'path';

export function templatePath(name: 'full'): string {
  const rootDirectory = resolve(__dirname, '../..');
  return join(rootDirectory, 'templates', name);
}

export function fromWorkingDirectory(...pathFragments: string[]): string {
  return join(process.cwd(), ...pathFragments);
}
