import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SumForm from '../SumForm';


describe('Testing form interaction', () => {
    //example of rendering component in virtual space
    test('make sure inputs are empty when component is rendered', () => {
        //1. Render component
        render(<SumForm />)

        //2. Query our elements
        const inputNumberOneElement = screen.getByLabelText(/numberOne/i);
        const inputNumberTwoElement = screen.getByLabelText(/numberOne/i);          
        // const inputNumberOneElement = screen.getByLabelText('numberOne');

        //3. Take Element created and check with assertion function
        expect(inputNumberOneElement.value).toBe('');
        expect(inputNumberTwoElement.value).toBe('');




    })

        //4. to see if they update
        test('test if values are updated correctly', () => {
            render(<SumForm />)

            //2. Query our elements
            const inputNumberOneElement = screen.getByLabelText(/numberOne/i);
            const inputNumberTwoElement = screen.getByLabelText(/numberTwo/i);
            
            //3. Call the user Events to interact with our components
            userEvent.type(inputNumberOneElement, "2");
            userEvent.type(inputNumberTwoElement, "4");

            //4. check if it behaved as expected
            expect(inputNumberOneElement.value).toBe("2");
            expect(inputNumberTwoElement.value).toBe("4");

        })

        test("Check if our button calculation works", () =>{
            render(<SumForm/>);
    
            //Query these elements;
            let inputOneElement = screen.getByLabelText( /numberOne/i);
            let inputTwoElement = screen.getByLabelText( /numberTwo/i);
    
             //Check if it behaved expected;
             userEvent.type(inputOneElement, "2");
             userEvent.type(inputTwoElement, "4"); 
    
             //Query our button element 
             const calculateButton =  screen.getByRole("button", {name: /submit/i});
    
             //click the button 
             userEvent.click(calculateButton);
    
             //check if caclulation was success
    
             const resultElement = screen.getByText("The Sum is:", {exact: false} );
    
             //7 Chec if this result exists
             expect(resultElement.textContent).toBe("The Sum is: 6")
             expect(resultElement).toBeInTheDocument();
        })
    
    });