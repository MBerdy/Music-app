import React from 'react';
import classes from './MusicCard.module.css';

const musicCard = (props) => {
    return (
        <div className={classes.MusicCard}>
            <img src={props.img} alt={props.trackName} />
            <h4>Track: {props.trackName} </h4>
            <h4 className={classes.Artist} onClick={props.clicked}>Artist: {props.artistName}</h4>
            <a href={props.artistURL}>Go to the artist page</a>
        </div>
    )
}

export default musicCard;