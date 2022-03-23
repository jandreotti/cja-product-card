# CJA-Product-Card

Este es un paquete de pruebas de despliegue en NPM

## Carlos Joaquin Andreotti

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'cja-product-card'
```

```
      <ProductCard
				product={product}
				initialValues={{
					//! Valores Iniciales
					count: 4, // quiero el contador inicial en 4
					maxCount: 10, // quiero que el maximo que pueda llevar sea 10
				}}
			>
				{({ reset, increasedBy, isMaxCountReached, count, maxCount }) => (
					<>
						<ProductImage />
						<ProductTitle />
						<ProductButtons />
					</>
				)}
			</ProductCard>
```
