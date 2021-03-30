import { useContext } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { GlobalContext } from '../../../context/GlobalState';

const Transaction = ({ transaction }) => {
    const sign = transaction.amount > 0 ? '+' : '-';

    const { deleteTransaction } = useContext(GlobalContext);

    return (
        <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
                <button
                    type="button"
                    onClick={() => deleteTransaction(transaction.id)}
                    className="btn btn-delete pl-0 py-0"
                >
                    <FaRegTrashAlt className="trash text-danger" />
                </button>
                <p className="mb-0">{transaction.text}</p>
            </div>
            <p className="mb-0">
                {sign} {Math.abs(transaction.amount)} Tk.
            </p>
        </div>
    );
};

export default Transaction;
