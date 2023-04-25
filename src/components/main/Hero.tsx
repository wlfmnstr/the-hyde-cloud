import React, { FC } from "react";
import {mainStyles} from "../../styles/styles";
import {HeroContent} from "./MainContent"; // Assuming you have a mainStyles file

interface HeroProps {
    content: HeroContent;
    currentPage: string;
    clickHandler: (page: string) => void;
}

export function Hero({content, currentPage, clickHandler}: HeroProps) {
    const {subtitle, subtitleLinkDestination, title} = content;

    const titleHTML = title && <h1 className={mainStyles.h1}>{title}</h1>;

    const subtitleLinkHTML =
        subtitleLinkDestination && (
            <a
                className={mainStyles.a}
                onClick={() => clickHandler(subtitleLinkDestination)}
            >
                {subtitle}
            </a>
        );

    const subtitleHTML = subtitle && (
        <h2 className={mainStyles.h2}>{subtitleLinkHTML ?? subtitle}</h2>
    );

    return (
        <div className={mainStyles.wrapperDiv}>
            {titleHTML}
            {subtitleHTML}
        </div>
    );
}
