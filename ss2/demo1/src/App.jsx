import './App.css'
import React from "react";
import {getAll} from "./service/studentService.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Header from "./component/Header.jsx";
import List from "./component/student/List.jsx";

function App() {

    return (
        <>
            <Header/>
            <List />
        </>
    )
}

export default App
