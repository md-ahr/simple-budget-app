import { useContext, useState } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { GlobalContext } from '../../context/GlobalState';
import './Balance.scss';

const Balance = () => {
    const [loading, setLoading] = useState(true);

    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map((transaction) => transaction.amount);

    const netBalance = amounts.reduce((acc, amount) => acc + amount, 0);

    setTimeout(() => {
        setLoading(false);
    }, 3000);

    return (
        <div className="balance text-center">
            <h5>Your balance</h5>
            {loading ? (
                <BeatLoader size={12} margin={4} />
            ) : (
                <h3 className={netBalance > 0 ? 'text-success' : 'text-danger'}>
                    Tk. {netBalance}
                </h3>
            )}
        </div>
    );
};

export default Balance;
