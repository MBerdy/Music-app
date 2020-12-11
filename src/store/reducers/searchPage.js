import * as actionTypes from '../actions/actionTypes';

const initialState = {
    tracks: null,
    loading: false,
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_TRACK_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.SEARCH_TRACK_SUCCESS:
            return {
                ...state,
                tracks: action.tracks,
                loading: false
            }
        case actionTypes.SEARCH_TRACK_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case actionTypes.SEARCH_TRACK_CLEAR:
            return {
                ...state,
                tracks: null,
                error: false,
                loading: false
            }
        default:
            return state
    }
}

export default reducer;