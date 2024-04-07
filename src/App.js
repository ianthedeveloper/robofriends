import React, {Component} from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import {robots} from './robots';

class App extends Component 
{
        constructor() {
            super()
            this.state = {
                robots: robots,
                searchfield: ''
            }
        }

        // toLowerCase is used below to conver the specified data to Lowercase format

        onSearchChange = (event) => {

            // this.setState({searchfield: event.target.value});

            console.log(event.target.value);

        }



        render () {

            const filteredRobots = this.state.robots.filter((robot) => {
                return 
                robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
            })

            return (
                <div className='tc'>
                    <h2>RobotFriends</h2>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <CardList robots = {this.state.robots}/>
                </div>
            );
        }
}

export default App;