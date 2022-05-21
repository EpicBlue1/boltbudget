import {useState} from 'react';
import calculateAverage from '../functions/calculations';
import Footer from './subcomp/footer';

export default function Expenses() {

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
        <>
        <div className='SectionTwo'>
            <h1>Expenses</h1>
            <h2>Recent purchases</h2>
            <div className='subSectionInfo'>
                <h4>Select Period</h4>
                <select className='dropDown'>
                    <option></option>
                </select>
            </div>
            <div className='subSectionInfo'>
            <h4>Total This Month</h4>
            <div className='dropDown'><h4>R3216</h4></div>
            </div>
            <table>
                <tr>
                    <th className='tableThree Align_Left'><h4>Expenses</h4></th>
                    <th className='tableThree Align_Left'><h4>Date</h4></th>
                    <th className='tableThree Align_Left'><h4>Price</h4></th>
                </tr>
            </table>
            <div className='maxHeight overflow'>
            <table>
                <tr>
                    <td className='tableThree Align_Left'><h4>Expenses</h4></td>
                    <td className='tableThree Align_Left'><h4>Expenses</h4></td>
                    <td className='tableThree Align_Left'><h4>Expenses</h4></td>
                </tr>   
                <tr>
                    <td className='tableThree Align_Left'><h4>Expenses</h4></td>
                    <td className='tableThree Align_Left'><h4>Expenses</h4></td>
                    <td className='tableThree Align_Left'><h4>Expenses</h4></td>
                </tr>
                <tr>
                    <td className='tableThree Align_Left'><h4>Expenses</h4></td>
                    <td className='tableThree Align_Left'><h4>Expenses</h4></td>
                    <td className='tableThree Align_Left'><h4>Expenses</h4></td>
                </tr>
            </table>
            </div>
            <h2>Recurring purchases</h2>
            <table>
                <tr>
                    <th className='tableThree Align_Left'><h4>Expenses</h4></th>
                    <th className='tableThree Align_Left'><h4>Date</h4></th>
                    <th className='tableThree Align_Left'><h4>Price</h4></th>
                </tr>
            </table>
            <div className='maxHeight overflow'>
            <table>
                <tr>
                    <td className='tableThree Align_Left'><h4>Expenses</h4></td>
                    <td className='tableThree Align_Left'><h4>Expenses</h4></td>
                    <td className='tableThree Align_Left'><h4>Expenses</h4></td>
                </tr>   
                <tr>
                    <td className='tableThree Align_Left'><h4>Expenses</h4></td>
                    <td className='tableThree Align_Left'><h4>Expenses</h4></td>
                    <td className='tableThree Align_Left'><h4>Expenses</h4></td>
                </tr>
                <tr>
                    <td className='tableThree Align_Left'><h4>Expenses</h4></td>
                    <td className='tableThree Align_Left'><h4>Expenses</h4></td>
                    <td className='tableThree Align_Left'><h4>Expenses</h4></td>
                </tr>
            </table>
            </div>
            <button className='addBut'></button>
        </div>
        </>
    )
}