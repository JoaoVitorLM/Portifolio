import React from "react";
import {Routes, Route} from "react-router-dom"
import Projects from "../pages/projects";
import Contacts from "../pages/contacts";
import Home from "../pages/home";

export default function Rotas() {
    return(
        <Routes>
            <Route element={<Home/>} path="/"/>
            <Route element={<Projects/>} path="/projects"/>
            <Route element={<Contacts/>} path="/contacts"/>
        </Routes>
    )
}