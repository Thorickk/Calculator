import styles from './App.module.css'
import { Button } from './components/Button/Button'


function App() {
	return (
		<div className={styles.calculator}>
			<button className={styles.history}>📝</button>
			<div className={styles.display}>
				<div className={styles.operation}>3+2=</div>
				<div className={styles.result}>5</div>
			</div>
			<div className={styles.buttons}>
				<Button style={{backgroundColor: "orangered"}}>C</Button>
				<Button style={{backgroundColor: "tomato"}}>del</Button>
				<Button>%</Button>
				<Button>/</Button>
				<Button>7</Button>
				<Button>8</Button>
				<Button>9</Button>
				<Button>x</Button>
				<Button>4</Button>
				<Button>5</Button>
				<Button>6</Button>
				<Button>-</Button>
				<Button>1</Button>
				<Button>2</Button>
				<Button>3</Button>
				<Button>+</Button>
				<Button>+/-</Button>
				<Button>0</Button>
				<Button>.</Button>
				<Button style={{backgroundColor: "#5da2fd"}}>=</Button>
			</div>
		</div>
	)
}

export default App
