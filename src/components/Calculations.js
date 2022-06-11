import React from 'react';
import Overview from './Overview';
import {useState, useEffect} from 'react';

const Calculations = (props) => {
    const [Before, setBefore] = useState([
        {name: 'Johan Golden', salary: 67000}, 
        {name: 'Susan Golden', salary: 20000}
    ])
    const [Expenses, setExp] = useState([{
        prod_name: 'Dairy Milk 1L', cost: 19.99
    }, {
        prod_name: 'Albany White Bread', cost: 14.99
    }])
    const [TotIncome, settotIncome] = useState();
    const [totExpenses, settotExpenses] = useState();
    const [totTaxesAll, settotTaxesAll] = useState();
    const [UserTaxes ,setUserTaxes] = useState();

    useEffect(() => {

    console.log(Before);

    let totalIncome = 0;
    let totalExpenses = 0;
    let totalIncomeAfterTax = 0;

    //Total Income All users
    Before.forEach(element => {
        totalIncome += element.salary;
    });

    // totalIncomeAfterTax = props.userData.salary
    settotIncome(totalIncome);

    //Total expenses
    Expenses.forEach(element => {
        totalExpenses += element.cost;
    });
    settotExpenses(totalExpenses);

    let UserTax = []
    
    //credits: Analysis✿ ಠ_ಠ
    Before.forEach(element => {
        let incomebefore = element.salary;
        let taxBracket = "";

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

        UserTax.push({name: element.name, salary: element.salary, salaryAfterTax: incomebefore, taxB: taxBracket});

    });

    setUserTaxes(UserTax);

    let totalTaxAllUsers = 0;
    //Total Tax monthly for all users combined
    UserTax.forEach(element => {
        totalTaxAllUsers += (element.salaryAfterTax / 12);
    });
    settotTaxesAll(Math.round(totalTaxAllUsers));

    console.log(UserTaxes)
}, [UserTaxes]);


if(UserTaxes === undefined){
    return (
        <div>Loading...</div>
    )
}

    return (
        <>
            <Overview totExp={totExpenses} expenses={Expenses} totAfterTax={totTaxesAll} totalIncome={TotIncome} setBefore={setBefore} UsersBef={Before} totTaxes={UserTaxes} />
        </>
    );
};

export default Calculations;