import { promisify } from 'util';
import ncp from 'ncp';

import { Initializer, InitializerType } from './definitions';

const copy = promisify(ncp);

export const copyTemplateInitializer: Initializer<boolean> = {
  name: 'copyTemplate',
  argPath: '--copyTemplate',
  flag: true,
  type: InitializerType.CONFIRM,
  defaultValue: true,
  value: true,
  prompt: 'Copy template files in target directory?',
  handler: async (initParmas) => {
    await copy(initParmas.source, initParmas.destination, {
      clobber: false,
    }).catch((err) => {
      console.error(err);
      throw new Error('Failed to copy template files');
    });
  },
};
