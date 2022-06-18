import React from 'react';

const DropDown = (props) => {

    console.log(props.totTaxes);

    const users = props.totTaxes;

    return (
        <option>
            {users.name}
        </option>
    );
};

export default DropDown;