import { userSCD } from '../../utils/status.codes';

describe('Status codes', () => {
  it('Should check check userTCD', () => {
    const keys = ['unactive', 'activated', 'blocked', 'deleted'];

    Object.keys(userSCD).forEach((key) => {
      expect(keys).toContain(key);
    });

    Object.values(userSCD).forEach((value) => {
      expect(value).toHaveLength(2);
    });
  });
});
