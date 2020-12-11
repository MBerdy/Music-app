import * as actionTypes from './actionTypes';
import axios from 'axios';


export const getArtistInfStart = () => {
    return {
        type: actionTypes.GET_ARTIST_INF_START
    }
}

export const getArtistInfSuccess = (artistInf) => {
    return {
        type: actionTypes.GET_ARTIST_INF_SUCCESS,
        artistInf
    }
}

export const getArtistInfFailed = (error) => {
    return {
        type: actionTypes.GET_ARTIST_INF_FAILED,
        error
    }
}
export const getArtistInfClear = () => {
    return {
        type: actionTypes.GET_ARTIST_INF_CLEAR
    }
}

export const getArtistInf = (artistName) => {
    return dispatch => {
        dispatch(getArtistInfStart());
        axios(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=f2e3f5232f7455ffc0fdf0f5849d8848&format=json`)
        .then(res => {
            const artistInfo =  {
                    name: res.data.artist.name,
                    img: res.data.artist.image[1]['#text'],
                    tags: [...res.data.artist.tags.tag],
                    bio: res.data.artist.bio.content
                };
            dispatch(getArtistInfSuccess(artistInfo))
        })
        .catch(error => dispatch(getArtistInfFailed(error)))
    }
}