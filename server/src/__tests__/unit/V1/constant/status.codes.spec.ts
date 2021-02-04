import { userSCD } from '../../../../V1/constant';

describe('Status codes', () => {
  it('Should check check userTCD', () => {

    const keys = ['unactive', 'activated', 'blocked', 'deleted'];

    Object.keys(userSCD).forEach(key => {
      expect(keys).toContain(key);
    });

    Object.values(userSCD).forEach(value => {
      expect(value.length).toEqual(2);
    });
  });
});