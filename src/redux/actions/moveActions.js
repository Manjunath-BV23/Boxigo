import axios from 'axios';

export const FETCH_MOVES_REQUEST = 'FETCH_MOVES_REQUEST';
export const FETCH_MOVES_SUCCESS = 'FETCH_MOVES_SUCCESS';
export const FETCH_MOVES_FAILURE = 'FETCH_MOVES_FAILURE';

export const fetchMoves = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_MOVES_REQUEST });
        axios.get('http://test.api.boxigo.in/sample-data/')
            .then(response => {
                dispatch({ type: FETCH_MOVES_SUCCESS, payload: response.data.Customer_Estimate_Flow });
            })
            .catch(error => {
                dispatch({ type: FETCH_MOVES_FAILURE, error });
            });
    };
};
