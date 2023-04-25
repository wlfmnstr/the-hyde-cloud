import React from "react";
import {Hero} from "./Hero";
import {getContent} from "./MainContent";
import {TextComponent} from "./TextComponent";

export function Content({changePage, currentPage}: {
    currentPage: string,
    changePage: (page: string) => void
}) {
    const pageContent = getContent(currentPage);
    return (
        <>
            {Object.entries(pageContent).map(([key, value]) => {
                switch (key) {
                    case "hero" || "Hero":
                        return <Hero content={value} currentPage={currentPage} clickHandler={changePage}/>;
                    case "text" || "Text":
                        return <TextComponent content={value} currentPage={currentPage} clickHandler={changePage}/>;
                    default:
                        return <></>;
                }
            })
            }
        </>
    )
    // return Object.entries(content).flatMap(([key, value]) => {
    //     switch (key) {
    //         case "hero" || "Hero":
    //             return <Hero content={value} currentPage={currentPage} clickHandler={changePage}/>;
    //         default:
    //             return <></>;
    //     }
    // })
}