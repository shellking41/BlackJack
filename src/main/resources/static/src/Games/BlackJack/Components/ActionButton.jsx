import {useContext, useEffect, useState} from "react";

import style from "../Components/ComponentStyles/ActionButton.module.css";


function ActionButton({Text}) {


    return (
        <button className={style.ActionButton}>
            {Text}
        </button>
    );
}

export default ActionButton;