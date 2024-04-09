import React, {Component} from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
// import {robots} from './robots';
import './App.css';

class App extends Component {
        constructor() {
            super()
            this.state = {
                robots: [],
                searchfield: ''
            }
        }

        // toLowerCase is used below to convert the specified data to Lowercase format

        onSearchChange = (event) => {

            this.setState({searchfield: event.target.value});

        }

        // Using APIs to get users from somewhere else on the web

        componentDidMount(){
            fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => {this.setState({robots: users})});

        }


        render () {

            const filteredRobots = this.state.robots.filter((robots) => {
                return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
            });
            
            // Implementing a LOADING: alert in the event the webpage takes too long to load
            
            if (this.state.robots.length === 0){
                return <h2>LOADING: </h2>
            } else {
                return (

                    <div className='tc'>
                        <h2>RobotFriends</h2>
                        <SearchBox searchChange = {this.onSearchChange}/>
                        <CardList robots = {filteredRobots}/>
                        
                    </div>
                );
            }
        }

}

export default App;