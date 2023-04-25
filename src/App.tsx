import React, {useState} from 'react';
import 'tailwindcss/tailwind.css';
import {NavComponent} from "./components/nav/NavComponent";
import {MainComponent} from "./components/main/MainComponent";
import {FooterComponent} from "./components/footer/FooterComponent";

function App() {
    const [currentPage, setCurrentPage] = useState('Start');
    let changePage = (page: string) => {
        setCurrentPage(page);
    };

    return (
        <div className="tw-flex tw-flex-col tw-min-h-screen tw-bg-gray-100">
            <NavComponent currentPage={currentPage} changePage={changePage}/>
            <MainComponent currentPage={currentPage} changePage={changePage}/>
            <FooterComponent currentPage={currentPage} changePage={changePage}/>
        </div>
    );

}

export default App;