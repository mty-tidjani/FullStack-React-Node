import { httpClient } from '../../utils/http-client';

describe('Test http-client', () => {
  it('Should return 401 error', async () => {
    await expect(httpClient.get('/api/v1/project')).rejects.toThrow();
  });
});
