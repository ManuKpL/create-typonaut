import execa from 'execa';

import { Initializer, InitializerType } from './definitions';

export const gitInitializer: Initializer<boolean> = {
  name: 'initializeGit',
  argPath: '--git',
  flag: true,
  type: InitializerType.CONFIRM,
  defaultValue: false,
  value: null,
  prompt: 'Initialize a git repository?',
  handler: async (initParmas) => {
    const result = await execa('git', ['init'], {
      cwd: initParmas.destination,
    });

    if (result.failed) {
      throw new Error('Failed to initialize git');
    }
  },
};
