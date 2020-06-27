import { Set } from 'immutable';
import { add, addTwo, sumMap } from './shell';

describe('shell tests', () => {
  it('Should add two numbers', () => {
    expect(add(3, 6)).toBe(9);
  });

  it('Should add two to number', () => {
    expect(addTwo(3)).toBe(5);
  });

  it('Should sum map of numbers', () => {
    const sequence = Set<number>([3, 5, 56]);
    expect(sumMap(sequence)).toBe(64);
  });
});
