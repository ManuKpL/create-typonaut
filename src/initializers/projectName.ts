import { promisify } from 'util';
import { readFile, writeFile } from 'fs';
import { join } from 'path';

const read = promisify(readFile);
const write = promisify(writeFile);

import { Initializer, InitializerType } from './definitions';

export const projectNameInitializer: Initializer<string> = {
  priority: 100,
  name: 'destination',
  argPath: '--name',
  flag: true,
  type: InitializerType.INPUT,
  defaultValue: 'my-typonaut',
  value: null,
  prompt: "What is your project's name ?",
  async handler(initParams) {
    const configFilePath = join(initParams.destination, 'package.json');
    const packageConfig = await read(configFilePath);
    const data = JSON.parse(packageConfig.toString('utf-8'));
    await write(configFilePath, JSON.stringify({ ...data, name: this.value }, null, 2));
  },
};
