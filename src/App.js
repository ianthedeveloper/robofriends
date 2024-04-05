import React, {Component} from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import {robots} from './robots';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ' '
        }
    }

    onSearchChange (event) {
        console.log(event.target.value);
    }

    render () {
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