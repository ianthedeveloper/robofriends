import React from 'react';

const Card = (props) => {
    return (
        <div className='f6 tc bg-light-red dib br3 pa3 ma2 grow bw2 shadow-8'>
            <img src={`https://robohash.org/${props.id}?212%212" alt="robot img`}/>
            <div>
                <h1> {props.name}  </h1>
                <p>  {props.email} </p>
            </div>
        </div>
    );
}

export default Card;