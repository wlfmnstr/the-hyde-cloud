import React, { createContext, useReducer, useEffect } from 'react';

interface State {
    currentPage: string
    user: string
    token: string
    loggedIn: boolean
}

interface Action {
    type: string;
    payload?: any;
}

const GlobalStateContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | null>(null);

const initialState: State = {
    currentPage: "Start",
    user: "",
    token: "",
    loggedIn: false,
};

function globalStateReducer(state: State, action: Action): State {
    return {
        ...state
    }
}
type GlobalStateProviderParams = {
    children: React.ReactNode;
}

const GlobalStateProvider = ( {children}: GlobalStateProviderParams ) => {
    const [state, dispatch] = useReducer(globalStateReducer, initialState);

    useEffect(() => {
        // Load state from localStorage when the component mounts
        const storedState = localStorage.getItem('globalState');
        if (storedState) {
            dispatch({ type: 'LOAD_FROM_LOCAL_STORAGE', payload: JSON.parse(storedState) });
        }
    }, []);

    useEffect(() => {
        // Persist state to localStorage whenever it changes
        localStorage.setItem('globalState', JSON.stringify(state));
    }, [state]);

    return (
        <GlobalStateContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalStateContext.Provider>
    );
}

export { GlobalStateContext, GlobalStateProvider };