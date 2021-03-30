import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import Transaction from './transaction/Transaction';
import './TransactionList.scss';

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <div className="transaction-list">
            <h4 className="border-bottom pb-2">Transaction</h4>
            {transactions.length ? (
                transactions.map((transaction) => (
                    <div
                        className={transaction.amount > 0 ? 'card plus' : 'card minus'}
                        key={transaction.id}
                    >
                        <Transaction transaction={transaction} />
                    </div>
                ))
            ) : (
                <p className="text-secondary small">No transactions available!</p>
            )}
        </div>
    );
};

export default TransactionList;
