import React, { CSSProperties, useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export interface Props {
	className?: string;
	style?: CSSProperties;
}
export const ProductButtons = ({ className = '', style }: Props) => {
	const { counter, increasedBy, maxCount } = useContext(ProductContext);

	// TODO isMaxReached: useCallback, [count, maxCount]
	//TRUE si count === maxCount
	//FALSE si no lo es

	const isMaxReached = useCallback(() => {
		//! MIO
		// if (counter === maxCount) {
		// 	return true;
		// }
		// return false;

		//! PROFESOR
		return !!maxCount && counter === maxCount;
	}, [counter, maxCount]);

	return (
		<div className={`${styles.buttonsContainer} ${className}`} style={style}>
			<button className={styles.buttonMinus} onClick={() => increasedBy(-1)}>
				-
			</button>

			<div className={styles.countLabel}>{counter}</div>

			<button
				// className={isMaxReached() ? `${styles.buttonAdd} ${styles.disabled}` : `${styles.buttonAdd}`}
				className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
				onClick={() => increasedBy(1)}
			>
				+
			</button>
		</div>
	);
};
