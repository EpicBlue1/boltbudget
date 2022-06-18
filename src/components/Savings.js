import React from 'react';
import {useEffect, useState} from 'react';
import Option from './subComps/dropDown';

const Savings = (props) => {

    const[TotalBefore, setTotalBefore] = useState(props.totalIncome);
    const[TotalPercSave, setTotalPercSave] = useState("Type in a percentage");

    const GetVal = (e) => {
        let income = props.totalIncome;
        let aftertax = props.totAfterTax;
        let checkbox = e.target.checked;
        console.log(checkbox);

        if(checkbox === true){
           let ShowTot = income - aftertax;
           setTotalBefore(ShowTot);
        } else if(checkbox === false){
            let ShowTot = income;
            setTotalBefore(ShowTot);
        }
    }

    const CalcPers = (e) => {
        let percentage = document.getElementById('PercVal').value;

        percentage = TotalBefore * (percentage / 100);

        setTotalPercSave(percentage)
        console.log(percentage);
    }

    return (
        <div  id="section3" className="SavSec">
            <div className="SavingsCol float">
                <p className="float">Calculate after tax</p>
                <input aria-label="CheckBox" onClick={GetVal} className="CHECK" type="checkbox"/>
                <br/><br/>
                <h2 className="SavingHeading">Percentage</h2>
                <input data-testid="PercInput" id="PercVal" placeholder="%" type="numer"/>
                <button data-testid="CalculatePerc" onClick={CalcPers}>Calculate</button>
            </div>      
            <div className="SavingsCol float">
            <h2 className="SavingHeading">Potential to save</h2>
                <p data-testid="TotalToSave">R {TotalBefore}</p>
                <h2 className="SavingHeading">Total Saved monthly</h2>
                <p data-testid="Saved">R {TotalPercSave}</p>
            </div>
        </div>
    );
};

export default Savings;