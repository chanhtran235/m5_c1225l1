import {Component} from "react";
import {Button, Modal} from "react-bootstrap";
import {deleteById, getAll} from "../../service/studentService.js";

class DeleteModal extends Component {
    handleClose = ()=>{
          this.props.closeModal();
    }
    handleDelete = ()=>{
        deleteById(this.props.student.id);
        console.log("--------------------------------")
        console.log(getAll());
        this.props.closeModal();
        this.props.handleReloading();
    }
    render() {
        return (
            <>
                {console.log("----------delete- modal------------")}
                <Modal show={this.props.showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <span>Bạn có muốn xoá sinh viên {this.props.student?.name} không?</span>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleDelete}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );

    }
}

export default DeleteModal;