import React from 'react';

const Scroll = ({children}) => {
    return (
        <div style = {{overflow: "scroll", border: "3px solid grey", height:"1000px"}}>
            {children}
        </div>
    );
}

export default Scroll; 



// Different mehtod of destructuring props

// import React from 'react';

// const Scroll = (props) => {
//     return (
//         <div style = {{overflow: "scroll", border: "3px solid grey", height:"1000px"}}>
//             {props.children}
//         </div>
//     );
// }

// export default Scroll; 
