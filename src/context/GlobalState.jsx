import { createContext, useReducer } from 'react';
import ToastMessage from '../components/ToastMessage';
import AppReducer from './AppReducer';

const initialState = {
    transactions: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const deleteTransaction = (id) => {
        if (window.confirm('Are you sure?')) {
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id,
            });
            ToastMessage('success', 'Transaction Deleted Successfully!');
        }
    };
    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction,
        });
    };
    return (
        <GlobalContext.Provider
            value={{ transactions: state.transactions, deleteTransaction, addTransaction }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
