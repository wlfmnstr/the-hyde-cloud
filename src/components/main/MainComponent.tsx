import React from "react";
import {mainStyles} from "../../styles/styles";
import {getContent} from "./MainContent";
import {Content} from "./Content";

export function MainComponent({currentPage, changePage}: { currentPage: string, changePage: (page: string) => void }) {
    return (
        <main className={mainStyles.main}>
            <Content currentPage={currentPage} changePage={changePage} />
        </main>
    )
}