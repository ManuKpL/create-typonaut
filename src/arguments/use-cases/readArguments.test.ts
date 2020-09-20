import makeReadArguments from './readArguments';
import { BuildArgumentReader } from './boundaries/BuildArgumentReader';
import { ReadArguments } from './boundaries/ReadArguments';
import { BuildFlag } from './boundaries';

describe('readArguments()', () => {
  let readArguments: ReadArguments;
  let mockBuildFlags: jest.MockedFunction<BuildFlag>;
  let mockParseArgs: jest.MockedFunction<BuildArgumentReader>;

  beforeEach(function setup(): void {
    mockBuildFlags = jest.fn();
    mockParseArgs = jest.fn();
    readArguments = makeReadArguments({
      buildFlag: mockBuildFlags,
      buildArgumentReader: mockParseArgs,
    });
  });

  test('should be defined', () => {
    expect(readArguments).toBeDefined();
  });
});
