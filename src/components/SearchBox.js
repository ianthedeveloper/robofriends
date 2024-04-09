import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <div>

            <input 
            className = "pa3 ba b--blue bg-light-blue" 
            type = "search" 
            placeholder = "search robot"
            onChange = {searchChange}   
            />

        </div>
    );
}

export default SearchBox;