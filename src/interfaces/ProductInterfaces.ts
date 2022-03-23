import { ReactElement } from 'react';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductButtonsProps } from '../components/ProductButtons';

export interface Product {
	id: string;
	title: string;
	img?: string;
}

//! INTERFACE del CONTEXT
export interface ProductContextProps {
	counter: number;
	increasedBy: (value: number) => void;
	product: Product;
	maxCount?: number; //! INITIAL VALUES: maxCount (devuelvo el maxCount en el context)
}

//! INTERFAZ que se encarga de leer las interfaces de los otros componentes y añadirlas
// export interface ProductCardHOCProps {
// 	({ children, product }: ProductCardProps): JSX.Element;
// 	Title: ({ title, className }: { title?: string | undefined; className?: string }) => JSX.Element;
// 	Image: ({ img, className }: { img?: string | undefined; className?: string }) => JSX.Element;
// 	Buttons: ({ className }: { className?: string }) => JSX.Element;
// }

export interface ProductCardHOCProps {
	({ children, product }: ProductCardProps): JSX.Element;
	Title: (Props: ProductTitleProps) => JSX.Element;
	Image: (Props: ProductImageProps) => JSX.Element;
	Buttons: (Props: ProductButtonsProps) => JSX.Element;
}

/////////////////////////////////////
//! FUNCION MARAVILLA
export interface onChangeArgs {
	product: Product;
	count: number;
}

/////////////////////////////////////////
//! interfaz de los productos en el carrito. Extiende de Product, osea que va a tener todos los atributos de Product y ademas le agrego el count
export interface ProductInCart extends Product {
	count: number;
}

export interface InitialValuesInterface {
	count?: number;
	maxCount?: number;
}

//interfaz de todo lo que va a retornar

export interface ProductCardHandlers {
	count: number;
	isMaxCountReached: boolean;
	maxCount?: number;
	product: Product;

	increasedBy: (value: number) => void;
	reset: () => void;
}
