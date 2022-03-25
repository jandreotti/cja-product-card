import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components';
import { product1 } from '../data/products';

const { act } = renderer;

describe('PRUEBAS DEL ProductCard', () => {
  //! Prueba para hacerle test a un snapshot simple del componente ProductCard
  test('debe mostrar el componente correctamente', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {() => <h1>Product Card</h1>}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  //! Prueba para hacerle test al contador del ProductCard
  test('debe de incrementar el contador', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {({ count, increasedBy }) => (
          <>
            <h1>Product Card</h1>
            <span>{count}</span>
            <button onClick={() => increasedBy(1)}>+1</button>
          </>
        )}
      </ProductCard>
    );

    //hago snapshot
    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();

    //hago click
    act(() => {
      (tree as any).children[2].props.onClick();
    });

    tree = wrapper.toJSON();
    console.log((tree as any).children[1]);

    expect((tree as any).children[1].children[0]).toBe('1');
  });
});
