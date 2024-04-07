// import React from 'react';

// const Card = ({id, name, email}) => {
//     return (
//         <div className='f6 tc bg-light-red dib br3 pa3 ma2 grow bw2 shadow-8'>

//             <img src={`https://robohash.org/${id}?212%212" alt="robot img`}/>
//             <div>
//                 <h1> {name}  </h1>
//                 <p>  {email} </p>
//             </div>

//         </div>
//     );
// }

// export default Card;










// const {id, name, email} = props;

import React from 'react';

const Card = () => {
    return (
        // const {id, name, email} = props;

        <div className='f6 tc bg-light-red dib br3 pa3 ma2 grow bw2 shadow-8'>

            const {id, name, email} = props;

            <img src = "https://robohash.org/textintextin"/>
            <p>{id}</p>
            <h2>{name}</h2>
            <p>{email}</p>

        </div>
    );
}

export default Card;