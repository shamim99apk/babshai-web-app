import React, { createContext, useContext, useReducer } from 'react';

import { reducer } from "../reducers";

const initialState = {
    todoList: [],
};

 const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
  }
  
  export { AppContext, AppProvider }