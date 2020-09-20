'use strict';

const { readFile, writeFile } = require('fs');
const { promisify } = require('util');
const { join } = require('path');

const read = promisify(readFile);
const write = promisify(writeFile);

const COMMANDS = {
  eslint: (files) => `eslint ${files.join(' ')} --max-warnings=5`,
  tsc: (project) => `tsc -p ${project}`,
  cleanConfig: (configFile) => `rimraf ${configFile}`,
};

async function createTsProject(files) {
  const CONFIG_PATH = join(__dirname, 'tsconfig.json');
  const TMP_PATH = join(__dirname, 'tsconfig.lint-staged.json');
  const OPTIONS = { encoding: 'utf-8' };

  const tsConfig = JSON.parse(await read(CONFIG_PATH, OPTIONS));
  const tmpConfig = { ...tsConfig, include: files };
  await write(TMP_PATH, JSON.stringify(tmpConfig), OPTIONS);

  return TMP_PATH;
}

async function tsManager(files) {
  const tsProject = await createTsProject(files);
  return [COMMANDS.eslint(files), COMMANDS.tsc(tsProject), COMMANDS.cleanConfig(tsProject)];
}

function jsManager(files) {
  return [COMMANDS.eslint(files)];
}

function lint(manager) {
  const hasFilesToLint = (files) => files && files.length;
  const isInCurrentRoot = (path) => path.startsWith(__dirname);

  return function (files) {
    if (hasFilesToLint(files)) {
      const filesInScope = files.filter(isInCurrentRoot);
      if (hasFilesToLint(filesInScope)) {
        return manager(filesInScope);
      }
    }
    return [];
  };
}

module.exports = {
  'src/**/*.ts': lint(tsManager),
  'src/**/*.js': lint(jsManager),
};
