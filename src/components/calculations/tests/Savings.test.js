import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Savings from '../../Savings';


describe('Testing Savings Function', () => {

    beforeEach(() => {
        console.log('Saving Tests');
        render(<Savings />);
    })

    const percInput = ({Input}) => {

        const inputSavingsElement = screen.getByLabelText(/percentageVal/i);
        
        if(Input){
            userEvent.type(inputSavingsElement, Input)
        }

        return {
            inputSavingsElement
        }
    }


    test('make sure inputs are empty when component is rendered', () => {
            //1. Render component
            const {inputSavingsElement} = percInput({});

            percInput({});

            expect(inputSavingsElement.value).toBe("");
        })


    test('test if values are updated', () => {

            const {inputSavingsElement} = percInput({Input:"2"});
              
            expect(inputSavingsElement.value).toBe("2");

        })

    test("Check if percentage calculation works", () =>{
    
        //based on the temp income const created "40000"
            const {inputSavingsElement} = percInput({Input: "10"});
    
             //Query our button element 
             const goButton =  screen.getByRole("button", {name: /GO/i});

             //click the button 
             userEvent.click(goButton);
    
             //check if caclulation was success
    
             const resultElementM = screen.getByTestId("MonthlyDisp");
    
             //7 Chec if this result exists
             expect(resultElementM.textContent).toBe("R4000");
            //  expect(resultElement).toBeInTheDocument();
        })
    
    });