import curry from 'lodash/curry';
import { List } from 'immutable';

export function add(a: number, b: number): number {
  return a + b;
}

export const addTwo = curry(add)(2);

export function sumMap(values: List<number>): number {
  return values.reduce((acc, val) => acc + val, 0);
}
