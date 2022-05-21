import {useState} from 'react';
import calculateAverage from '../functions/calculations';

export default function HeadSection() {

    const [formValues, setformValues] = useState([0, 2]);
    const [CurrentValues ,setCurrentValues] = useState();
    const [AvValues ,setAvValues] = useState();

    const handInputChange = (newNumber, index) => {
        var changingFormValues = formValues
        changingFormValues[index] = newNumber;

        setformValues(changingFormValues)
    }

    const addNewNumber = () => {
        setformValues([...formValues, 0]);
    }

    const doCalculations = () => {
        var average = calculateAverage(formValues);
        setCurrentValues(average);

        setAvValues(average);


        console.log(average);
    }

    const removeNumberFromArray = (index) => {
        var changingFormValues = formValues;
        changingFormValues.splice(index, 1);
        setformValues(changingFormValues);
    };

    return (
        <div className='SectionOne'>
            <hr></hr>
            <div className='subSections'>
                <div className='subSection'><h3>Total Income after tax</h3><br></br><h2>R46 589,40</h2></div>
                <div className='subSection'><h3>Total Income after tax</h3><br></br><h2>R13 327</h2></div>
                <div className='subSection'><h3>Total Income after tax</h3><br></br><h2>R65 560</h2></div>
            </div>
            <hr></hr>
        </div>
        
    )
}