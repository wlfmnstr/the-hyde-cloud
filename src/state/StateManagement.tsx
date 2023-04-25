import React, {Component} from "react";

export type GlobalState = {
    currentPage: string
    user: string
    token: string
    loggedIn: boolean,
    [key: string]: string | boolean | number | object | null
}

export default class StateManagement {

    defaultState = {
        currentPage: "Start",
        user: "",
        token: "",
        loggedIn: false,
    }

    getGlobalState(): GlobalState {
        let state = localStorage.getItem("globalState");
        return state
            ? JSON.parse(state)
            : this.defaultState;
    }

    setGlobalState(state: GlobalState) {
        localStorage.setItem("globalState", JSON.stringify(state));
    }


}
