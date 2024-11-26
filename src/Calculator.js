import { useState } from 'react'
import { evaluate } from 'mathjs'
import './Calculator.css'
function Calculator(){

    let [result, setResult]= useState('')
    let [hasDot, setHasDot]= useState(false)

    let operator = ['+', '-', '/', '*']
    const clickHandler = (e) => {
        let input = e.target.innerText
        if(input === '.'){
            if(hasDot === true) return
            else setHasDot(true)
        }

        if(operator.includes(input)){
            setHasDot(false)
        }
        setResult(result + input)
    }


    const ClearBtn = () =>{
        setResult('')
        setHasDot(false)
    }

    const backspcbtn = () =>{
        if(result.endsWith('.'))
            setHasDot(false)
        setResult(result.slice(0,-1))
    }

    const equalBtn = () =>{
        setResult(String(evaluate(result)))
    }
    return(

        <main>
        <div className="container">
            <div className="screen">{result}</div>
            <div className="buttons">
                <button onClick={ClearBtn} className='color twocCol br-l br-t'>Clear</button>
                <button onClick={backspcbtn} className='color br-t'>
                <i class="bi bi-backspace-reverse"></i>
                </button>
                <button onClick={clickHandler} className='color br-r br-t'>/</button>
                <button onClick={clickHandler} className='br-l br-t'>7</button>
                <button onClick={clickHandler} className='br-t'>8</button>
                <button onClick={clickHandler} className='br-r br-t'>9</button>
                <button onClick={clickHandler} className='color br-r'>*</button>
                <button onClick={clickHandler} className='br-l'>4</button>
                <button onClick={clickHandler}>5</button>
                <button onClick={clickHandler} className='br-r'>6</button>
                <button onClick={clickHandler} className='color br-r'>-</button>
                <button onClick={clickHandler} className='br-l'>1</button>
                <button onClick={clickHandler}>2</button>
                <button onClick={clickHandler} className='br-b br-r'>3</button>
                <button onClick={clickHandler} className='color br-r'>+</button>
                <button onClick={clickHandler} className='br-l br-b dot-ch'>.</button>
                <button onClick={clickHandler} className='br-b br-r'>0</button>
                <button onClick={equalBtn} className='color twocCol br-r br-b'>=</button>
            </div>
        </div>
        </main>

    )
}

export default Calculator