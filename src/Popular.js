import React, {Component} from 'react';


function SelectLanguage(props) {
	var languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
	return (
		<ul className="languages">
			{
			languages.map(language => {
				return (
					<li style={language === props.SelectLanguage ? {color:'#d0021b'}: null}
					onClick={props.onSelect.bind(null, language)}
					key = {language}>
						{language}
					</li>
				)
			})}
		</ul>
	)
}



export default class Popular extends Component {
	constructor(props) {
		super();
		this.state = {
			selectedLanguage:'All',
			repos: null,
			loading: false,
		}
		this.updateLanguage = this.updateLanguage.bind(this);
	}
	updateLanguage(language) {
		this.setState(function(){
			return {
				selectedLanguage: language,
			}
		});
	}

	componentDidMount() {
		this.setState({loading: true});
		fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:JavaScript&sort=stars&order=desc&type=Repositories`).then(res => res.json()).then(data => this.setState({repos: data, loading: false}))
	}
	render() {
		const repoData = this.state.repos;
		console.log(repoData)
		return (
			<div>	
						<div className="listWrapper">
							<SelectLanguage 
							selectedLanguage={this.state.selectedLanguage}
							onSelect={this.updateLanguage}
							/>
						</div>
						<div className="fetchedData">
							{
								this.state.repos? this.state.repos.items.map((repo,index) => <Repos repoData={repo} index={index+1}/> ): ''
							}
						</div>
			</div>
		)
	}
}

function Repos(props) {
	const item = props.repoData;
	console.log(item)
	return (
		<div className="ranking">
			<h1>#{props.index}</h1>
			<img src={item.owner.avatar_url} alt='Player' style={{width:'150px', borderRadius:'10px'}}/>
			<h2>{item.owner.login}</h2>
			<p>{item.owner.login}</p>
			<p>{item.forks}</p>
			<p>{item.watchers}</p>
			<p>{item.open_issues}</p>
		</div>
	);
}




















