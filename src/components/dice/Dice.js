import React from 'react'
import './dice.css'
import d4 from '../../media/dice/d4.png'
import d6 from '../../media/dice/d6.png'
import d8 from '../../media/dice/d8.png'
import d10 from '../../media/dice/d10.png'
import d12 from '../../media/dice/d12.png'
import d20 from '../../media/dice/d20.png'

const Multiplier = (props) => {
    return (
        <input className="multiplier" type="number" pattern="[0-9]*" min="1" max="10" placeholder="1" onChange={props.update} />
    )
}

const Result = (props) => {
    return (
        <p className="result-box">{props.result}</p>
    )
}


class Dice extends React.Component {
    constructor() {
        super();
        this.state = {
            multiplier: 1,
            result: 0,
            dice: [4, 6, 8, 10, 12, 20]
        };
        this.changeMultiplier = this.changeMultiplier.bind(this);
        this.calculateTotal = this.calculateTotal.bind(this);
    }
    renderResult() {
        return (
            <Result result={this.state.result} />
        )
    }
    renderMultiplier() {
        return (
            <Multiplier value={this.state.multiplier} update={this.changeMultiplier} />
        )
    }
    
    calculateTotal(e) {
        let multiplier = this.state.multiplier;
        let value = e.target.value;
        let result = 0;
        let random = () => {
            return Math.floor(Math.random() * value) + 1;
        }
        for (let i = 0; i < multiplier; i++) {
            result += random();
        }
        this.setState({
            result: result,
        })
    }
    changeMultiplier(e) {
        this.setState({
            multiplier: e.target.value
        })
    }

    consoleLog(e) {
        let value = 20
        console.log(e.target.value)
        
    }
    render() {
        return (
            <div className="dice-roll-container">
                <div className="multiplier-container">
                    {this.renderMultiplier()}
                </div>
                <div className="dice-container">
                    
                    <button value="4" className="die" >
                    <img className="dice" src={d4} onClick={this.consoleLog}/>
      </button>
      <img className="dice" src={d6} alt="d6" />
                    <button value="6" className="die" onClick={this.calculateTotal}>
                    
      </button>
                    <button value="8" className="die" onClick={this.calculateTotal}>
                    <img className="dice" src={d8} alt="d8" />
      </button>
                    <button value="10" className="die" onClick={this.calculateTotal}>
                    <img className="dice" src={d10} alt="d10" />
      </button>
                    <button value="12" className="die" onClick={this.calculateTotal}>
                    <img className="dice" src={d12} alt="d12" value="12"/>
      </button>
                    <button value="20" className="die" onClick={this.consoleLog}>      </button>  

                    <img className="dice" src={d20} alt="d20" value="20" onClick={this.consoleLog}/>
              </div>
                <div className="results-container">
                    <h1>&#x2193;</h1>
                    {this.renderResult()}
                </div>
            </div>
        )
    }
}

export default Dice