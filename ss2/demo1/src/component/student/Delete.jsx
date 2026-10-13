import {Button, Modal} from "react-bootstrap";
import {deleteById, getAll} from "../../service/studentService.js";
import React from "react";
import {toast} from "react-toastify";


const Delete = ({showModal, handleReloading, student, closeModal}) => {

    const handleClose = () => {
        closeModal();
    }

    const handleDelete =  async () => {
        let isDelete =await deleteById(student.id);
        handleReloading();
        closeModal();
        isDelete?toast.success("Xoá thành công"): toast.error("Xoá thất bại")

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