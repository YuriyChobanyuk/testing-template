import { splitToShout } from './index';

describe('Index tests', () => {
  it('Should shout', () => {
    const testStr = 'Alpha Beta';
    expect(splitToShout(testStr).toJS()).toEqual(['ALPHA!', 'BETA!']);
  });
});
