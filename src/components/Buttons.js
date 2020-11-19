import react from 'react';

import "./Button.css";

function Button(props, onButtonClick ,type) {
    return (
       <div className={`button ${props.content === "0" ? "zero" : ""} ${props.type ||
       ""}`}
        onClick={props.onButtonClick(props.content)}
        >
       {props.content}
       </div>
    );
};
export default Button;  