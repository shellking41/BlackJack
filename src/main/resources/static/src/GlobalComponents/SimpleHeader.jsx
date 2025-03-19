import React from "react";

function SimpleHeader({tag: Tag = "h1", className = "", text = "I am a header"}) {
    return <Tag className={`${className}`}>{text}</Tag>;
}

export default SimpleHeader;