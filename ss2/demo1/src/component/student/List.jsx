
import React, {useCallback, useEffect, useState} from "react";
import {getAll} from "../../service/studentService.js";
import DeleteComponent from "./Delete.jsx";
import Add from "./Add.jsx";


const List = ()=>{

     const [studentList, setStudentList]=  useState([]);
     const [showModal, setShowModal] = useState(false);
     const [deleteStudent, setDeleteStudent] = useState(null);
     const [reloading, setReloading] = useState(false);

     useEffect(()=>{
         console.log("----------useEffect------------")
         setStudentList([...getAll()])
     },[reloading]);

     useEffect(()=>{

         return ()=>{
             console.log("logic cần thực hiện trước khi component unmouting");
             /////
         }
     },[])

     const handleShowModal=(student)=>{
         setShowModal(true);
         setDeleteStudent(student);
     }
     const closeModal = useCallback(()=>{
         setShowModal(false);
     },[]);


     const handleReloading = useCallback(()=>{
         setReloading(pre=>!pre);
     },[])

     return (
        <>
            {console.log("---------------list-render----------")}
            <h2>Danh sách sinh viên</h2>
            <Add handleReloading = {handleReloading}/>
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
                    studentList.map((student, i) => (
                        <tr key={student.id}>
                            <td>{i + 1}</td>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>
                                <button className={'btn btn-sm btn-danger'} onClick={()=>{
                                    handleShowModal(student)
                                }}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>

            <DeleteComponent showModal ={showModal}
                         student = {deleteStudent}
                         closeModal={closeModal}
                         handleReloading = {handleReloading}
            />
        </>
    )
}
export default List;