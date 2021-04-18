import execa from 'execa';

type CommandOptions = {
  args: string[];
  workingDirectory: string;
};
export async function commandLine(name: string, options: CommandOptions): Promise<void> {
  const result = await execa(name, options.args, { cwd: options.workingDirectory });

  if (result.failed) {
    throw new Error(`Failed to run command "${name}"`);
  }
}
