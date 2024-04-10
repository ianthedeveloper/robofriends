import React, {Component} from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
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
            // To avoid repition of 'this.state'
            const {robots, searchfield} = this.state;

            const filteredRobots = robots.filter((robots) => {
                return robots.name.toLowerCase().includes(searchfield.toLowerCase())
            });

            // Implementing a LOADING: alert in the event the webpage takes too long to load

            if (robots.length === 0){
                return <h2>LOADING: </h2>
            } else {
                return (

                    <div className='tc'>
                        <h2>RobotFriends</h2>
                        <SearchBox searchChange = {this.onSearchChange}/>
                        <Scroll>
                            <ErrorBoundary>
                                <CardList robots = {filteredRobots}/>
                            </ErrorBoundary>
                        </Scroll>
                        
                    </div>
                );
            }
        }

}

export default App;




// How to replace the if statement:

// render () {
//     // To avoid repition of 'this.state'
//     const {robots, searchfield} = this.state;

//     const filteredRobots = robots.filter((robots) => {
//         return robots.name.toLowerCase().includes(searchfield.toLowerCase())
//     });

//     // Implementing a LOADING: alert in the event the webpage takes too long to load

        
//         return !robots.length ? 
//         <h2>LOADING: </h2>:
//         (

//             <div className='tc'>
//                 <h2>RobotFriends</h2>
//                 <SearchBox searchChange = {this.onSearchChange}/>
//                 <Scroll>
//                     <CardList robots = {filteredRobots}/>
//                 </Scroll>
                
//             </div>
//         );
// }

