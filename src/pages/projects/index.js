import React from "react";
import HeaderCuston from "../../components/Header";
import BoxProject from "../../components/boxprojects";
import { Project1, Project2, Project3, Project4, Project5, Project6, ProjectOne, ProjectTree, ProjectTwo } from "../../utils/projects";
import { BoxCards, BoxFlex } from "./styles";
import Img1 from "../../assets/images/stetclean.jpeg"
import Img2 from "../../assets/images/bombinha.jpeg"
import Cards from "../../components/boxprojects";

export default function Projects(){
    return(
        <>
            <HeaderCuston/>
            <Cards/>      
        </>
    )
}