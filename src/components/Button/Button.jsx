import styles from './Button.module.css'

export function Button({ children, style }) {
	return (
		<>
			<button className={styles.btn} style={style}>{children}</button>
		</>
	)
}
