import React from 'react';
import {emptyFunc} from "../../utils/helper";

const Button = ({
    className,
    value,
    onClick = emptyFunc,
    disable = false
}) => {
    return (
        <button
            className={className}
            type="button"
            onClick={onClick}
            disabled={disable}
        >{value}
        </button>
    );
};

export default Button;
