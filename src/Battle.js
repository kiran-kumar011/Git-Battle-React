import React, { Component } from 'react';
import Player from './Player';
import Gitdata from './Gitdata';

export default class Battle extends Component {
	state = {
		One: null,
		Two: null,
		battleClick: false,
		winner: '',
		reset: false,
	}

	addData = (data, key)=> {
		this.setState({[key]: data});
	}

	handleClick = (e) => {
		const userOne = this.state.One.followers + Math.floor(this.state.One.public_repos * 0.5);
		console.log(userOne);
		const userTwo = this.state.Two.followers + Math.floor(this.state.Two.public_repos * 0.5);
		console.log(userTwo)
		this.setState({battleClick: true});
		if(userOne > userTwo) {
				this.setState({winner: this.state.One.name || this.state.One.login})
		} else if(userOne === userTwo){
				this.setState({winner: "It's A Draw"})
		} else {
				this.setState({winner: this.state.Two.name || this.state.Two.login})
		}
	}


	handleReset=(e)=> {
		this.setState({reset:true, One: null, Two:null, battleClick: false});
	}

	render() {
		return (
			<section>
				<div className="battleGround">
					<Player status={this.state.reset} addRefrence={this.addData} player='One'/>
					<Player status={this.state.reset} addRefrence={this.addData} player ='Two'/>
				</div>
				<div>		
					{
						this.state.One && this.state.Two && this.state.battleClick===false ? <div className='battleButn'><button className="button gitBattle"onClick={this.handleClick}>Battle</button></div>: ''
					}
					{
						this.state.battleClick	? <Gitdata obj={this.state}/>: ''
					}
					{
						this.state.battleClick ? <button className="button gitBattle" onClick={this.handleReset}>Reset</button>: ''
					}
				</div>
			</section>
		)
	}
}