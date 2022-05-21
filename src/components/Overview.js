import Expenses from './ExpensesSec';
import TaxBrackets from './taxBrackets';
import Headsection from './HeadSection';


export default function overView() {

    return (
        <>
        <div className="HeadHeading">
        <br></br>
        <h1>Overview</h1>
        <br></br>
        </div>
        <Headsection />
        <TaxBrackets />
        <Expenses />
        </>
        
    )
}