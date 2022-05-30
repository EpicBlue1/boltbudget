import {useState} from 'react';
import calculateAverage from '../functions/calculations';
import Footer from './subcomp/footer';

export default function Expenses() {

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
            <div className='add'>    
                <form>
                    <input required placeholder='Expense Name' name="ExpenseName" aria-label='ExpensesRec' className='addInput'/>
                    <select required className='addInput'>
                        <option>Today</option>
                    </select>
                    <input required placeholder='Price' type="number" name="ExpenseName" className='addInput'/>
                    <button className='addBut'></button>
                </form>        
            </div>

        </div>
        </>
    )
}