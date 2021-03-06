import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

//Initial State with dummy transactions
const initialState = {
    transactions: [
        { id: 1, text: 'Groceries', amount: -20},
        { id: 2, text: 'Income', amount: 400},
        { id: 3, text: 'Book', amount: -10},
        { id: 4, text: 'Table sold', amount: 175}
    ]
}

// Create context
export const GlobalContext = createContext(initialState)

//Provider Component 
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    //changing the states
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}