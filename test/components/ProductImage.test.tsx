import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from '../data/products';

describe('PRUEBAS DEL ProductImage', () => {
  //! Prueba para hacerle test a un snapshot simple del componente ProductImage
  test('debe mostrar el componente correctamente con el titulo personalizado', () => {
    const wrapper = renderer.create(<ProductImage img="imagen.jpg" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  //! Prueba para hacerle test a un snapshot de la relacion entre ProductCard y ProductTitle
  test('debe de mostrar el componente con la imagen del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
