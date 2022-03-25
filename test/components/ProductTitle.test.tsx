import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { ProductTitle } from '../../src/components/ProductTitle';
import { product1 } from '../data/products';

describe('PRUEBAS DEL ProductTitle', () => {
  //! Prueba para hacerle test a un snapshot simple del componente ProductImage
  test('debe mostrar el componente correctamente con el titulo personalizado', () => {
    const wrapper = renderer.create(
      <ProductTitle title="Custom Title" className="custom-class" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  //! Prueba para hacerle test a un snapshot de la relacion entre ProductCard y ProductTitle
  test('debe de mostrar el componente con el nombre del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
