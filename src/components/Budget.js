import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);

    const setNewBudget = (val)=>{
        dispatch({
            type: 'SET_BUDGET',
            payload: val,
        })
    };

    //const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {setNewBudget(event.target.value)};
    return (
        <div className='alert alert-secondary'>
        <span>Budget: {currency} </span>
        <input 
            type="number" 
            step="10" 
            value={budget} 
            onChange={handleBudgetChange}>
        </input>
        </div>
    );
};
export default Budget;
