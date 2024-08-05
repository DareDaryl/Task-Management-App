import React from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>  {/*Closes modal */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}> 
        {/*(e) => e.stopPropagation() is an arrow function that takes the event object e as its 
        argument and calls e.stopPropagation().method of the event object. prevents the event from 
        bubbling up to parent elements. ensures that clicks inside this content area do not trigger the
        onClose function, thus preventing the modal from closing when interacting with the content. */}
        <button className="modal-close" onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  );
}
export default Modal;




















/*import React from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;*/
