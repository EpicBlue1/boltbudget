import React from "react";
import {useState, useEffect} from 'react';
import IandE from './calculations/IncomeAndExpenses'

export default function Head(props) {


    return (
        <div className='SectionOne'>
            <IandE userData = {props.userData} expenses = {props.expenses}/>
        </div> 
    )
}

