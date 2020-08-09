import { readArguments, promptUser } from './adapters';
import { gitInitializer, copyTemplateInitializer } from './initializers';
import { readCommands } from './readCommands';

export async function run(args: string[]): Promise<void> {
  const initializers = [gitInitializer, copyTemplateInitializer];
  const initalOptions = readArguments(args, initializers);
  const finalOptions = await promptUser(initalOptions);
  const commands = readCommands(finalOptions);
  commands.forEach((execute) => execute());
}
