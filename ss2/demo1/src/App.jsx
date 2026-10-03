import './App.css'
import React from "react";
import {getAll} from "./service/studentService.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

function App() {

    return (
        <>
            <h2>Danh sách sinh viên</h2>
            <table className={'table table-dark'}>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {
                    getAll().map((student, i) => (
                        <tr>
                            <td>{i + 1}</td>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}

export default App
