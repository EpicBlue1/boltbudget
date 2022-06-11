import React from 'react';

const expTabItem = (props) => {
    return (
        <tr>
        <th>{props.name}</th>
        <th>R{props.price}</th>
        </tr>
    );
};

export default expTabItem;