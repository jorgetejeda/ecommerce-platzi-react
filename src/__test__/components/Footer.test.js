import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);
  test('Render del component Footer', () => {
    expect(footer.length).toEqual(1);
  });
  test('Render del titulo', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});

describe('Footer Snapshot', () => {
  // Para utilizar los snapshot debemos convertir neustro componente a un objeto json para eso vamos a instalar un recurso
  // react-test-renderer
  // -----
  test('Comprobar la UI del componente Footer', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });

  test('Comprobar el UI del Footer-copy', () => {
    const footer = mount(<Footer />);
    expect(footer.find('.Footer-copy').text()).toEqual(
      'Todos los Izquierdos Reservados',
    );
  });
});
