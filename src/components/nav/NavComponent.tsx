import React from "react";
import {navStyles} from "../../styles/styles";
import {LOGO_SWITCH, NAV_SWITCH} from "./NavConfig";
import {Logo} from "./Logo";
import {NavItemsList} from "./NavItemsList";

export function NavComponent({currentPage, changePage}: { currentPage: string, changePage: (page: string) => void }) {
    const handleClick = (destination: string) => {
        changePage(destination);
    }

    return (
        <nav>
            <div className={navStyles.wrapperDiv}>
                {LOGO_SWITCH[currentPage.toLowerCase()]
                    && <Logo/>}
                {NAV_SWITCH[currentPage.toLowerCase()]
                    && <NavItemsList currentPage={currentPage} clickHandler={handleClick}/>}
            </div>
        </nav>
    )
}