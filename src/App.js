import React, { Component } from 'react';
import axios from 'axios';
import Actor from './Actor';
import './App.css';


class App extends Component {	
	state = {
		actors: [],
	};

	componentDidMount() {
		return axios.get('https://nuvi-challenge.herokuapp.com/activities')
			.then(({data}) => {
				this.setState({
					actors: data,
				});
			});
   }

  render() {
    return (
      <div id='feed-container'> 
        {this.state.actors.length === 0 ? <div className="loading"><div>Loading...</div></div> : null}
        {this.state.actors.map((actor) => <Actor actor={actor} key={actor.id} />)}
      </div>
    );
  } 
}

export default App;