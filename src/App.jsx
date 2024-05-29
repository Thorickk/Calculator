import { useState } from 'react'
import styles from './App.module.css'
import { Button } from './components/Button/Button'

function App() {
	const [firstNumber, setFirstNumber] = useState(0)
	const [secondNumber, setSecondNumber] = useState(0)
	const [operation, setOperation] = useState("")
	const [result, setResult] = useState(0)

	function handleButtonClick(e) {
		if (operation !== '') {
			setSecondNumber(prevSecondNumber => Number(prevSecondNumber + e.target.value))
		} else {
			setFirstNumber(prevFirstNumber => Number(prevFirstNumber + e.target.value))
		}
	}

	function handleClear() {
		setFirstNumber(0)
		setSecondNumber(0)
		setOperation("")
		setResult(0)
	}

	function handleDeleteLastDigit() {
		setFirstNumber(prevFirstNumber => Number(prevFirstNumber.toString().slice(0, -1)))
	}

	function calculateNumbers(firstNumber, secondNumber, operation) {
		const finalResult = firstNumber + operation + secondNumber
		setResult(() => eval(finalResult))
	}

	function handleNegation() {
		setFirstNumber(prevFirstNumber => -prevFirstNumber)
	}

	function handleOperationClick(e) {
		setOperation(e.target.value)
	}
	console.log(result)

	return (
		<div className={styles.calculator}>
			<button className={styles.history}>📝</button>
			<div className={styles.display}>
				<div className={styles.operation}>
					{firstNumber}
					{operation}
					{secondNumber !== 0 ? secondNumber : ""}
				</div>
				<div className={styles.result}>{result}</div>
			</div>
			<div className={styles.buttons}>
				<Button onClick={handleClear} style={{ backgroundColor: 'orangered' }}>
					C
				</Button>
				<Button onClick={handleDeleteLastDigit} style={{ backgroundColor: 'tomato' }}>
					⌫
				</Button>
				<Button>%</Button>
				<Button onClick={handleOperationClick}>/</Button>
				<Button onClick={handleButtonClick}>7</Button>
				<Button onClick={handleButtonClick}>8</Button>
				<Button onClick={handleButtonClick}>9</Button>
				<Button onClick={handleOperationClick}>*</Button>
				<Button onClick={handleButtonClick}>4</Button>
				<Button onClick={handleButtonClick}>5</Button>
				<Button onClick={handleButtonClick}>6</Button>
				<Button onClick={handleOperationClick}>-</Button>
				<Button onClick={handleButtonClick}>1</Button>
				<Button onClick={handleButtonClick}>2</Button>
				<Button onClick={handleButtonClick}>3</Button>
				<Button onClick={handleOperationClick}>+</Button>
				<Button onClick={handleNegation}>+/-</Button>
				<Button onClick={handleButtonClick}>0</Button>
				<Button onClick={handleButtonClick}>.</Button>
				<Button onClick={() => calculateNumbers(firstNumber, secondNumber, operation)} style={{ backgroundColor: '#5da2fd' }}>
					=
				</Button>
			</div>
		</div>
	)
}

export default App
