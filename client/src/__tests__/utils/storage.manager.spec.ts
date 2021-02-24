/* eslint-disable no-proto */
/* eslint-disable jest/no-commented-out-tests */
/* eslint-disable jest/expect-expect */
import StorageManager from '../../utils/storage.manager';

describe('Storage manager', () => {
  it('Should setUserData', () => {
    StorageManager.setUserData({ _id: 'xxxx', usrNM: 'Tester' });

    expect(localStorage.setItem).toBeCalledTimes(1);
  });

  it('should getUserData', () => {
    StorageManager.getUserData();

    expect(localStorage.getItem).toBeCalledTimes(1);
  });

  it('should logoutUser', () => {
    StorageManager.logoutUser();

    expect(localStorage.removeItem).toBeCalledTimes(1);
  });

  it('should setUserToken and getUserToken', () => {
    StorageManager.setUserToken('xxxxxx');

    const kook = StorageManager.getUserToken();

    expect(kook).toBe('xxxxxx');
  });
});
