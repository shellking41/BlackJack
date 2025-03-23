import React from 'react';

function SimpleInput({placeholder = "placeholder", type = "text", classname = "", onChange, name, reference}) {
    return (
        <input
            className={classname}
            type={type}
            placeholder={placeholder}
            name={name}
            onChange={onChange}
            ref={reference}
        />
    );
}

export default SimpleInput;