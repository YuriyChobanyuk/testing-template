import { splitToShout } from './index';

describe('Index tests', () => {
  it('Should shout', () => {
    const testStr = 'Alpha Beta';
    expect(splitToShout(testStr)).toEqual(['ALPHA!', 'BETA!']);
  });
});
