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
});
