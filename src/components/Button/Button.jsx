import styles from './Button.module.css'

export function Button({ children, style, onClick}) {
	return (
		<>
			<button onClick={onClick} className={styles.btn} style={style} value={children}>{children}</button>
		</>
	)
}
