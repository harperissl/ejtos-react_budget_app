import React, { useContext } from 'react';
import { FaPlusCircle, FaTimesCircle } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';
import { MdDoNotDisturbOn } from 'react-icons/md';

const ExpenseItem = (props) => {
    const { currency, dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_EXPENSE',
            payload: item,
        });
    };

    const increaseAllocation = (name) => {
        const item = {
            name: props.name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: item,
        });

    }

    const decreaseAllocation = () => {
        const item = {
            name: props.name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: item,
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><FaPlusCircle size='2.2em' color="green" onClick={increaseAllocation}></FaPlusCircle></td>
            <td><MdDoNotDisturbOn size='2.2em' color="red" onClick={decreaseAllocation}></MdDoNotDisturbOn></td>
            <td><FaTimesCircle size='2.2em' color="black" onClick={handleDeleteExpense}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;