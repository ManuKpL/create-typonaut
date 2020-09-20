import { readArguments } from './arguments';

import { promptUser } from './adapters';
import { gitInitializer, copyTemplateInitializer, projectNameInitializer } from './initializers';
import { readCommands } from './commands';

type Command = () => Promise<void>;

async function execute(commands: Command[]) {
  for (const command of commands) {
    await command();
  }
}

export async function run(args: string[]): Promise<void> {
  const initializers = [projectNameInitializer, gitInitializer, copyTemplateInitializer];
  const options = initializers.map((i) => ({
    name: i.name,
    path: i.argPath,
    initialValue: i.value,
    parser: i.flag ? Boolean : String,
  }));

  const inputedValues = readArguments(args, options);
  const initialOptions = initializers.map((i) => ({ ...i, value: inputedValues[i.name] }));
  const finalOptions = await promptUser(initialOptions);
  const commands = readCommands(finalOptions);
  return execute(commands);
}
