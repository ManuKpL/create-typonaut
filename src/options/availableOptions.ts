import { commandLine, copyDirectory, readJSONFile, templatePath, writeJSONFile } from '@src/adapters';
import { ConfirmOption, InputOption } from './Option';

export const copyTemplate = new ConfirmOption({
  priority: 1,
  name: 'copyTemplate',
  defaultValue: true,
  async initialize(destination, shouldExec) {
    if (shouldExec) {
      await copyDirectory(templatePath('full'), destination);
    }
  },
});

export const projectName = new InputOption({
  priority: 10,
  name: 'name',
  defaultValue: 'my-typonaut',
  prompt: "What is your project's name ?",
  async initialize(destination, projectName) {
    const defaultConfig = await readJSONFile(destination, 'package.json');
    const updated = { ...defaultConfig, name: projectName };
    await writeJSONFile(updated, destination, 'package.json');
  },
});

export const git = new ConfirmOption({
  priority: 100,
  name: 'git',
  defaultValue: false,
  prompt: 'Initialize a git repository?',
  async initialize(destination, shouldExec) {
    if (shouldExec) {
      await commandLine('git', {
        args: ['init'],
        workingDirectory: destination,
      });
    }
  },
});
