import React from 'react';

const userTabItem = (props) => {
    return (
        <tr>
        <th>{props.name}</th>
        <th>R{props.salary}</th>
        <th>{props.taxBracket}</th>
        <th>R{props.salaryAfterTax}</th>
    </tr>
    );
};

export default userTabItem;