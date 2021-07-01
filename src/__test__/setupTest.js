import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
// Nos pemitira capturar las peticiones
// Sin la necesidad de utilizar el fetch que utilizamos dentro del navegador
// global.fetch = require('jest-fetch-mock');

// Si no deseamos sobre-escribir el fetch nativo hay que utilizar
require('jest-fetch-mock').enableFetchMocks();

// Ahora el fetch queda como nativo y tenemos acceso a fetchMock globalmente
// Y el unico cambio seria que en nuestras pruebas en vez de utilizar
// Fetch estaremos utilizando fetchMock para no sobreescribir la variable globla y separar ambos tipos de fecth