import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import ProductMock from '../../__mocks__/ProductMock';
import Product from '../../components/Product';

describe('<Product />', () => {
  test('Render del componente Product', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>,
    );
    expect(product.length).toEqual(1);
  });
  test('Comprobar el boton comprar', () => {
    // jest.fn() nos crea una funcion
    const handleAddToCart = jest.fn();
    const wrapper = mount(
      <ProviderMock>
        <Product product={ProviderMock} handleAddToCart={handleAddToCart} />
      </ProviderMock>,
    );
    // Simulamos el click del boton
    wrapper.find('button').simulate('click');
    // Evaluamos cuantas veces se le hizo click
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});
