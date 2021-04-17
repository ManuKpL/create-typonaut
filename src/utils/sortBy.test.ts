import { sortBy } from './sortBy';

describe('sortBy()', () => {
  test('should be defined', () => {
    expect(sortBy).toBeDefined();
  });

  test('given a prop key, then should return a function', () => {
    const result = sortBy('foo');
    expect(typeof result).toBe('function');
  });

  describe('given a list of objects and a prop key existing on these objects', () => {
    test('when array is already sorted in ascending order according to this prop value, then should return it', () => {
      const list = [{ foo: 10 }, { foo: 100 }];
      const result = list.sort(sortBy('foo'));
      expect(result).toStrictEqual([{ foo: 10 }, { foo: 100 }]);
    });

    test('when array is not sorted in ascending order according to this prop value, then should return it sorted', () => {
      const list = [{ foo: 100 }, { foo: 10 }];
      const result = list.sort(sortBy('foo'));
      expect(result).toStrictEqual([{ foo: 10 }, { foo: 100 }]);
    });
  });
});
