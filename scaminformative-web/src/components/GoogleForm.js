import React, { useState,useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../components/GoogleForm.css';
import "../components/Home.css";
import "../components/Fonts.css";
function Modal1() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 


  return (
    <>
    <div>
    <button className="btn btn-default roboto-bold mr-2 " 
     style={{ backgroundColor: "#2D5767", color: "white", width: '10rem',borderRadius: '5rem' }}
      onClick={handleShow} >
         Report Fraud Case
      </button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
           <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfocMo2W97mMBqsAj3qY_fQkFwHaQqW1nPIqrzXllJDWbY_Ug/viewform?usp=sf_link" 
           width="100%" height="500" frameborder="0" marginheight="0" marginwidth="0"></iframe>
        </Modal.Body>
      </Modal>
      <div className={`background-blur ${show ? 'active' : ''}`}></div>
    </div>
    
      </>
      );
    }
    export default Modal1;
          