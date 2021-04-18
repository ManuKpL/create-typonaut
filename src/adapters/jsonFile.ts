import { promisify } from 'util';
import { readFile, writeFile } from 'fs';
import { join } from 'path';

import { AnyObject } from '@src/utils';

const read = promisify(readFile);
const write = promisify(writeFile);
export async function readJSONFile(...pathFragments: string[]): Promise<AnyObject> {
  const path = join(...pathFragments);
  const fileContent = await read(path, { encoding: 'utf-8' });
  return JSON.parse(fileContent);
}
export async function writeJSONFile(data: AnyObject, ...pathFragments: string[]): Promise<void> {
  const path = join(...pathFragments);
  const fileContent = JSON.stringify(data, null, 2);
  return write(path, fileContent, { encoding: 'utf-8' });
}
