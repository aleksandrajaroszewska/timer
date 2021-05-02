import { getMinutesAndSecondsFromDurationInSeconds } from '../helpers';

describe('test clock function', () => {
  test('get minutes function', () => {
    expect(getMinutesAndSecondsFromDurationInSeconds(180)).toEqual([3, 0]);
  });

  test('get minutes ', () => {
    expect(getMinutesAndSecondsFromDurationInSeconds(180)[0]).toBe(3);
  });

  test('get  seconds ', () => {
    expect(getMinutesAndSecondsFromDurationInSeconds(100)[1]).toBe(40);
  });
});
