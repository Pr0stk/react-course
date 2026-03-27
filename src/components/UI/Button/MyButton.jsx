import React from 'react';
import cl from './MyButton.module.css';

const MyButton = ({ children, className = '', ...props }) => {
    return (
        <button
            {...props}
            className={[cl.btn, className].join(' ')}
        >
            {children}
        </button>
    );
};

export default MyButton;