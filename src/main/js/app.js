const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {recipes: []};
	}

	componentDidMount() {
		client({method: 'GET', path: '/api/recipes'}).done(response => {
			this.setState({recipes: response.entity._embedded.recipes});
		});
	}

	render() {
		return (
			<RecipeList recipes={this.state.recipes}/>
		)
	}
}

class RecipeList extends React.Component{
	render() {
		const recipes = this.props.recipes.map(recipe =>
			<Recipe key={recipe._links.self.href} recipe={recipe}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>Title</th>
						<th>Description</th>
					</tr>
					{recipes}
				</tbody>
			</table>
		)
	}
}

class Recipe extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.recipe.title}</td>
				<td>{this.props.recipe.description}</td>
			</tr>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('react')
)