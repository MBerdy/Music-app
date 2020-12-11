import React from 'react';

import classes from './ResultList.module.css'

const resultList= (props) => {
    return (
        <ul className ={classes.ResultList}>
            {props.tracks.map(track => (
                <li key={track.artist + track.name}> <span>Track:</span> {track.name} <span> Artist:</span> {track.artist}</li>
            ))}
        </ul>
    )
}

export default resultList;