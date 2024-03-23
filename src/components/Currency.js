import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }

    return (
        <button type="button" class="btn btn-success">Currency
        <select class="form-control-sm btn btn-success border-0" name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
              
              <option value="$">$ Dollar</option>
              <option value="£">£ Pound</option>
              <option value="€">€ Euro</option>
              <option value="₹">₹ Ruppee </option>
              
            </select>
    </button>	
            	
        

  
    );
};

export default Currency;


/*
<div className='alert alert-secondary'> 
        <div className='dropdown'>
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown button
        </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <button class="dropdown-item" onClick={changeCurrency("$")}>$</button>
            </div>
        </div>


        Currency {
            <select name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
              <option value="$">$ Dollar</option>
              <option value="£">£ Pound</option>
              <option value="€">€ Euro</option>
              <option value="₹">₹ Ruppee </option>
            </select>	
            }	
        </div>





        <div class="dropdown">
        <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
            Dropdown button
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Link 1</a></li>
            <li><a class="dropdown-item" href="#">Link 2</a></li>
            <li><a class="dropdown-item" href="#">Link 3</a></li>
        </ul>
        </div>
*/

/*
<div class="dropdown">
        
        <button onclick={event=>changeCurrency(event.target.value)} class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown</button>
            
            <ul class="dropdown-menu">
                <li><a href="#$">$ Dollar</a></li>
                <li><a href="#£">£ Pound</a></li>
                <li><a href="#€">€ Euro</a></li>
            </ul>
            
        </div>
*/