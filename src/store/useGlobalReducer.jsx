import React, { useContext, useReducer, createContext } from "react";
import storeReducer, { initialStore } from "./index";

const StoreContext = createContext();

export function StoreProvider({ children }) {
    const [store, dispatch] = useReducer(storeReducer, initialStore());
    
    return (
        <StoreContext.Provider value={{ store, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
}

export default function useGlobalReducer() {
    const context = useContext(StoreContext);
    
    if (!context) {
        throw new Error('useGlobalReducer debe usarse dentro de StoreProvider');
    }
    
    const { dispatch, store } = context;
    return { dispatch, store };
}