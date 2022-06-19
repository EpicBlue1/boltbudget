import React from 'react';
import {useEffect, useState} from 'react';

const InfoModal = (props) => {

    const [isActive, setActive] = useState("false");

    const closeModal = () => {
        props.setActive(!isActive)
    }

    return (
    <div className={props.isActive ? "ModalContainer" : "Hide"}>
        <h1 className="ModalTitle">Info</h1>
        <br></br>
        <p className="ModalPar"> 
            {props.info}
        </p>
        <button onClick={closeModal}>Close</button>
    </div>
    );
};

export default InfoModal;