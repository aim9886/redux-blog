import React from 'react';
import './textArea.css';

const TextArea = ({label, ...rest }) => {
    return (
        <div className="text-area-wrapper">
            <p className="label">{label}</p>
            <textarea className="text-area" {...rest}>
            </textarea>
        </div>
    )
}

export default TextArea;