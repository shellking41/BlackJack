import React from 'react';

function SimpleButton({type = "button", onclick, text = "click me", isLoading = false, classname = ""}) {
    return (
        <button type={type} onClick={onclick} className={classname}>
            {isLoading ? 'loading...' : text}
        </button>
    );
}

export default SimpleButton;