import { BuildFlag } from '../use-cases';
import makeBuildFlag from './buildFlag';

describe('buildFlags()', () => {
  let buildFlag: BuildFlag;

  beforeEach(function setup(): void {
    buildFlag = makeBuildFlag();
  });

  test('should be defined', () => {
    expect(buildFlag).toBeDefined();
  });

  // test('given a list of one flag initializer, then should return a consolidated arg.Spec-like object built from its parsed flag value', () => {
  //   const mockHandler = jest.fn();
  //   const initializers = [mockInitializerFactory()];
  //   mockParseFlag.mockReturnValueOnce({
  //     '--foo': mockHandler,
  //     '-f': '--foo',
  //   });

  //   const result = buildFlag(initializers);
  //   expect(result).toStrictEqual({
  //     '--foo': mockHandler,
  //     '-f': '--foo',
  //   });
  // });

  // test('given a list of several flag initializers, then should return a consolidated arg.Spec-like object built from both their parsed flag value', () => {
  //   const mockHandler = jest.fn();
  //   const initializers = [mockInitializerFactory(), mockInitializerFactory({ argPath: '--bar' })];
  //   mockParseFlag
  //     .mockReturnValueOnce({
  //       '--foo': mockHandler,
  //       '-f': '--foo',
  //     })
  //     .mockReturnValueOnce({
  //       '--bar': mockHandler,
  //       '-b': '--bar',
  //     });

  //   const result = buildFlag(initializers);
  //   expect(result).toStrictEqual({
  //     '--foo': mockHandler,
  //     '-f': '--foo',
  //     '--bar': mockHandler,
  //     '-b': '--bar',
  //   });
  // });

  // test('given an empty list of initializers, then should return an empty object', () => {
  //   const initializers: Initializer[] = [];

  //   const result = buildFlag(initializers);
  //   expect(result).toStrictEqual({});
  // });

  // test('given a list of initializers with no flag initializer, then should return an empty object', () => {
  //   const initializers: Initializer[] = [mockInitializerFactory({ flag: false })];

  //   const result = buildFlag(initializers);
  //   expect(result).toStrictEqual({});
  // });

  // test('given a list of initializers with some but not all flag initializers, then should return a consolidated arg.Spec-like object built from only the parsed flag value', () => {
  //   const mockHandler = jest.fn();
  //   const initializers: Initializer[] = [
  //     mockInitializerFactory({ flag: false, argPath: '0' }),
  //     mockInitializerFactory({ flag: false, argPath: '1' }),
  //     mockInitializerFactory(),
  //   ];
  //   mockParseFlag.mockReturnValueOnce({
  //     '--foo': mockHandler,
  //     '-f': '--foo',
  //   });

  //   const result = buildFlag(initializers);
  //   expect(result).toStrictEqual({
  //     '--foo': mockHandler,
  //     '-f': '--foo',
  //   });
  // });
});
