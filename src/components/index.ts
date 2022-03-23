// importo los componentes hijos
import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';

///! 2ª
// importo el componente padre
import { ProductCard as ProductCardHOC } from './ProductCard'; // importo un componente ProductCard con el nombre ProductCardHOC
import { ProductCardHOCProps } from '../interfaces/ProductInterfaces';

//! 1ª
export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';

//! 2ª
// exporto el componente padre ProductCardHOC agregandole los componentes hijos renombrandolos para poder hacer el segundo tipo de uso del componente
export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
	Title: ProductTitle,
	Image: ProductImage,
	Buttons: ProductButtons,
});

// export default ProductCard; //Puedo ponerlo o no
