import * as actionTypes from '../actions/actionTypes';

const initialState = {
    music: null,
    loading: false,
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_MUSIC_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.SET_MUSIC_SUCCESS:
            return {
                ...state,
                music: action.music,
                loading: false
            }
        case actionTypes.SET_MUSIC_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

export default reducer;