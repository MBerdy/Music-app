import React from 'react';

import classes from './SearchBar.module.css';

const searchBar = (props) => {
    return(
        <input 
            className={classes.SearchBar} 
            type="text" 
            placeholder="Search"  
            value ={props.value}
            onChange ={props.changed}
            onKeyPress={props.pressed}/>
    )

}

export default searchBar;