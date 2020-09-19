import { readArguments, promptUser } from './adapters';
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
  const initalOptions = readArguments(args, initializers);
  const finalOptions = await promptUser(initalOptions);
  const commands = readCommands(finalOptions);
  return execute(commands);
}
