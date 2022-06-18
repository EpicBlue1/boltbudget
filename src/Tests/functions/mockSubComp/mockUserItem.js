import React from 'react';

const MockUserItem = (Props) => {
    return (
        <div key={Props.key}>
            <p>{Props.name}</p>
            <p>{Props.salary}</p>
            <p>{Props.salaryAfterTax}</p>
            <p>{Props.taxBracket}</p>
        </div>
    );
};

export default MockUserItem;