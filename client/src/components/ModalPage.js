import React, { useState } from "react";
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import PostsListPage from "../pages/PostsListPage";


function ModalPage() {

  const bg = {
    overlay: {
      background: "#FFFF00"
    }
  };
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={bg}
        centered
        animation
        
        
      >
        <Modal.Header closeButton>
          <Modal.Title>CONGRATULATIONS</Modal.Title>
        </Modal.Header>
        <Modal.Body variant="success">
        You got that done pretty quick. What would you do know? 
        Do you want to check how much you remember and go straight to quizes or You want to watch a 
        video related to this lesson? or whant to continue with another lesson
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalPage;