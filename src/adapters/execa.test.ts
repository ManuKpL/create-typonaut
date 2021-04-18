jest.mock('execa');
import execa from 'execa';

import { applyAnyMock } from '@src/utils';
import { commandLine } from './execa';

describe('adapters:execa', () => {
  describe('commandLine', () => {
    it('should be defined', () => {
      expect(commandLine).toBeDefined();
    });

    describe('given a command name and options', () => {
      let act: () => Promise<void>;

      beforeEach(async () => {
        act = () => commandLine('act', { args: ['with', 'this'], workingDirectory: 'in/here' });
      });

      test('when command is successful, then should return a resolved promise', async () => {
        applyAnyMock(execa).mockResolvedValueOnce({ failed: false });
        await expect(act()).resolves.toBeUndefined();
      });

      test('when command fails, then should return a rejected promise', async () => {
        applyAnyMock(execa).mockResolvedValueOnce({ failed: true });
        await expect(act()).rejects.toStrictEqual(new Error('Failed to run command "act"'));
      });
    });
  });
});
