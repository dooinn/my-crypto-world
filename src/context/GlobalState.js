import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer'

const initialState = {
    mylist: localStorage.getItem("mylist")
        ? JSON.parse(localStorage.getItem("mylist"))
        : [],
};


export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem("mylist", JSON.stringify(state.mylist));
    }, [state])


    const addCoinToMylist = (coin) => {
        dispatch({ type: "ADD_COIN_TO_MYLIST", payload: coin });
    };

    const removeCoinFromMylist = (id) => {
        dispatch({ type: "REMOVE_COIN_FROM_MYLIST", payload: id });
    };

    return (
        <GlobalContext.Provider
            value={{
                mylist: state.mylist,
                addCoinToMylist,
                removeCoinFromMylist
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}