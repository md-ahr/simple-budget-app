import { useContext, useState } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { GlobalContext } from '../../context/GlobalState';
import './IncomeExpense.scss';

const IncomeExpense = () => {
    const [loading, setLoading] = useState(true);

    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map((transaction) => transaction.amount);

    const totalIncome = amounts
        .filter((amount) => amount > 0)
        .reduce((acc, amount) => acc + amount, 0);

    const totalExpense =
        amounts.filter((amount) => amount < 0).reduce((acc, amount) => acc + amount, 0) * -1;

    setTimeout(() => {
        setLoading(false);
    }, 3000);

    return (
        <div className="income-expense card">
            <div className="d-flex justify-content-around align-items-center">
                <div className="total-summaamountsry">
                    <p className="mb-0">Income</p>
                    {loading ? (
                        <ScaleLoader height={20} color="green" />
                    ) : (
                        <p className="text-success mt-2 mb-0">Tk. {totalIncome}</p>
                    )}
                </div>
                <div className="divider">|</div>
                <div className="total-summary">
                    <p className="mb-0">Expense</p>
                    {loading ? (
                        <ScaleLoader height={20} color="red" />
                    ) : (
                        <p className="text-danger mt-2 mb-0">Tk. {totalExpense}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default IncomeExpense;
