import {useState, useEffect} from 'react';
import HeadSection from '../HeadSection';

const IncomeVals = () => { 
    
    const [TotIncome, settotIncome] = useState(0);
    const [totTaxBrackets ,settotTaxBrackets] = useState(0);
    const [AvValues ,setAvValues] = useState();

const Users= [{
    name: 'Johan Golden', salary: 60000
}, {
    name: 'Susan Golden', salary: 27000
}
]

const expenses= [{
    prod_name: 'Dairy Milk 1L', cost: 19.99
}, {
    prod_name: 'Albany White Bread', cost: 14.99
}
]

useEffect(() => {

    let totalIcome = 0;
    let totalIcomeTax = 0;

    Users.forEach(element => {
        totalIcome += element.salary;
      });

    console.log(totalIcome);

    settotIncome(totalIcome);

    //taxBrackets
    totalIcome = totalIcome * 12;

    console.log(totalIcome);

}, []);

    return <HeadSection name="josh" totalIncome = {TotIncome}/>

}

export default IncomeVals;