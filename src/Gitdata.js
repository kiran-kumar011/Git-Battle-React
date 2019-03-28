import React from 'react';

export default function Gitdata(props) {
	const playerOne = props.obj.One;
	const playerTwo = props.obj.Two;
	return (
		<div className="playerData">
		<h1 className='displayWinner'>Winner<br/>{props.obj.winner}</h1>
			<div className='playerOne'>
				<h1>Name:{playerOne.name}</h1>
				<p>Location: {playerOne.location}</p>
				<p>Followers: {playerOne.followers}</p>
				<p>Following: {playerOne.following}</p>
				<p>Repos: {playerOne.public_repos}</p>
			</div>
			<div className='playerTwo'>
				<h1>Name:{playerTwo.name}</h1>
				<p>Location: {playerTwo.location}</p>
				<p>Followers: {playerTwo.followers}</p>
				<p>Following: {playerTwo.following}</p>
				<p>Repos: {playerTwo.public_repos}</p>
			</div>
		</div>
	)
}