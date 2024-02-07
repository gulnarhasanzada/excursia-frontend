import React from "react"
import Modal from "./Modal";
import useRentModal from "../../hooks/useRentModal";
import ReactDOM from "react-dom";

interface RentModalProps {

}

const RentModal = () => {
  const rentModal = useRentModal(); 
  return  ReactDOM.createPortal(
    <Modal isOpen={rentModal.isOpen}
           onClose={rentModal.onClose}
           onSubmit={rentModal.onClose}
           actionLabel="Submit"
           title="Rent your home!"
           />, document.getElementById('portal-root') as Element);
    
  
};

export default RentModal;
