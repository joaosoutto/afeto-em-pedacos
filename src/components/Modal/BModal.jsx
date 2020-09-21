import React, { useState } from 'react';
import './Modal.css'
import Modal from 'react-modal';

const BModal = () => {

  const [modal, setModal] = useState(true)

  return (
    <Modal isOpen={modal} className="modal">
        <h1>Tete</h1>
        <button onClick={() => setModal(false)}>close</button>
    </Modal>

  );
};

export default BModal;
