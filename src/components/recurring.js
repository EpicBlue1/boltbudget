import {useState} from 'react';
import calculateAverage from '../functions/calculations';

export default function AverageFormatter() {

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
        <div className='SectionTwo'>
            <h1>Recurring</h1>

        </div>
    )
}