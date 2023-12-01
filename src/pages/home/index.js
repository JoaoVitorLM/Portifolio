import React from "react";
import HeaderCuston from "../../components/Header";
import { BoxAbout, BoxColumn, BoxImg, ContainerAbout, ContainerTechnologies, H1, H3, P, SectionAbout, Technologies } from "./styles";
import { BiLogoReact, BiLogoTypescript, BiLogoFirebase } from "react-icons/bi";
import { DiNodejsSmall } from "react-icons/di";
import { DiSass } from "react-icons/di";
import Infos from "../../components/boxsocial";

export default function Home() {
    return (
        <>
            <HeaderCuston />
            <ContainerAbout>
                <Infos />
                <BoxImg/>
            </ContainerAbout>
            <ContainerTechnologies>
                <Technologies><BiLogoReact size={90} color="#DBE2EF" /></Technologies>
                <Technologies><BiLogoTypescript size={90} color="#DBE2EF" /></Technologies>
                <Technologies><DiNodejsSmall size={90} color="#DBE2EF" /></Technologies>
                <Technologies><BiLogoFirebase size={90} color="#DBE2EF" /></Technologies>
                <Technologies><DiSass size={90} color="#DBE2EF" /></Technologies>
            </ContainerTechnologies>
        </>
    )
}