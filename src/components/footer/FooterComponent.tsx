import React from "react";

export function FooterComponent({currentPage, changePage}: { currentPage: string, changePage: (page: string) => void}) {
    return <footer className="tw-shadow-inner tw-p-5">
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
    </footer>;
}