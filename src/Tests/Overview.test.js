import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Overview from '../components/Overview';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

describe('Testing Overview functions excluding savings section', () => {

    const MockUserTaxes = [{name: "Johnny Bravo", salary: 67000, salaryAfterTax: 52330.166666666664, taxB: "170 734 + 39% of taxable income above 641 400"},
                        {name: "Susan Golden", salary: 20000, salaryAfterTax: 14159.5, taxB: "40 680 + 26% of taxable income above 226 000"}]

    const MockUserExpenses = [{prod_name: 'Dairy Milk 1L', cost: 19.99}, {prod_name: 'Dairy Milk 1L', cost: 19.99}]

    const Before = ([
        {name: 'Johan Golden', salary: 67000}, 
        {name: 'Susan Golden', salary: 20000}
    ])

    const userInput = ({inputOne, inputTwo, inputThree, inputFour, inputFive}) => {

        const inputFnameElement = screen.getByTestId(/Fname/i);
        const inputLnameElement = screen.getByTestId(/Lname/i);
        const inputIncomeElement = screen.getByTestId(/Income/i); 

        //expenses section
        const inputProductElement = screen.getByTestId(/ProductName/i);
        const inputCostElement = screen.getByTestId(/ProCost/i); 
        
        if(inputOne){
            userEvent.type(inputFnameElement, inputOne)
        }
        if(inputTwo){
            userEvent.type(inputLnameElement, inputTwo)
        }
        if(inputThree){
            userEvent.type(inputIncomeElement, inputThree)
        }
    //expenses section
        if(inputFour){
            userEvent.type(inputProductElement, inputFour)
        }
        if(inputFive){
            userEvent.type(inputCostElement, inputFive)
        }
        return {
            inputFnameElement,
            inputLnameElement,
            inputIncomeElement,
            inputCostElement,
            inputProductElement
        }
    }

    beforeEach(() => {
        console.log("Overview Functions Test")
        render(<Overview totTaxes={MockUserTaxes} UsersBef={Before} expenses={MockUserExpenses} />);
    })

    test('make sure add User section inputs are empty when component is rendered', () => {
        const {inputFnameElement, inputLnameElement, inputIncomeElement} = userInput({});

        userInput({})

        expect(inputFnameElement.value).toBe("");
        expect(inputLnameElement.value).toBe("");
        expect(inputIncomeElement.value).toBe("");
    })

    test('make sure add Expense section inputs are empty when component is rendered', () => {
        const {inputProductElement, inputCostElement} = userInput({});

        userInput({})

        expect(inputProductElement.value).toBe("");
        expect(inputCostElement.value).toBe("");
    })

    test("Test if mock array users (2) and data Object Array is added to dom", () =>{
        //users
        const resultElementOne = screen.getByText("Johnny", {exact: false});
        expect(resultElementOne.textContent).toBe("Johnny Bravo")

        const resultElementTwo = screen.getByText("Susan", {exact: false});
        expect(resultElementTwo.textContent).toBe("Susan Golden")

        //taxBrackets
        const TaxBracketOne = screen.getByText("170 734", {exact: false});
        expect(TaxBracketOne.textContent).toBe("170 734 + 39% of taxable income above 641 400")
        
        const TaxBracketTwo = screen.getByText("40 680", {exact: false});
        expect(TaxBracketTwo.textContent).toBe("40 680 + 26% of taxable income above 226 000")
    })

    //Expenses
    test("Test if mock array users (2) and data Object Array is added to dom", () =>{
        //Expenses
        const resultElementOne = screen.getByText("Dairy", {exact: false});
        expect(resultElementOne.textContent).toBe("Dairy Milk 1L")

        const resultElementTwo = screen.getByText("Albany", {exact: false});
        expect(resultElementTwo.textContent).toBe("Albany White Bread")

        //Price
        const TaxBracketOne = screen.getByText("R19.99", {exact: false});
        expect(TaxBracketOne.textContent).toBe("R19.99")
        
        const TaxBracketTwo = screen.getByText("R14.99", {exact: false});
        expect(TaxBracketTwo.textContent).toBe("R14.99")
    })

    it('If overview excluding savings renders correctly', () => {
        const component = renderer.create(<Overview totTaxes={MockUserTaxes} UsersBef={Before} expenses={MockUserExpenses}/>).toJSON();
    
        expect(component).toMatchSnapshot();
    });
});