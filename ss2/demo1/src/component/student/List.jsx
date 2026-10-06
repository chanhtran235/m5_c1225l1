import React from "react";
import {getAll} from "../../service/studentService.js";
import DeleteModal from "./DeleteModal.jsx";

class List extends React.Component{
    constructor(props) {
        console.log("----init")
        super(props);

        this.state = {
            studentList:[],
            showModal: false,
            deleteStudent :null,
            reloading :false
        }

    }

    handleReloading = ()=>{
        this.setState({
            studentList: [...getAll()]
        })
    }

    closeModal = ()=>{
        this.setState({
            showModal: false
        })
    }

    handleShowModal = (student)=>{
        this.setState({
            showModal: true,
            deleteStudent:student
        })
    }

    componentDidMount() {
        console.log("-------didMount--------");
        this.setState({
            studentList: [...getAll()]
        });
    };
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (prevState.reloading!=this.state.reloading){
    //         this.setState({
    //             studentList: [...getAll()],
    //             reloading: false
    //         })
    //     }
    // }

    render() {
        return (
            <>
                {console.log("---------------list-render----------")}
                <h2>Danh sách sinh viên</h2>
                <table className={'table table-dark'}>
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.studentList.map((student, i) => (
                            <tr key={student.id}>
                                <td>{i + 1}</td>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>
                                    <button className={'btn btn-sm btn-danger'} onClick={()=>{
                                        this.handleShowModal(student)
                                    }}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>

                <DeleteModal showModal ={this.state.showModal}
                             student = {this.state.deleteStudent}
                             closeModal={this.closeModal}
                             handleReloading = {this.handleReloading}
                />
            </>
        )
    }
}
export default List;