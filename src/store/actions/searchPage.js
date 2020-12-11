import * as actionTypes from './actionTypes';
import axios from 'axios';

export const searchTrackStart = () => {
    return {
        type: actionTypes.SEARCH_TRACK_START
    }
}

export const searchTrackSuccess = (tracks) => {
    return {
        type: actionTypes.SEARCH_TRACK_SUCCESS,
        tracks
    }
}

export const searchTrackFailes = (error) => {
    return {
        type: actionTypes.SEARCH_TRACK_FAILED,
        error
    }
}

export const searchTrackClear =()=>{
    return {
        type: actionTypes.SEARCH_TRACK_CLEAR
    }
}

export const searchTrack = (trackName) => {
    return dispatch => {
        dispatch(searchTrackStart())
        axios(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${trackName}&api_key=f2e3f5232f7455ffc0fdf0f5849d8848&format=json`)
            .then(res => {
                console.log(res.data)
                const tracks = res.data.results.albummatches.album.map(track => {
                    return {
                        name: track.name,
                        artist: track.artist
                    }
                })
                console.log(tracks);
                dispatch(searchTrackSuccess(tracks))
            })
            .catch(err => {
                dispatch(searchTrackFailes(err))
            })
    }
}