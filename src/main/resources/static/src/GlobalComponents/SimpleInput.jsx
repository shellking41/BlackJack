import React from 'react';

function SimpleInput({placeholder = "placeholder", type = "text", classname = "", onChange, name}) {
    return (
        <input
            className={classname}
            type={type}
            placeholder={placeholder}
            name={name}
            onChange={onChange}
        />
    );
}

export default SimpleInput;