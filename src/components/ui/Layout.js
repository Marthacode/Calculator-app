import React from "react"
import './layout.css'

const btnValues =[
    [7, 8, 9, "DEL"],
    [4, 5, 6, "="],
    [1, 2, 3, "-"],
    [".", 0, "/", "X"]
]


const Layout = (props) =>{
    return(
        <div>
                <div className="heading">
                <h5>calc</h5>
                <h6>THEME</h6>
            </div>
        <div className="layout">
            <div className="displayScreen">399,981</div>
            <div className="button-box">
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>DEL</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>+</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>-</button>
                <button>.</button>
                <button>0</button>
                <button>/</button>
                <button>X</button>
                
            </div>
            <div className="last-btn">
            <button className="reset-btn">RESET</button>
            <button className="equal-btn">=</button>
            </div>
 
        </div>
        </div>
    )
}
export default Layout;


