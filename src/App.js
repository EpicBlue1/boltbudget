import Link from './components/Link';
import Headsection from './components/HeadSection';
import ExpensesSection from './components/ExpensesSec';
import Recurring from './components/recurring';

function App() {
  return (
    <div className="App">
      <Headsection />
      <Recurring />
      <ExpensesSection />
    </div>
  );
}

export default App;
