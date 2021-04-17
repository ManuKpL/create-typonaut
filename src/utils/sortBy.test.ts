import { sortBy } from './sortBy';

describe('sortBy()', () => {
  test('should be defined', () => {
    expect(sortBy).toBeDefined();
  });

  test('given a prop key, then should return a function', () => {
    const result = sortBy('foo');
    expect(typeof result).toBe('function');
  });

  test("given a list of objects, when passed a prop key and used in a sort() hof, then should sort them in ascending order according to this prop' value", () => {
    const list = [{ foo: 100 }, { foo: 10 }];
    const result = list.sort(sortBy('foo'));
    expect(result).toStrictEqual([{ foo: 10 }, { foo: 100 }]);
  });
});
