import React from 'react';

const Card = (props) => {
    return (
        <div className='f6 tc '>
            <img src="https://robohash.org/hehehe?212%212" alt="robot img"/>
            <div>
                <h1> {props.name}  </h1>
                <p>  {props.email} </p>
                <p>  {props.id} </p>
            </div>
        </div>
    );
}

export default Card;