import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { currency, budget, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const toatlExpenses = expenses.map(it => it.cost).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        if (event.target.value > 20000) {
            alert("Budget shouldnot bigger than 20000");
        } else if (event.target.value < toatlExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
        } else {
            setNewBudget(event.target.value);
        }
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
