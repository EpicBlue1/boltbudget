import Expenses from './ExpensesSec';
import TaxBrackets from './taxBrackets';
import Headsection from './HeadSection';


export default function overView(props) {

    return (
        <>
        <div className="HeadHeading">
        <br></br>
        <h1>Overview</h1>
        <br></br>
        </div>
        <Headsection userData={props.userData} expenses = {props.expenses}/>
        <div className='SectionOne'>
        <div className='subSections'>
            <h4>Lorem ipsum dolor sit amet. Sed rerum repudiandae id iste sapiente cum voluptatem iure in ipsum voluptatem est consequatur quia quo dicta doloremque est nesciunt laboriosam.</h4>
        </div>
        <hr></hr>
        </div>
        <TaxBrackets />
        <Expenses />
        </>
        
    )
}