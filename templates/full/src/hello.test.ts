import { hello } from './hello';

describe('hello()', () => {
  test('should be defined', () => {
    expect(hello).toBeDefined();
  });

  test('when passed a target, then should return the constructed greeting', () => {
    expect(hello('target')).toBe('Hello target!');
  });

  test('when passed a falsy target, then should return the constructed greeting with `stranger` as target', () => {
    expect(hello((null as unknown) as string)).toBe('Hello stranger!');
  });

  test('when passed an empty target, then should return the constructed greeting with `stranger` as target', () => {
    expect(hello('')).toBe('Hello stranger!');
  });
});
