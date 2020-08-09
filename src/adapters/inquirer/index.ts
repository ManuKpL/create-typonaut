import inquirer from 'inquirer';

import { Initializer } from '../../initializers';

export async function promptUser(initializers: Initializer[]): Promise<Initializer[]> {
  const unanswered = initializers
    .filter(({ value }) => value === null)
    .map((i) => ({
      type: i.type,
      name: i.name,
      message: i.prompt,
      default: i.defaultValue,
      choices: i.choices,
    }));

  const answers = await inquirer.prompt(unanswered);

  return initializers.map((i) => ({
    ...i,
    value: i.value || answers[i.name],
  }));
}
