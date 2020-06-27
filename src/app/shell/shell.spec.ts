import { add } from './shell';

describe('shell tests', () => {
  it('Should add two numbers', () => {
    expect(add(3, 6)).toBe(9);
  });
});
