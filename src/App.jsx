import { useState } from 'react'
import styles from './App.module.css'
import { Button } from './components/Button/Button'


function App() {
const [result, setResult] = useState('')


function handleButtonClick(e) {
	console.log(e.target.value)
	setResult((prevResult) =>  prevResult + e.target.value)
}

function handleClear() {
	setResult('')
}

function handleDeleteLastDigit() {
	setResult((prevResult) => prevResult.slice(0,-1))
}

function calculateNumbers() {
	setResult((prevResult) => eval(prevResult))
}



	return (
		<div className={styles.calculator}>
			<button className={styles.history}>📝</button>
			<div className={styles.display}>
				{/* <div className={styles.operation}>{result}</div> */}
				<div className={styles.result}>{result}</div>
			</div>
			<div className={styles.buttons}>
				<Button onClick={handleClear} style={{backgroundColor: "orangered"}}>C</Button>
				<Button onClick={handleDeleteLastDigit} style={{backgroundColor: "tomato"}}>⌫</Button>
				<Button>%</Button>
				<Button onClick={handleButtonClick}>/</Button>
				<Button onClick={handleButtonClick}>7</Button>
				<Button onClick={handleButtonClick}>8</Button>
				<Button onClick={handleButtonClick}>9</Button>
				<Button onClick={handleButtonClick}>*</Button>
				<Button onClick={handleButtonClick}>4</Button>
				<Button onClick={handleButtonClick}>5</Button>
				<Button onClick={handleButtonClick}>6</Button>
				<Button onClick={handleButtonClick}>-</Button>
				<Button onClick={handleButtonClick}>1</Button>
				<Button onClick={handleButtonClick}>2</Button>
				<Button onClick={handleButtonClick}>3</Button>
				<Button onClick={handleButtonClick}>+</Button>
				<Button>+/-</Button>
				<Button onClick={handleButtonClick}>0</Button>
				<Button onClick={handleButtonClick}>.</Button>
				<Button onClick={calculateNumbers} style={{backgroundColor: "#5da2fd"}}>=</Button>
			</div>
		</div>
	)
}

export default App
