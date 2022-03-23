import styles from '../styles/styles.module.css';

import { createContext, CSSProperties } from 'react';
import { useProduct } from '../hooks/useProduct';
import {
  InitialValuesInterface,
  onChangeArgs,
  Product,
  ProductContextProps,
  ProductCardHandlers,
} from '../interfaces/ProductInterfaces';
import React from 'react';

// CONTEXTO -> se usa para pasar datos entre componentes (Puedo pasarle del padre a los hijos)
// Lo dejo en este archivo porque solamente voy a usar el contexto en el ProductCard
export const ProductContext = createContext({} as ProductContextProps); // la informacion que le voy a compartir a tdoos los hijos
const { Provider } = ProductContext;

// INTERFACE DE LAS PROPS de ProductCard
export interface Props {
  product: Product;
  //children?: ReactElement | ReactElement[]; // Aca se pone que el componente va a contener hijos
  children: (args: ProductCardHandlers) => JSX.Element; //! Esto sirve para poder tener un hijo que sea una funcion que devuelva un JSX.Element. los args son los valores del hijo que estoy exponiendo al padre
  //
  className?: string;
  style?: CSSProperties;
  //
  onChange?: (args: onChangeArgs) => void; // FUNCION MARAVILLA //Asi es la funcion que yo estoy esperando
  value?: number; // VALOR DE LA CANTIDAD DE PRODUCTOS QUE TENGO EN EL CARRITO. Es opcional porque puede ser que el usuario lo especifique o no. puede ser que el usuario quiera trabajarlo en base al onChange de arriba, etc le damos la posibilidad a la persona...
  //
  initialValues?: InitialValuesInterface; //! VALORES INICIALES
}
export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  // CUSTOM HOOK
  const {
    counter,
    increasedBy,
    maxCount,
    isMaxCountReached,
    reset,
  } = useProduct({
    // FUNCION MARAVILLA
    onChange,
    product,
    value,
    initialValues, //! le mando el initialValues al hook quemaneja el valor inicial
  });

  // RETURN
  return (
    <div className={`${styles.productCard} ${className}`} style={style}>
      <Provider
        value={{
          // Que informacion necesitan los hijos?
          counter,
          increasedBy,
          product,
          maxCount,
        }}
      >
        {/* {()=>("123")} */}
        {/* {children} */}
        {/* //! Debo cambiar esto para que funcione con los hijos que sean funciones. Porque no puedo reenderizar funciones. lo que puedo hacer es ejecutar funciones */}
        {/* Como esto es una funcion que puedo ejecutar, puedo mandar cualquier cantodad de argumentos y estos argumentos van a la capa superior o PADRE. */}
        {/* OSea que le mando la informacion ya procesada y masticada a mi componente  padre */}
        {/* //! Aca debo mandar todo lo que tengo que exponer al exterior */}
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increasedBy,
          reset,
        })}
      </Provider>
    </div>
  );
};
