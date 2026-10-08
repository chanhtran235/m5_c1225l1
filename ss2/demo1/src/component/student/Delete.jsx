import {Button, Modal} from "react-bootstrap";
import {deleteById, getAll} from "../../service/studentService.js";
import React from "react";


const Delete = ({showModal, handleReloading, student, closeModal}) => {

    const handleClose = () => {
        closeModal();
    }

    const handleDelete = () => {
        deleteById(student.id);
        console.log(getAll());
        handleReloading();
        closeModal();
    }
    return (
        <>
            {console.log("----------delete- modal------------")}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span>Bạn có muốn xoá sinh viên {student?.name} không?</span>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default React.memo(Delete);