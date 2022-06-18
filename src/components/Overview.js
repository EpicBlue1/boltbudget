import React from 'react';
import {useEffect, useState} from 'react';
import TableItem from './subComps/userTabItem';
import TableItemTwo from './subComps/expTabItem';
import SavingsSec from './Savings';
import Modal from './subComps/infoModal';

const Overview = (props) => {

    const [tableItemOne, settableItemOne] = useState();
    const [tableItemTwo, settableItemTwo] = useState();
    const [counter, setcounter] = useState(0);

    const AddUserSec = (e) => {
        e.preventDefault();
        let FirstName = document.getElementById('FirstName').value;
        let LastName = document.getElementById('LastName').value;
        let Salary = parseInt(document.getElementById('Salary').value);
        let obj = {name: FirstName + " " + LastName, salary: Salary}

        let counter = 1;
        counter = counter + 1;

        setcounter(counter)
        
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
        
        let counter = 1;
        counter = counter + 1;

        setcounter(counter)
        
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
        <div id="section1" className="Container">
            {/* <Modal /> */}
            <h1  className="Title">
                Overview
            </h1>
            <div className="OverviewSub">
                <h2 className="HeadingTwo inline">Total Income (Household)</h2>
                <h2 className="HeadingTwo inline">Total Expenses</h2>
                <h2 className="HeadingTwo inline">Total Tax Expense (Household)</h2>
                <h2 className="HeadingTwo inline">R{props.totalIncome}</h2>
                <h2 className="HeadingTwo inline">R{props.totExp}</h2>
                <h2 className="HeadingTwo inline">R{props.totAfterTax}</h2>
            </div>
            <hr></hr>
            <h2 className="TitleTwo">
                What is Bolt Budget?
            </h2>
            <div className="OverviewSub TitleTwo">
                <p>lorem ipsum dolor</p>
            </div>
            <br></br>
            <hr></hr>
            <h1 className="Title">
                Users
            </h1>
            <div id="section1" className="AddUserSec">
            <h2 className="">Add a user</h2>
                <form onSubmit={AddUserSec}>
                    <input data-testid="Fname" id='FirstName' required placeholder="First Name" className="addUser"/>
                    <input data-testid="Lname" id='LastName' required placeholder="Last Name" className="addUser"/>
                    <input data-testid="Income" id='Salary' required type="number" placeholder="Income" className="addUser"/>
                    <br></br>
                    <br></br>
                    <button data-testid="AddUserBut" className="addUser">Add User</button>
                </form>
            </div>
            <div data-testid="UsersTable" className="UserSec">
                <br></br>
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
            <h1 className="Title">
                Expenses
            </h1>
            <div id="section2" className="AddUserSec">
            <h2 className="">Add an expense</h2>
                <form onSubmit={AddExp}>
                    <input data-testid="ProductName" id='ProName' required placeholder="Product Name" className="addUser"/>
                    <input data-testid="ProCost" id='Cost' required type="number" placeholder="Cost" className="addUser"/>
                    <br></br>
                    <br></br>
                    <button data-testid="AddExpense" className="addUser">Add Expense</button>
                </form>
            </div>
            <div className="UserSec">
                <br></br>
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
            <SavingsSec totTaxes={props.totTaxes} totAfterTax={props.totAfterTax} totalIncome={props.totalIncome}/>
        </div>
    );
};

export default Overview;