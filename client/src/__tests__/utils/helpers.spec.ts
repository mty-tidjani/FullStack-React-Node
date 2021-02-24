import { isEmail, strRandom } from '../../utils/helpers';

describe('Test hepler function', () => {
  // isEmail
  it('Should check if email is valid', () => {
    let email: any = null;
    expect(isEmail(email)).toBeFalsy();
    email = 'loremis@ipsum';
    expect(isEmail(email)).toBeFalsy();
    email = 'loremis@ipsum.com';
    expect(isEmail(email)).toBeTruthy();
  });

  // strRandom
  it('Should generated random string if given lenths', () => {
    expect(strRandom(5)).toHaveLength(5);
    expect(strRandom(3)).toHaveLength(3);
  });
});
