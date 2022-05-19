import React, { useState } from 'react';

const SumForm = () => {

    const [numberOne, setNumberOne] = useState("");
    const [numberTwo, setNumberTwo] = useState("");
    const [result, setResult] = useState('');

    const doCalculation = (e) => {
        e.preventDefault();
        let calc = (+numberOne) + (+numberTwo);
        setResult(calc);
    }

    return (
        <div>
            <form onSubmit={doCalculation}>
                <input name="numberOne" aria-label='numberOne' value={numberOne} onChange={(e) => setNumberOne(e.target.value)} type={"text"} />
                <input name="numberTwo" aria-label='numberTwo' value={numberTwo} onChange={(e) => setNumberTwo(e.target.value)} type={"text"} />
                <input type="submit" name="submit" />
            </form>
            <p>The Sum is: {result}</p>
        </div>
    );
};

export default SumForm;