import React from "react"
import cl from "./MyModal.module.css";


export default function MyModal({ children, isOpen, close }) {
    const rootClasses = [cl.modal];
  
    if (isOpen) {
      rootClasses.push(cl.modal__open);
    }
  
    return (
      <div className={rootClasses.join(" ")}>
        <div className={cl.modal__overlay} onClick={close}></div>
  
        <div
          className={cl.modal__content}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    );
  }