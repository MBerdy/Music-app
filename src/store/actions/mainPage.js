import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setMusicStart = () => {
    return {
        type: actionTypes.SET_MUSIC_START,
    }
}

export const setMusicSuccess = (music) => {
    return {
        type: actionTypes.SET_MUSIC_SUCCESS,
        music: music
    }
}

export const setMusicFailed = (error) => {
    return {
        type: actionTypes.SET_MUSIC_FAILED,
        error
    }
}

export const setMusic = () => {
    return dispatch => {
        dispatch(setMusicStart());
        axios('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=f2e3f5232f7455ffc0fdf0f5849d8848&format=json')
            .then(res => {
                const popularMusic = res.data.tracks.track.map(item => {
                    return {
                        trackName: item.name,
                        artistName: item.artist.name,
                        img: item.image[1]['#text'],
                        artistURL: item.artist.url
                    }
                });
                dispatch(setMusicSuccess(popularMusic))
            })
            .catch(error => {
                dispatch(setMusicFailed(error))
            })
    }
}