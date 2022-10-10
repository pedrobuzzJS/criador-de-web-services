import React, { useState, useCallback, Children } from "react";
import ReactModal from "react-modal";

interface Modal {
    isModalOpen: boolean;
};

export const Modal: React.FC<Modal> = ({ isModalOpen }) => {
    const [ modalOpen, setModalOpen ] = useState(isModalOpen);
    const changeModalOpenState = useCallback( () => {
        setModalOpen(!modalOpen);
    }, [] );

    return (
        <ReactModal
            isOpen={modalOpen}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
        </ReactModal>
    );
};