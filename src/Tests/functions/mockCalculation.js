import React from 'react';
import {useState, useEffect} from 'react';
import UserItem from './mockSubComp/mockUserItem';

const MockCalculation = (props) => {

    const [UserTax, setUserTaxes] = useState([]);

    const [tableItem, settableItem] = useState();

    const AddUserSec = (e) => {
        e.preventDefault();
        let FirstName = document.getElementById('FirstName').value;
        let LastName = document.getElementById('LastName').value;
        let Salary = parseInt(document.getElementById('Salary').value);
        let obj = {name: FirstName + " " + LastName, salary: Salary};

        props.array.push(obj);

        props.array.forEach(element => {
            let incomebefore = element.salary;
            let taxBracket = "";
    
            if(incomebefore < (226000 / 12)){
    
                incomebefore = incomebefore - (((incomebefore * 12) * 0.18) / 12);
                taxBracket = "18%";
    
            } else if(incomebefore < (353100 / 12) && incomebefore > (226001 / 12)){
    
                incomebefore = incomebefore * 12;
                incomebefore = ((353100 - incomebefore) * 0.26) + 40680;
    
                taxBracket = "40 680 + 26% of taxable income above 226 000";
    
            } else if(incomebefore > (353101 / 12) && incomebefore < (448700 / 12)){
    
                incomebefore = incomebefore * 12;
                incomebefore = ((488700 - incomebefore) * 0.31) + 73726;
    
                taxBracket = "73 726 + 31% of taxable income above 353 100";
    
            } else if(incomebefore > (488701 / 12) && incomebefore < (641400 / 12)){
    
                incomebefore = incomebefore * 12;
                incomebefore = ((641400 - incomebefore) * 0.36) + 115762;
    
                taxBracket = "115 762 + 36% of taxable income above 488 700";
    
            } else if(incomebefore > (641401 / 12) && incomebefore < (817600 / 12)){
    
                incomebefore = incomebefore * 12;
                incomebefore = ((817600 - incomebefore) * 0.39) + 170734;
    
                taxBracket = "170 734 + 39% of taxable income above 641 400";
    
            } else if(incomebefore > (817601 / 12) && incomebefore < (1731600 / 12)){
    
                incomebefore = incomebefore * 12;
                incomebefore = ((1731600 - incomebefore) * 0.41) + 239452;
    
                taxBracket = "239 452  + 41% of taxable income above 817 600";
            } else if(incomebefore > (1731600 / 12)){
    
                incomebefore = incomebefore * 12;
                incomebefore = ((1731601 - incomebefore) * 0.45) + 614192;
    
                taxBracket = "614 192 + 45% of taxable income above 1 731 600";
            }
    
            UserTax.push({name: element.name, salary: element.salary, salaryAfterTax: incomebefore, taxB: taxBracket, key:element.salary});
        });

        let renderTb = UserTax.map((item) => <UserItem name={item.name} salary={item.salary} salaryAfterTax={item.salary - item.salaryAfterTax/12} taxBracket={item.taxB}/>);
        settableItem(renderTb);

        document.getElementById('FirstName').value = "";
        document.getElementById('LastName').value = "";
        document.getElementById('Salary').value = "";
    }
    
    return (
        <div>
            <form onSubmit={AddUserSec}>
                <input data-testid="Fname" id='FirstName' required placeholder="First Name" className="addUser"/>
                <input data-testid="Lname" id='LastName' required placeholder="Last Name" className="addUser"/>
                <input data-testid="Income" id='Salary' required type="number" placeholder="Income" className="addUser"/>
                <br></br>
                <br></br>
                <button data-testid='addUserBUt' className="addUser">Add User</button>
            </form>
            {tableItem} 
        </div>
    );
};

export default MockCalculation;