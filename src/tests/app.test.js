import { unExactSum, sum } from '../app';

test('expectations from ../app.js functions', () => {
  expect(unExactSum(2, 2)).not.toEqual(4);
  expect(sum(2, 2)).toEqual(4);
});
