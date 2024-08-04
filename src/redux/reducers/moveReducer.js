import { FETCH_MOVES_REQUEST, FETCH_MOVES_SUCCESS, FETCH_MOVES_FAILURE } from '../actions/moveActions';

const initialState = {
    loading: false,
    moves: [],
    error: null
};

const moveReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVES_REQUEST:
            return { ...state, loading: true };
        case FETCH_MOVES_SUCCESS:
            return { ...state, loading: false, moves: action.payload };
        case FETCH_MOVES_FAILURE:
            return { ...state, loading: false, error: action.error };
        default:
            return state;
    }
};

export default moveReducer;
