import fetchMock from 'jest-fetch-mock';
import ApiConnection from './ApiConnection';
import mockData from '../../../mocks/helperData.json';

fetchMock.enableMocks();

const api = new ApiConnection();

describe('ApiConnection class', () => {
  describe('fetchingCountries', () => {
    beforeEach(() => {
      fetch.resetMocks();
    });

    test('Should return an object with the values of the countries after make the endpoint call', async () => {
      fetch.mockResponseOnce(JSON.stringify(mockData.apiResult));

      const response = await api.fetchingCountries();
      expect(response).toEqual(mockData.response);
    });
  });
});
