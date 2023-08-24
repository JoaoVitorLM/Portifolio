import React from "react";
import HeaderCuston from "../../components/Header";
import BoxProject from "../../components/boxprojects";
import { ProjectOne, ProjectTree, ProjectTwo } from "../../utils/projects";
import { BoxFlex } from "./styles";
import Img1 from "../../assets/images/stetclean.jpeg"
import Img2 from "../../assets/images/bombinha.jpeg"




export default function Projects(){
    return(
        <>
            <HeaderCuston/>
            <BoxFlex>
            <BoxProject objeto={ProjectOne} route={"https://stetclean.netlify.app/"} image={Img1}/>
            <BoxProject objeto={ProjectTwo} route={"https://minesbomb.netlify.app/"} image={Img2}/>  
            <BoxProject objeto={ProjectTree}/>       
            </BoxFlex>      
        </>
    )
}