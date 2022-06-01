import React from "react";
import {useState, useEffect} from 'react';

export default function IandE(props) {

    const [AvValues ,setAvValues] = useState();
    const [TotIncome, settotIncome] = useState(0);
    const [totExpenses, settotExpenses] = useState(0);
    const [totTaxesAll, settotTaxesAll] = useState(0);
    const [UserTaxes ,setUserTaxes] = useState(0);

useEffect(() => {

    let totalIncome = 0;
    let totalExpenses = 0;
    let totalIncomeTax = 0;

    //Total Income All users
    props.userData.forEach(element => {
        totalIncome += element.salary;
    });
    settotIncome(totalIncome);
    let totalIncomeBef = totalIncome *12;


    //Total expenses
    props.expenses.forEach(element => {
        totalExpenses += element.cost;
    });
    settotExpenses(totalExpenses);

    let UserTax = []
    
    //credits: Analysis✿ ಠ_ಠ
    props.userData.forEach(element => {
        let incomebefore = element.salary;
        let taxBracket = "";
        let yearlytax = 0;

        if(incomebefore < (226000 / 12)){

            incomebefore = incomebefore - (((incomebefore * 12) * 0.18) / 12);
            taxBracket = "18%";

        } else if(incomebefore < (353100 / 12) && incomebefore > (226001 / 12)){

            incomebefore = incomebefore * 12;
            incomebefore = ((353100 - incomebefore) * 0.26) + 40680;

            taxBracket = "40 680 + 26% of taxable income above 226 000";

        } else if(incomebefore > (353101 / 12) && incomebefore < (448700 / 12)){

            incomebefore = incomebefore * 12;
            incomebefore = ((488700 - incomebefore) * 0.31) + 73726;

            taxBracket = "73 726 + 31% of taxable income above 353 100";

        } else if(incomebefore > (488701 / 12) && incomebefore < (641400 / 12)){

            incomebefore = incomebefore * 12;
            incomebefore = ((641400 - incomebefore) * 0.36) + 115762;

            taxBracket = "115 762 + 36% of taxable income above 488 700";

        } else if(incomebefore > (641401 / 12) && incomebefore < (817600 / 12)){

            incomebefore = incomebefore * 12;
            incomebefore = ((817600 - incomebefore) * 0.39) + 170734;

            taxBracket = "170 734 + 39% of taxable income above 641 400";

        } else if(incomebefore > (817601 / 12) && incomebefore < (1731600 / 12)){

            incomebefore = incomebefore * 12;
            incomebefore = ((1731600 - incomebefore) * 0.41) + 239452;

            taxBracket = "239 452  + 41% of taxable income above 817 600";
        } else if(incomebefore > (1731600 / 12)){

            incomebefore = incomebefore * 12;
            incomebefore = ((1731601 - incomebefore) * 0.45) + 614192;

            taxBracket = "614 192 + 45% of taxable income above 1 731 600";
        }

        UserTax.push({name: element.name, salaryAfterTax: incomebefore, taxB: taxBracket});
    });

    setUserTaxes(UserTax);

    let totalTaxAllUsers = 0;
    //Total expenses
    UserTax.forEach(element => {
        totalTaxAllUsers += (element.salaryAfterTax / 12);
    });
    settotTaxesAll(Math.round(totalTaxAllUsers));

}, []);

    return(
        <>
            <hr></hr>
            <div className='subSections'>
                <div className='subSection'><h3>Total Income</h3><br></br><h2>R{TotIncome}</h2></div>
                <div className='subSection'><h3>Total Expenses</h3><br></br><h2>R{totExpenses}</h2></div>
                <div className='subSection'><h3>Total Income after tax all users(Monthly)</h3><br></br><h2>R{totTaxesAll}</h2></div>
            </div>
            <hr></hr>
        </>
    ) 

}



