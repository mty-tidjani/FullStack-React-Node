import { isValidEmail, sanitizeEmail, strRandom } from "../../../../v1/util";


describe('Test hepler function', () => {
  // isValidEmail
  it('Should check if email is valid', () => {
    let email: any = null;  
    expect(isValidEmail(email)).toBeFalsy();
    email = 'loremis@ipsum';
    expect(isValidEmail(email)).toBeFalsy();
    email = 'loremis@ipsum.com';
    expect(isValidEmail(email)).toBeTruthy();
  });

  // sanitizeEmail
  it('Should remove useless characters in email', () => {
    let email: any = null;  
    expect(sanitizeEmail(email)).toBeNull();
    email = 'loremis@ipsum';
    expect(sanitizeEmail(email)).toBeNull();
    email = 'loremis@ipsum.com';
    expect(sanitizeEmail(email)).toBe('loremis@ipsum.com');
    email = 'l.or.e.m.i.s@ipsum.com';
    expect(sanitizeEmail(email)).toBe('loremis@ipsum.com');
  });

  // strRandom
  it('Should generated random string if given lenths', () => {
    expect(strRandom(5).length).toBe(5);
    expect(strRandom(3)).toHaveLength(3);
  });
});