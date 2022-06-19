import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculations from './mockCalculation';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

describe('Mock Tests For the Tax brackets and Income after tax', () => {

    const array = [{name: "Stevie Wonder", salary: 600}];

    beforeEach(() => {
        console.log("MockCalcs Functions Test")
        render(<Calculations array={array}/>);
    })

    const userInput = ({inputOne, inputTwo, inputThree, inputFour, inputFive}) => {

        const inputFnameElement = screen.getByTestId(/Fname/i);
        const inputLnameElement = screen.getByTestId(/Lname/i);
        const inputIncomeElement = screen.getByTestId(/Income/i); 
        
        if(inputOne){
            userEvent.type(inputFnameElement, inputOne)
        }
        if(inputTwo){
            userEvent.type(inputLnameElement, inputTwo)
        }
        if(inputThree){
            userEvent.type(inputIncomeElement, inputThree)
        }
        return {
            inputFnameElement,
            inputLnameElement,
            inputIncomeElement,
        }
    }
    
    test("Make sure array is what we expect", () => {
        expect(array).toEqual([{name: "Stevie Wonder", salary: 600}]);
    })

    test("If user is added to Dom", () =>{
    
        const {inputNumberOneElement, inputNumberTwoElement, inputIncomeElement} = userInput({inputOne: "Lebron", inputTwo: "James", inputThree: "30000"});

        const addButton = screen.getByTestId(/addUserBUt/i);

        userEvent.click(addButton);

        const resultElement = screen.getByText("Lebron", {exact: false});

        expect(resultElement.textContent).toBe("Lebron James")
    })

    test("If user is added to Object Array", () =>{
        expect(array).toEqual([{name: "Stevie Wonder", salary: 600}, {name: "Lebron James", salary: 30000}]);
    })

    it('tests if inputs and dom update and add', () => {
        const component = renderer.create(<Calculations array={array}/>).toJSON();

        const {inputNumberOneElement, inputNumberTwoElement, inputIncomeElement} = userInput({inputOne: "Lebron", inputTwo: "James", inputThree: "30000"});

        const addButton = screen.getByTestId(/addUserBUt/i);

        userEvent.click(addButton);
    
        expect(component).toMatchSnapshot();
    });

})
