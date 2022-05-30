import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import IncomeAndExpense from '../IncomeAndExpenses';


describe('Testing form interaction', () => {

    //add jest hook that executes before each test runs
    beforeEach(() => {
        console.log('Test Starting');
        render(<IncomeAndExpense />);
    })

    const typeInput = ({inputOne, inputTwo}) => {
        //2. Query our elements
        const inputNumberOneElement = screen.getByLabelText(/numberOne/i);
        const inputNumberTwoElement = screen.getByLabelText(/numberTwo/i);  
        
        if(inputOne){
            userEvent.type(inputNumberOneElement, inputOne)
        }
        if(inputTwo){
            userEvent.type(inputNumberTwoElement, inputTwo)
        }
        return {
            inputNumberOneElement,
            inputNumberTwoElement
        }
    }


        //example of rendering component in virtual space
        test('make sure inputs are empty when component is rendered', () => {
            //1. Render component
            const {inputNumberOneElement, inputNumberTwoElement} = typeInput({});


            //2. Query our elements
            // const inputNumberOneElement = screen.getByLabelText(/numberOne/i);
            // const inputNumberTwoElement = screen.getByLabelText(/numberOne/i);          
            // const inputNumberOneElement = screen.getByLabelText('numberOne');
            typeInput({});

            //3. Take Element created and check with assertion function
            expect(inputNumberOneElement.value).toBe('');
            expect(inputNumberTwoElement.value).toBe('');
        })

        //4. to see if they update
        test('test if values are updated correctly', () => {

            //2. Query our elements
            // const inputNumberOneElement = screen.getByLabelText(/numberOne/i);
            // const inputNumberTwoElement = screen.getByLabelText(/numberTwo/i);
            const {inputNumberOneElement, inputNumberTwoElement} = typeInput({inputOne: "2", inputTwo: "4"});
            
            //3. Call the user Events to interact with our components
            // userEvent.type(inputNumberOneElement, "2");
            // userEvent.type(inputNumberTwoElement, "4");

            //4. check if it behaved as expected    
            expect(inputNumberOneElement.value).toBe("2");
            expect(inputNumberTwoElement.value).toBe("4");

        })

        test("Check if our button calculation works", () =>{
    
            //Query these elements;
            // let inputOneElement = screen.getByLabelText( /numberOne/i);
            // let inputTwoElement = screen.getByLabelText( /numberTwo/i);
            const {inputNumberOneElement, inputNumberTwoElement} = typeInput({inputOne: "2", inputTwo: "4"});
    
             //Query our button element 
             const calculateButton =  screen.getByRole("button", {name: /submit/i});
    
             //click the button 
             userEvent.click(calculateButton);
    
             //check if caclulation was success
    
             const resultElement = screen.getByText("The Sum is:", {exact: false} );
    
             //7 Chec if this result exists
             expect(resultElement.textContent).toBe("The Sum is: 6")
            //  expect(resultElement).toBeInTheDocument();
        })
    
    });