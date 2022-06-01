import React from "react";
import {useState, useEffect} from 'react';
import IandE from './calculations/IncomeAndExpenses'

export default function Head() {

    const [Users, setUsers] = useState([
    {name: 'Johan Golden', salary: 67000}, 
    {name: 'Susan Golden', salary: 20000}
    ]);

    const Expenses= [{
        prod_name: 'Dairy Milk 1L', cost: 19.99
    }, {
        prod_name: 'Albany White Bread', cost: 14.99
    }]

    return (
        <div className='SectionOne'>
            <IandE userData = {Users} expenses = {Expenses}/>
        </div> 
    )
}

