import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMoves } from '../redux/actions/moveActions';
import MoveItem from './MoveItem';

const MoveList = () => {
    const dispatch = useDispatch();
    const { moves, loading, error } = useSelector(state => state.moves);

    useEffect(() => {
        dispatch(fetchMoves());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            {moves.map(move => (
                <MoveItem key={move.estimate_id} move={move} />
            ))}
        </div>
    );
};

export default MoveList;
