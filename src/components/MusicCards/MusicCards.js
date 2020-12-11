import React from 'react';
import MusicCard from './MusicCard/MusicCard';
import classes from './MusicCards.module.css';

const musicCards = (props) => {
    const music = props.music.map(m => (
        <MusicCard
            key ={m.trackName} 
            img={m.img}
            trackName ={m.trackName}
            artistName={m.artistName}
            artistURL ={m.artistURL}
            clicked ={()=> props.trackSelected(m.artistName)}/>
    ))
    return(
        <div className ={classes.MusicCards}>
            {music}
        </div>
    )
}

export default musicCards;
