import { css } from '@emotion/react';
import { useContext, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { GlobalContext } from '../../context/GlobalState';
import ToastMessage from '../ToastMessage';
import './AddTransaction.scss';

const AddTransaction = () => {
    const [transaction, setTransaction] = useState({
        text: '',
        amount: null,
    });

    const [loading, setLoading] = useState(false);

    const [isTextEmpty, setIsTextEmpty] = useState(false);

    const [isAmountEmpty, setIsAmountEmpty] = useState(false);

    const { addTransaction } = useContext(GlobalContext);

    const override = css`
        margin-left: 5px;
        vertical-align: sub;
    `;

    const handleInput = (e) => {
        const { name, value } = e.target;
        setTransaction({ ...transaction, [name]: value });
    };

    const handleError = (e) => {
        const { name, value } = e.target;

        if (name === 'text' && !value) {
            setIsTextEmpty(true);
        } else {
            setIsTextEmpty(false);
        }

        if (name === 'amount' && !value) {
            setIsAmountEmpty(true);
        } else {
            setIsAmountEmpty(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (transaction.text !== '' && transaction.amount !== null) {
            const newTransaction = {
                id: Math.floor(Math.random() * 100000000),
                text: transaction.text,
                amount: +transaction.amount,
            };
            addTransaction(newTransaction);
            setLoading(true);
            ToastMessage('success', 'Transaction Added Successfully!');
        } else {
            if (transaction.text === '') {
                setIsTextEmpty(true);
            }
            if (transaction.amount === null) {
                setIsAmountEmpty(true);
            }
            setLoading(true);
            ToastMessage('error', 'Transaction Added Failed!');
        }
        setTransaction({
            text: '',
            amount: null,
        });
        e.target.reset();
    };

    setTimeout(() => {
        setLoading(false);
    }, 5000);

    return (
        <div className="add-transaction">
            <h4 className="border-bottom pb-2">Add New Transaction</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="text" className="form-label">
                        Text
                    </label>
                    <input
                        type="text"
                        name="text"
                        onChange={handleInput}
                        onBlur={handleError}
                        className="form-control"
                        placeholder="Enter Text..."
                    />
                    {isTextEmpty ? (
                        <span className="small text-danger">Text field is required</span>
                    ) : (
                        ''
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="amount" className="form-label">
                        Amount
                    </label>
                    <input
                        type="number"
                        name="amount"
                        onChange={handleInput}
                        onBlur={handleError}
                        className="form-control"
                        placeholder="Enter Amount..."
                    />
                    {isAmountEmpty ? (
                        <span className="small text-danger">Amount field is required</span>
                    ) : (
                        ''
                    )}
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-submit" value="Submit">
                        Submit{' '}
                        <ClipLoader loading={loading} color="white" size={20} css={override} />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTransaction;
