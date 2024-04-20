import React, {useState, useEffect} from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
// import {robots} from './robots';
import './App.css';


// Using React Hooks
function App () {

        // Introducing STATE
        const [robots, setRobots] = useState([]);
        const [searchfield, setSearchfield] = useState(' ');
        const [count, setCount] = useState(0);

        // toLowerCase is used below to convert the specified data to Lowercase format
        const onSearchChange = (event) => {setSearchfield(event.target.value)}

        // Using APIs to get users from somewhere else on the web
        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => {setRobots(users)})
        }, [])

        const filteredRobots = robots.filter((robots) => {
            return robots.name.toLowerCase().includes   (searchfield.toLowerCase())
            });

        // Implementing a LOADING: alert in the event the webpage takes too long to load

        if (robots.length === 0){
            return <h2>Getting Ready: </h2>
            } else {
                    return (

                        <div className='tc'>
                                <h2>RobotFriends</h2>
                                {/* <button onClick = {(click) => setCount(count + 1)}>HIT ME!</button> */}
                                <SearchBox searchChange = {onSearchChange}/>
                                <Scroll>
                                    <ErrorBoundary>
                                        <CardList robots = {filteredRobots}/>
                                    </ErrorBoundary>
                                </Scroll>
                                    
                            </div>
                            );
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

