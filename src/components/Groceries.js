import Headsection from './HeadSection';

export default function AverageFormatter() {

    return (
        <>
            <div className="HeadHeadingGroc">
                <br></br>
                <h1>Groceries</h1>
                <hr></hr>
            </div>

            {/* //right section */}
            <div className='SectionFive'>
            <h1>Frequently bought groceries</h1>
            <br></br>
            <div className='subSectionInfo'>
            <h3>Total:</h3>
            <div className='dropDown'><h4>R3216</h4></div>
            </div>
            <table>
                <tr>
                    <th className='tableFour Align_Left'><h4>Goal</h4></th>
                    <th className='tableFour Align_Left'><h4>Date</h4></th>
                    <th className='tableFour Align_Left'><h4>Price</h4></th>
                    <th className='tableFour Align_Left'><h4>Price</h4></th>
                </tr>
            </table>
            <div className='maxHeight overflow'>
            <table>
                <tr>
                    <td className='tableFour Align_Left'><h4>Expenses</h4></td>
                    <td className='tableFour Align_Left'><h4>Expenses</h4></td>
                    <td className='tableFour Align_Left'><h4>Expenses</h4></td>
                    <td className='tableFour Align_Left'><h4>Expenses</h4></td>
                </tr>
            </table>
            </div>
            <button className='Butt'><h3>Download as grocery list</h3></button>
            <button className='Butt'><h3>Scan in receipt</h3></button>
        </div>
        </>
        
    )
}