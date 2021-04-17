import execa from 'execa';

import { Initializer, InitializerType } from './definitions';

export const gitInitializer: Initializer<boolean> = {
  priority: 10,
  name: 'initializeGit',
  argPath: '--git',
  flag: true,
  type: InitializerType.CONFIRM,
  defaultValue: false,
  value: null,
  prompt: 'Initialize a git repository?',
  async handler(initParams) {
    const result = await execa('git', ['init'], {
      cwd: initParams.destination,
    });

    if (result.failed) {
      throw new Error('Failed to initialize git');
    }
  },
};
