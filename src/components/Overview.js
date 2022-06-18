import React from 'react';
import {useEffect, useState} from 'react';
import TableItem from './subComps/userTabItem';
import TableItemTwo from './subComps/expTabItem';
import SavingsSec from './Savings';

const Overview = (props) => {

    const [tableItemOne, settableItemOne] = useState();
    const [tableItemTwo, settableItemTwo] = useState();

    const AddUserSec = (e) => {
        e.preventDefault();
        let FirstName = document.getElementById('FirstName').value;
        let LastName = document.getElementById('LastName').value;
        let Salary = parseInt(document.getElementById('Salary').value);
        let obj = {name: FirstName + " " + LastName, salary: Salary}
        
        props.UsersBef.push(obj);

        document.getElementById('FirstName').value = "";
        document.getElementById('LastName').value = "";
        document.getElementById('Salary').value = "";
    }

    const AddExp = (e) => {
        e.preventDefault();
        let ProductName = document.getElementById('ProName').value;
        let Cost = parseInt((document.getElementById('Cost').value) + ".00");
        let obj = {prod_name: ProductName, cost: Cost}    
        
        props.expenses.push(obj);
        console.log(props.expenses)
    }

    useEffect(() => {
        console.log(props.totTaxes);
        let renderTb = props.totTaxes.map((item) => <TableItem name={item.name} salary={item.salary} salaryAfterTax={item.salary - item.salaryAfterTax/12} taxBracket={item.taxB}/>);
        settableItemOne(renderTb);

        let renderTbTwo = props.expenses.map((item) => <TableItemTwo name={item.prod_name} price={item.cost}/>);
        settableItemTwo(renderTbTwo);
    });

    return (
        <div className="Container">
            <h1 className="Title">
                Overview
            </h1>
            <div className="OverviewSub">
                <h2 className="HeadingTwo inline">Total Income</h2>
                <h2 className="HeadingTwo inline">Total Expenses</h2>
                <h2 className="HeadingTwo inline">Total Tax Expense</h2>
                <h2 className="HeadingTwo inline">R{props.totalIncome}</h2>
                <h2 className="HeadingTwo inline">R{props.totExp}</h2>
                <h2 className="HeadingTwo inline">R{props.totAfterTax}</h2>
            </div>
            <hr></hr>
            <div className="AddUserSec">
            <h2 className="">Add a user</h2>
                <form onSubmit={AddUserSec}>
                    <input id='FirstName' required placeholder="First Name" className="addUser"/>
                    <input id='LastName' required placeholder="Last Name" className="addUser"/>
                    <input id='Salary' required type="number" placeholder="Income" className="addUser"/>
                    <br></br>
                    <br></br>
                    <button className="addUser">Add User</button>
                </form>
            </div>
            <div className="UserSec">
            <h2>Users</h2>
                <table>
                <tr className="TBtitles">
                    <th>Name</th>
                    <th>Income</th>
                    <th>Tax taxBracket</th>
                    <th>Income After Tax</th>
                </tr>
                    {tableItemOne}
                </table>
            </div>
            <hr></hr>
            <div className="AddUserSec">
            <h2 className="">Add an expense</h2>
                <form onSubmit={AddExp}>
                    <input id='ProName' required placeholder="Product Name" className="addUser"/>
                    <input id='Cost' required type="number" placeholder="Cost" className="addUser"/>
                    <br></br>
                    <br></br>
                    <button className="addUser">Add User</button>
                </form>
            </div>
            <div className="UserSec">
            <h2>Expenses</h2>
                <table>
                <tr className="TBtitles">
                    <th>Product</th>
                    <th>Price</th>
                </tr>
                    {tableItemTwo}
                </table>
            </div>
            <hr></hr>
            <h1 className="Title">
                Savings
            </h1>
            <SavingsSec totAfterTax={props.totAfterTax} totalIncome={props.totalIncome}/>
        </div>
    );
};

export default Overview;