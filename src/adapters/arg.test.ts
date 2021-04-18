import { ConfirmOption, InputOption, Option } from '@src/options';
import { readArguments } from './arg';

describe('adapters:arg', () => {
  describe('readArguments()', () => {
    it('should be defined', () => {
      expect(readArguments).toBeDefined();
    });

    describe('given a list of arguments & cli options', () => {
      let options: Option[];

      beforeEach(() => {
        options = [
          new ConfirmOption({
            priority: 1,
            name: 'copy',
            defaultValue: true,
            async initialize() {
              return;
            },
          }),
          new InputOption({
            priority: 1,
            name: 'author',
            defaultValue: 'mhamilton',
            async initialize() {
              return;
            },
          }),
        ];
      });

      test('when arguments list is empty, then should return an empty object', () => {
        const args: string[] = [];
        const result = readArguments(args, options);

        expect(result).toStrictEqual({});
      });

      test('when no argument matches some option, then should return an empty object', () => {
        const args = ['delete', 'me'];
        const result = readArguments(args, options);

        expect(result).toStrictEqual({});
      });

      test('when no flag argument matches some option, then should return an empty object', () => {
        const args = ['--force'];
        const result = readArguments(args, options);

        expect(result).toStrictEqual({});
      });

      describe('when some argument matches a confirm option', () => {
        test("with the complete flag, then should return an object mapping the confirm name and the argument's value", () => {
          const args = ['--copy'];
          const result = readArguments(args, options);

          expect(result).toStrictEqual({ copy: true });
        });

        test("with the short alias flag, then should return an object mapping the confirm name and the argument's value", () => {
          const args = ['-c'];
          const result = readArguments(args, options);

          expect(result).toStrictEqual({ copy: true });
        });
      });

      describe('when some argument matches an input option', () => {
        test("with the complete flag, then should return an object mapping the input name and the argument's value", () => {
          const args = ['--author', 'alovelace'];
          const result = readArguments(args, options);

          expect(result).toStrictEqual({ author: 'alovelace' });
        });

        test("with the short alias flag, then should return an object mapping the input name and the argument's value", () => {
          const args = ['-a', 'alovelace'];
          const result = readArguments(args, options);

          expect(result).toStrictEqual({ author: 'alovelace' });
        });
      });
    });
  });
});
