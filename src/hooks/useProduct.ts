import { useEffect, useRef, useState } from 'react';
import {
  InitialValuesInterface,
  onChangeArgs,
  Product,
} from '../interfaces/ProductInterfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValuesInterface;
}

// FUNCION MARAVILLA
interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  //
  initialValues?: InitialValuesInterface; //! VALORES INICIALES
}

// FUNCION MARAVILLA
export const useProduct = ({
  product,
  onChange,
  value = 0,
  initialValues,
}: useProductArgs) => {
  // STATE
  const [counter, setCounter] = useState<number>(initialValues?.count || value); //! Si viene un valor en el initialValue lo toma. Sino toma el value

  // Uso una referencia para saber si mi componente esta siendo controlado por una funcion. Uso useref para que mi componente no se redibuje en caso de que cambie
  // const isControlled = useRef(onChange !== undefined);
  // const isControlled = useRef(!!onChange);

  //! Me permite crear un objeto que va a sobrevivir diferentes refresh del mismo componente o hook
  const isMounted = useRef(false);

  //! USE EFFECT. Este use effect es el que se ejecuta cuando cambia el value en otro componente del mismo producto.
  useEffect(() => {
    //el value que recibo aqui es el nuevo valor que deberia tener el state

    //! Si el componente no esta montado no hago nada
    if (!isMounted.current) {
      return;
    }
    setCounter(value);
  }, [value]);

  //! USE EFFECT que evalua el isMounted. una vez que el componente esta montado se cambia a true
  useEffect(() => {
    isMounted.current = true;
  }, []);

  // FUNCION
  const increasedBy = (value: number) => {
    // Si el componente esta siendo controlado por una funcion, no cambio nada el counter Local. Sino que mando a llamar el onChange (Que es la funcion que  controla el valor)
    // if (isControlled.current) {
    // 	return onChange!({ count: value, product }); // onChange es opcional. Asi que puede ser undefined. pero mediante el if de arriba yo lo verifico. Asi que le pongo el signo de admiracion
    // }

    let newValue = Math.max(counter + value, 0);

    //! PROFESOR
    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }

    //! MIO  Valores Iniciales -> Cuando se llega al maximo se deja de aumentar
    // if (initialValues?.maxCount && newValue > initialValues?.maxCount) return;

    setCounter(newValue);

    // FUNCION MARAVILLA
    // Si la funcion onChange esta definida, la ejecuta
    onChange && onChange({ count: newValue, product });

    //Lo de arriba es igual a esto de abajo
    // if (onChange) {
    // 	onChange();
    // }
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  // RETURN
  //! INITIAL VALUES: maxCount (devuelvo el maxCount)
  return {
    counter,
    increasedBy,
    maxCount: initialValues?.maxCount,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter, // !!initialValues?.maxCount && counter >= initialValues?.maxCount,
    reset,
  };
};
