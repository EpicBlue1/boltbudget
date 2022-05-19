import {useState} from 'react';
import calculateAverage from '../functions/calculations';

export default function AverageFormatter() {

    const [formValues, setformValues] = useState([0, 2]);
    const [CurrentValues ,setCurrentValues] = useState();

    const handInputChange = (newNumber, index) => {
        var changingFormValues = formValues
        changingFormValues[index] = newNumber;

        setformValues(changingFormValues)
    }

    const addNewNumber = () => {
        setformValues([...formValues, 0]);
    }

    const doCalculations = () => {
        var average = calculateAverage(formValues)
        setCurrentValues(average);

        console.log(average)
    }

    const removeNumberFromArray = (index) => {
        var changingFormValues = formValues;
        changingFormValues.splice(index, 1);
        setformValues(changingFormValues);
    };

    return (
        <div>
            {}
                {formValues.map((number, index) => (
                    <div key={index}>
                        <input onChange={(e) => handInputChange(+e.target.value, index)} defaultValue={number} name="numbers" type="number" />
                        <div onClick={removeNumberFromArray}>X</div>                    
                    </div>
                ))}

            {}
            <div onClick = {addNewNumber}>add</div>
            <div onClick = {doCalculations}>Do average {average}</div>

             
        </div>
    )
}