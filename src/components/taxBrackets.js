import {useState} from 'react';
import calculateAverage from '../functions/calculations';

export default function taxBrackets() {


    return (
        <div className='SectionTwo'>
            <h1>Taxes</h1>
            <h2>Incomes and tax brackets</h2>
            <div className='subSectionInfo'>
                <h4>Select Period</h4>
                <select className='dropDown'>
                    <option></option>
                </select>
            </div>
            <table>
                <tr>
                    <th className='tableFour Align_Left'><h4>Name</h4></th>
                    <th className='tableFour Align_Left'><h4>Income</h4></th>
                    <th className='tableFour Align_Left'><h4>Tax Brackets</h4></th>
                    <th className='tableFour Align_Left'><h4>Income after tax</h4></th>
                </tr>
            </table>
            <div className='maxHeight overflow'>
            <table>
                <tr>
                    <td className='tableFour Align_Left'><h4>Expenses</h4></td>
                    <td className='tableFour Align_Left'><h4>Expenses</h4></td>
                    <td className='tableFour Align_Left'><h4>Expenses</h4></td>
                    <td className='tableFour Align_Left'><h4>Expenses</h4></td>
                </tr>   
                <tr>
                    <td className='tableFour Align_Left'><h4>Expenses</h4></td>
                    <td className='tableFour Align_Left'><h4>Expenses</h4></td>
                    <td className='tableFour Align_Left'><h4>Expenses</h4></td>
                    <td className='tableFour Align_Left'><h4>Expenses</h4></td>
                </tr>
                <tr>
                <td className='tableFour Align_Left'><h4>Expenses</h4></td>
                    <td className='tableFour Align_Left'><h4>Expenses</h4></td>
                    <td className='tableFour Align_Left'><h4>Expenses</h4></td>
                    <td className='tableFour Align_Left'><h4>Expenses</h4></td>
                </tr>
            </table>
            </div>
            <div className='add'>    
                <form>
                    <input required placeholder='Person Name' name="TaxPerName" aria-label='TaxPerName' className='addInput'/>
                    <input required placeholder='Income' type="number" name="TaxPerIncome" aria-label='TaxPerIcome' className='addInput'/>
                    <button className='addBut'></button>
                </form>        
            </div>
        </div>
    )
}