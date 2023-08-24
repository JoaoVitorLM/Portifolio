import React from "react";
import HeaderCuston from "../../components/Header";
import {A, BoxLinks, BoxSocials, BoxText, ButtonCv, H1, H2, H3, Link, SectionBodyHome, SectionHome, SpanColor } from "./styles";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import gif from "../../assets/videos/laptop.gif"





export default function Home() {
    return(
        <>
        <SectionBodyHome>
            <HeaderCuston/>
            <SectionHome>
                <BoxText>
                    <H1>Hello<SpanColor>.</SpanColor></H1>
                    <H2>I`am João Vitor Lorenzeti</H2>
                    <H3>Desenvolvedor Front-End</H3>
                    <BoxLinks>
                        <ButtonCv> 
                            <A href="">Download CV</A>
                        </ButtonCv>
                        <BoxSocials> 
                            <A href="https://github.com/JoaoVitorLM"> 
                                <AiFillGithub size={50} color="black" href=""/>
                            </A> 
                        </BoxSocials>
                        <BoxSocials> 
                            <A href="https://www.linkedin.com/in/joaolm/"> 
                                <BiLogoLinkedin size={38} color="black"/>
                            </A>
                        </BoxSocials> 
                    </BoxLinks>                   
                </BoxText>
                <img src={gif} alt="laptop"></img>
            </SectionHome>
        </SectionBodyHome>    
        </>
    )
}