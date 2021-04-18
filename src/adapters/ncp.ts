import { promisify } from 'util';
import ncp from 'ncp';

const copy = promisify(ncp);

export async function copyDirectory(source: string, destination: string): Promise<void> {
  await copy(source, destination, {
    clobber: false,
  }).catch((err) => {
    console.error(err);
    throw new Error('Failed to copy template files');
  });
}
