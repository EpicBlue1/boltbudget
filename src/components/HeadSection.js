import {useState, useEffect} from 'react';
import calculateAverage from '../functions/calculations';

export default function HeadSection() {

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
        name: 'Johan Golden', salary: 60000
    }, {
        name: 'Susan Golden', salary: 27000
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

    

    return (
        <div className='SectionOne'>
            <hr></hr>
            <div className='subSections'>
                <div className='subSection'><h3>Total Income</h3><br></br><h2>R{TotIncome}</h2></div>
                <div className='subSection'><h3>Total Expenses</h3><br></br><h2>R13 327</h2></div>
                <div className='subSection'><h3>Total Income after tax</h3><br></br><h2>R65 560</h2></div>
            </div>
            <hr></hr>
        </div>
        
    )
}