import { merge } from './merge';

describe('merge()', () => {
  it('should be defined', () => {
    expect(merge).toBeDefined();
  });

  test('given two objects with different keys, then should merge them and return the result', () => {
    const first = { firstName: 'Margaret', lastName: 'Hamilton' };
    const second = { username: 'mhamilton', admin: false };
    const expectedResult = {
      firstName: 'Margaret',
      lastName: 'Hamilton',
      username: 'mhamilton',
      admin: false,
    };

    const result = merge(first, second);

    expect(result).toStrictEqual(expectedResult);
  });

  test('given two objects with similar keys, then should keep the value from the second', () => {
    const first = { firstName: 'Margaret', lastName: 'Hamilton', admin: false };
    const second = { username: 'mhamilton', admin: true };
    const expectedResult = {
      firstName: 'Margaret',
      lastName: 'Hamilton',
      username: 'mhamilton',
      admin: true,
    };

    const result = merge(first, second);

    expect(result).toStrictEqual(expectedResult);
  });
});
