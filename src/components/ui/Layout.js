import React, { useState } from "react"
import './layout.css'


const Layout = (props) =>{
    // destructuring an array
    // const daniella = ["smart","tall"]
    // const [kola,david] = daniella

    // console.log(kola,david);
const [result, setResult] = useState("");
   
        function handleClick(e) {
            if (e === "DEL"){
                    setResult(result.slice(0, -1))
                return
            }
        setResult(result.concat(e));

        }

        function handleClear() {
            setResult("");
        }

        function handleCalculate() {
            try {
                setResult(eval(result).toString())
            } catch (error) {
                setResult("Error");
            }
        }
    
    // const [firstValue,setValue] = useState("");
    // console.log(calcValue);
    // const [secondValue,setSecond] = useState("0");
    // const [calculatedValue,setCalc] = useState("0");

    // const [operand,setOperand] = useState("");
   
    // function changeFirstValue(currentValue,type){
    //     if (type === "operand") {
    //         setOperand(eval(firstValue).toString())
    //     }else {}
    // }
    // function incrementValue() {
    //     setValue(calcValue+5)
    // }
    // function changeFirstValue(currentValue,type) {
    //     if (type === "operand"){
    //         setOperand(currentValue)
    //         return
    //     }
    //     setValue(firstValue + currentValue)
    // }

    // function sum() {
    //     firstValue + secondValue
    // }
    const calcNumbers = [
        {value:7,type:"number"},
        {value:8,type:"number"},
        {value:9,type:"number"},
        {value:"DEL",type:"operand"},
        {value:4,type:"number"},
        {value:5,type:"number"},
        {value:6,type:"number"},
        {value:"+",type:"operand"},
        {value:1,type:"number"},
        {value:2,type:"number"},
        {value:3,type:"number"},
        {value:"-",type:"operand"},
        {value:".",type:"number"},
        {value:0,type:"number"},
        {value:"/",type:"operand"},
        {value:"X",type:"operand"},
    ]

    return(
        <div>
                <div className="heading">
                <h5>calc</h5>
                <h6>THEME</h6>
            </div>
        <div className="layout">
            <div className="displayScreen">{result}</div>
            <div className="button-box">
               
                {calcNumbers.map(element => (<button onClick={() => {handleClick(element.value,element.type)}}>{element.value}</button>)
                    
                )}
            </div>
            <div className="last-btn">
            <button className="reset-btn" onClick={handleClear}>Reset</button>
            <button className="equal-btn" onClick={handleCalculate}>=</button>
            </div>
 
        </div>
        </div>
    )
}
export default Layout;


