import AddTransaction from './components/add-transaction/AddTransaction';
import Balance from './components/balance/Balance';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import IncomeExpense from './components/income-expense/IncomeExpense';
import TransactionList from './components/transaction-list/TransactionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
    return (
        <GlobalProvider>
            <Header />
            <div className="w-50 mx-auto">
                <Balance />
                <IncomeExpense />
                <TransactionList />
                <AddTransaction />
            </div>
            <Footer />
        </GlobalProvider>
    );
}

export default App;
