import {navStyles} from "../../styles/styles";
import {getNavItems} from "./NavConfig";
import React from "react";

export function NavItemsList(props: { currentPage: string, clickHandler: (page: string) => void }) {
    return <ul className={navStyles.ul}>
        {
            getNavItems(props.currentPage).map((item, index) => {
                return <li key={index} className={navStyles.li}>
                    <a onClick={() => props.clickHandler(item.destination)}>{item.name}</a>
                </li>
            })
        }
    </ul>;
}