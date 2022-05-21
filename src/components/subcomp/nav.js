import {useState} from 'react';
import Branding from '../../img/branding.svg';
import Logo from '../../img/Logo.svg';
import {Link} from 'react-router-dom';

export default function Nav() {

    return (
        <div src={Branding} style={{backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundposition: 'center'}} className='nav'>
            <br></br>
            <br></br>
            <Link to="/"><h3>BoltBudget</h3></Link>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Link to="/"><h3>Expenses</h3></Link>
            <br></br>
            <br></br>
            <Link to="/Savings"><h3>Savings</h3></Link>
            <br></br>
            <br></br>
            <Link to="/Groceries"><h3>Groceries</h3></Link>
        </div>
    )
}