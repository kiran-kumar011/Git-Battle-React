import React, { Component } from 'react';

export default class Player extends Component {
	state = {
		username: "",
		userInfo: null,
	}
	handleSubmit = (e) => {
		if(this.state.username !== '') {
			fetch(`https://api.github.com/users/${this.state.username}`).then(res => res.json()).then(data => {
						this.props.addRefrence(data, this.props.player)
						this.setState({userInfo: data, username: ''})
				}
			)
		}
	}

	handleEnter = (e)=> {
		if(e.key === 'Enter') {
			this.handleSubmit();
		}
	}

	handleChange = (e) => {
		this.setState({username: e.target.value});
	}
	render() {
		return (
			<div className="wrapper">
				{
					this.state.userInfo && !this.props.status ? (
						<div className="imageDisplay">
							<img style={{display: 'block', width: "100px", borderRadius:"50%", margin: '0 auto'}} src={this.state.userInfo && this.state.userInfo.avatar_url} alt='Player'/>
							<p>{this.state.userInfo && this.state.userInfo.login }</p>
						</div>	
					): (
						<div className="player">
							<h1>Player{this.props.player}</h1>
							<input onKeyPress={this.handleEnter} onKeyUp={this.handleChange} defaultValue={this.state.username} type="text" placeholder='Github User Name' />
							<button className="submit" onClick={this.handleSubmit}>Submit</button>
						</div>
					)
				}
			</div>
		);
	}
}