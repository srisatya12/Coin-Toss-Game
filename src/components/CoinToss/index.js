// Write your code here
import {Component} from 'react'

class CoinToss extends Component {
    state={total:0,rand:0,heads:0,tails:0}
    tossGame = () =>{
        const tossResult = Math.floor(Math.random()*2);
        this.setState((prevState)=>({total:prevState.total+1}))
        this.setState({rand:tossResult})
        if(tossResult==0){
            this.setState((prevState)=>({heads:prevState.heads+1}))
        }else{
            this.setState((prevState)=>({tails:prevState.tails+1}))
        }
    }
  render() {
    const {total,rand,heads,tails} = this.state
    let image = rand===0?"https://assets.ccbp.in/frontend/react-js/heads-img.png":"https://assets.ccbp.in/frontend/react-js/tails-img.png";
    return(
        <div>
      <h1>Coin Toss Game</h1>
      <p>Heads (or) Tails</p>
      <img src={image} alt='toss result'/>
      <button onClick={this.tossGame}>Toss Coin</button>
        <p>Total: {total}</p>
        <p>Heads:{heads}</p>
        <p>Tails:{tails}</p>
    </div>
    )
  }
}
export default CoinToss
