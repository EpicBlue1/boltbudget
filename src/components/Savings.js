import Headsection from './HeadSection';

export default function AverageFormatter() {

    return (
        <div className="left">
            <div className="HeadHeading">
                <br></br>
                <h1>Savings</h1>
                <br></br>
            </div>

        <Headsection />

            {/* //right section */}
            <div className='SectionFour'>
            <h1>Set up goals</h1>
            <br></br>
            <div className='subSectionInfo'>
            <h4>Total after goals</h4>
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
            <button className='addBut'></button>
            </div>

            {/* //left section */}
            <div className='SectionFourL'>
            <h1>Calculate Percentage to save</h1>
            <br></br>
                <div className='toggleSection'>
                    <h2 className='inline headingTwo'>After Expenses</h2>
                    <div className='inline parent'>
                        <div className='switchParent'>
                            <label class="switch">
                            <input type="checkbox"/>
                            <span class="slider"></span>
                            </label>
                        </div>
                    </div>
                </div>
            
            <select className='dropDown inline'>
                <option>All Incomes</option>
                <option>James</option>
            </select>
            <div className='inline'><h4>(R15)</h4></div>

            <br></br>
            <br></br>

            <div className='subSectionInfoThree'>
            <h2>Percentage:</h2>
            <input placeholder="%" className='dropDown floatLeft'/>
            <div className='percentageBlock inline'>
                <h2>=</h2>
                <div className='dropDown inline'></div>
                <h3>Monthly savings</h3>
                <br></br>
                <div className='dropDown inline'></div>
                <h3>Yearly savings</h3>
            </div>
            </div>
        </div>
        </div>
        
    )
}