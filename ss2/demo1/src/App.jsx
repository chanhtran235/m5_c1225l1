import './App.css'
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Header from "./component/Header.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./component/Home.jsx";
import About from "./component/About.jsx";
import Dashboard from "./component/dashboard/Dashboard.jsx";
import List from "./component/student/List.jsx";
import Add from "./component/student/Add.jsx";
import {ToastContainer} from "react-toastify";
import Detail from "./component/student/Detail.jsx";

function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/home'} element={<Home/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/dashboard'} element={<Dashboard/>}>
                    <Route path={'student'} element={<List/>}/>
                    <Route path={'student/add'} element={<Add/>}/>
                    <Route path={'student/detail/:id'} element={<Detail/>}/>
                </Route>
            </Routes>
            <ToastContainer/>

        </>
)
}

export default App
