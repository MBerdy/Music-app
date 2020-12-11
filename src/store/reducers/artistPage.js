import * as actionTypes from '../actions/actionTypes';

const initialState = {
    artistInf: null,
    loading: false,
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ARTIST_INF_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.GET_ARTIST_INF_SUCCESS:
            return {
                ...state,
                artistInf: action.artistInf,
                loading: false
            }
        case actionTypes.GET_ARTIST_INF_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case actionTypes.GET_ARTIST_INF_CLEAR:
            return {
                ...state,
                artistInf: null,
                loading: false,
                error: false
            }
        default:
            return state
    }
}

export default reducer;