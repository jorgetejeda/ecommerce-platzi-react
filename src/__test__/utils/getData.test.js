import getData from '../../utils/getData';

describe('Fetch API', () => {
  // Generamos primero la estructura que nos provee fetch-mock
  beforeEach(() => {
    fetch.resetMocks();
  });

  // Promesa
  test('Llamar una API y retornar datos', (done) => {
    const URL = 'https://google.com';
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

    getData(URL).then((response) => {
      expect(response.data).toEqual('12345');
      done();
    });

    // Validamos primero que nuestra llamadas a google se estan realizando
    expect(fetch.mock.calls[0][0]).toEqual(URL);
  });
});
