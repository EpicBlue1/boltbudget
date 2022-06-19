import React from 'react';
import {useEffect, useState} from 'react';
import TableItem from './subComps/userTabItem';
import TableItemTwo from './subComps/expTabItem';
import SavingsSec from './Savings';
import Modal from './subComps/infoModal';

const Overview = (props) => {

    const [tableItemOne, settableItemOne] = useState();
    const [tableItemTwo, settableItemTwo] = useState();
    const [Props, setPops] = useState("Welcome to Bolt Budget");
    
    const [isActive, setActive] = useState("false");

    const InfoExpense = () => {
        setPops("Expenses can be examined in the expense section. New expense can be added by entering their name and cost, the total will be calculated automatically and displayed in the overview section.")
        setActive(!isActive);
    }

    const InfoUsers = () => {
        setPops("User tax brackets and salary after tax can be examined in the User section. New users can be added by entering their first name, last name, and income; the tax brackets will be calculated automatically.")
        setActive(!isActive);
    }

    const InfoSavings = () => {
        setPops("Savings can be calculated as a percentage of the total before and after tax using the check box. The total amount to be saved will be displayed.")
        setActive(!isActive);
    }

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
    }, []);

    return (
        <div id="section1" className="Container">
            <Modal info={Props} isActive={isActive} setActive={setActive}/>
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
                <p>Bolt Budget is a web app for calculating and monitoring your family's budget. Add users to see tax brackets and after-tax income. Examine the savings section and calculate how much you can save each month using a percentage.</p>
            </div>
            <br></br>
            <hr></hr>
            <div onClick={InfoUsers} className="InfoIcon"></div>
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
            <div onClick={InfoExpense} className="InfoIcon"></div>
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
            <div onClick={InfoSavings} className="InfoIcon"></div>
            <h1 className="Title">
                Savings
            </h1>
            <SavingsSec totTaxes={props.totTaxes} totAfterTax={props.totAfterTax} totalIncome={props.totalIncome}/>
        </div>
    );
};

export default Overview;