import React from "react";

const HeadSection = (props) => {

    console.log(props.name);

    return (
        <div className='SectionOne'>
            <hr></hr>
            <div className='subSections'>
                <div className='subSection'><h3>Total Income</h3><br></br><h2>R{props.totalIncome}</h2></div>
                <div className='subSection'><h3>Total Expenses</h3><br></br><h2>R13 327</h2></div>
                <div className='subSection'><h3>Total Income after tax</h3><br></br><h2>R65 560</h2></div>
            </div>
            <hr></hr>
        </div> 
    )
}

export default HeadSection;