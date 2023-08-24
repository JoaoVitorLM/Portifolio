import React from "react";
import {Routes, Route} from "react-router-dom"
import Home from "../pages/home";
import About from "../pages/about";
import Projects from "../pages/projects";
import Contacts from "../pages/contacts";

export default function Rotas() {
    return(
        <Routes>
            <Route element={<Home/>} path="/"/>
            <Route element={<About/>} path="/about"/>
            <Route element={<Projects/>} path="/projects"/>
            <Route element={<Contacts/>} path="/contacts"/>
        </Routes>
    )
}