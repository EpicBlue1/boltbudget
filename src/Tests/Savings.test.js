import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SavingsSec from '../components/Savings';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

describe('Testing Overview functions excluding savings section', () => {

    const MockUsersTotal = 56000;
    const MockUsersTotAfterTex = 48000;

    const userInput = ({inputOne, inputTwo}) => {

        const checkElement = screen.getByLabelText(/CheckBox/i);
        const inputPercElement = screen.getByTestId(/PercInput/i);
        
        if(inputOne){
            userEvent.type(inputPercElement, inputOne);
        }
        if(inputTwo){
            userEvent.type(inputPercElement, inputTwo);
        }

        return {
            inputPercElement,
            checkElement
        }
    }

    beforeEach(() => {
        console.log("Savings Functions Test")
        render(<SavingsSec totalIncome={MockUsersTotal} totAfterTax={MockUsersTotAfterTex}/>);
    })

    test('Make sure input is empty and checkbox is default', () => {
        const {inputPercElement, checkElement} = userInput({});

        userInput({})

        expect(inputPercElement.value).toBe("");
    })

    test('Check box Before checked and if value changes to after tax', () => {
        const {checkElement} = userInput({});

        const checkBox = screen.getByLabelText(/CheckBox/i);
        const Value = screen.getByTestId(/TotalToSave/i);

        expect(Value.textContent).toBe("R 56000");
    })

    test("Test calculation when checkbox checked", () =>{
    
        const {inputPercElement} = userInput({inputOne: "10"});

        const percCalBut = screen.getByTestId(/CalculatePerc/i);


        userEvent.click(percCalBut);

        const resultElement = screen.getByTestId(/Saved/i);

        expect(resultElement.textContent).toBe("R 5600")
    })

    test('Test if check box is checked and if value changes to Before Tax', () => {
        const {checkElement} = userInput({});

        const checkBox = screen.getByLabelText(/CheckBox/i);
        const Value = screen.getByTestId(/TotalToSave/i);

        userEvent.click(checkBox);

        expect(Value.textContent).toBe("R 8000");
    })

    test("Test calculation when checkbox checked", () =>{
    
        const {inputPercElement} = userInput({inputOne: "10"});

        const checkBox = screen.getByLabelText(/CheckBox/i);
        const percCalBut = screen.getByTestId(/CalculatePerc/i);

        userEvent.click(checkBox);

        userEvent.click(percCalBut);

        const resultElement = screen.getByTestId(/Saved/i);

        expect(resultElement.textContent).toBe("R 800")
    })

    it('If Savings renders correctly', () => {
        const component = renderer.create(<SavingsSec totalIncome={MockUsersTotal} totAfterTax={MockUsersTotAfterTex}/>).toJSON();
    
        expect(component).toMatchSnapshot();
    });
    
});