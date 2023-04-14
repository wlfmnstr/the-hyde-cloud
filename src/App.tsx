import React, {useState} from 'react';
import 'tailwindcss/tailwind.css';

function App() {
    const [currentPage, setCurrentPage] = useState({name: 'Start'});
    const liStyles = 'tw-inline-flex tw-py-2 tw-px-4 tw-text-gray-800 tw-hover:text-gray-700 tw-cursor-pointer';
    const page =
        <div className="tw-flex tw-flex-col tw-min-h-screen tw-bg-gray-100">
            <nav>
                <div
                    className="tw-container tw-mx-auto tw-py-6 tw-shadow-inner tw-flex tw-justify-between tw-items-center">
                    <div className="tw-font-semibold tw-text-2xl">
                        <a href="/" className="tw-text-gray-800 tw-uppercase tw-hover:text-gray-700">The Hyde Cloud</a>
                    </div>
                    <ul className="tw-flex tw-space-x-4 tw-text-lg tw-font-medium">
                        <li className={liStyles} onClick={() => handlePageChange({page: "Home"})}>
                            Home
                        </li>
                        <li className={liStyles} onClick={() => handlePageChange({page: "Profile"})}>
                            Profile
                        </li>
                        <li className={liStyles} onClick={() => handlePageChange({page: "Lists"})}>
                            Lists
                        </li>
                        <li className={liStyles} onClick={() => handlePageChange({page: "Messages"})}>
                            Messages
                        </li>
                        <li className={liStyles} onClick={() => handlePageChange({page: "Photos"})}>
                            Photos
                        </li>
                        <li className={liStyles} onClick={() => handlePageChange({page: "Files"})}>
                            Files
                        </li>
                        <li className={liStyles} onClick={() => handlePageChange({page: "AI"})}>
                            AI
                        </li>
                    </ul>
                </div>
            </nav>
            <main
                className="tw-flex tw-justify-center tw-items-center tw-flex-grow tw-container tw-mx-auto tw-px-6 tw-py-10 tw-bg-gray-100">
                <div className="tw-text-center">
                    <h1 className="tw-text-5xl tw-font-bold tw-text-gray-800 tw-my-4">The Hyde Cloud</h1>
                    <h2 className="tw-text-3xl tw-font-medium tw-text-gray-800 tw-mb-8">{currentPage.name}</h2>
                    {/* Add your main content here */}
                </div>
            </main>
            <footer className="tw-shadow-inner tw-p-5">
                <div className="tw-container tw-mx-auto tw-px-6 tw-flex tw-justify-between tw-items-center">
                    <div className="tw-flex tw-space-x-4 tw-text-lg tw-font-medium">
                        <span className="tw-text-gray-800 tw-uppercase tw-font-semibold">Crazy</span>
                        <span className="tw-text-gray-800 tw-uppercase">Random</span>
                        <span className="tw-text-gray-800 tw-uppercase">Footer</span>
                        <span className="tw-text-gray-800 tw-uppercase">Design</span>
                        <span className="tw-text-gray-800 tw-uppercase">2023</span>
                    </div>
                    <div className="tw-font-semibold tw-text-2xl">
                        <a href="/" className="tw-text-gray-800 tw-uppercase tw-hover:text-gray-700">ThE hYdE cLoUd</a>
                    </div>
                </div>
            </footer>
        </div>;

    let handlePageChange = ({page}: { page: any }) => {
        setCurrentPage({name: page});
    };

    return (currentPage.name === "Start")
        ? <div
            className="tw-flex tw-justify-center tw-items-center tw-h-screen tw-w-screen
            tw-bg-gray-100">
            <div className="tw-text-center">
                <h1 className="tw-text-5xl tw-font-bold tw-text-gray-800 tw-my-4">The Hyde Cloud</h1>
                <h2 className="tw-text-3xl tw-font-medium tw-text-gray-800" onClick={() => handlePageChange({page: "Home"})}>Start Here</h2>
            </div>
        </div>
        : page
}

export default App;