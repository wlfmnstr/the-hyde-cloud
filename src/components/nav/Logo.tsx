import {navStyles} from "../../styles/styles";
import React from "react";

export function Logo() {
    return <div className={navStyles.logoDiv}>
        <a href="/" className={navStyles.logoLink}>The Hyde Cloud</a>
    </div>;
}