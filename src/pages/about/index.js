import React from "react";
import HeaderCuston from "../../components/Header";
import { BoxAbout, BoxColumn, BoxImg, ContainerAbout, ContainerTechnologies, H1, H3, P, SectionAbout, Technologies } from "./styles";
import { BiLogoReact, BiLogoTypescript, BiLogoFirebase, BiLogoPython } from "react-icons/bi";


export default function About() {
    return(
        <>
            <HeaderCuston/>
            <SectionAbout>
                <ContainerAbout>
                    <BoxAbout>
                        <BoxColumn>
                            <H1>SOBRE</H1>
                            <H3>João Vitor Lorenzeti Martins</H3>
                            <P>
                            Incansável na busca de novos conhecimentos, estou sempre disposto<br/>
                            a ouvir críticas construtivas e aprender com outras pessoas.<br/>
                            Apaixonado pelo mundo da Tecnologia, buscando me tornar cada vez<br/>
                            melhor nos meus projetos e nas minhas aplicações. Estou sempre buscando me<br/>
                            atualizar diante do mercado, pois, a tecnologia não para de avançar e por isso<br/>
                            busco novos desafios que me levem ao próximo nível.<br/>
                            </P>
                        </BoxColumn>
                        <BoxImg></BoxImg>
                    </BoxAbout>
                </ContainerAbout>
                <ContainerTechnologies>
                    <Technologies><BiLogoReact size={90} color="white"/></Technologies>
                    <Technologies><BiLogoTypescript size={90} color="white"/></Technologies>
                    <Technologies><BiLogoFirebase size={90} color="white"/></Technologies>
                    <Technologies><BiLogoPython size={90} color="white"/></Technologies>
                </ContainerTechnologies>
            </SectionAbout>
        </>
    )
}