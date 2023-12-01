import React from "react";
import { A, BoxLinks, BoxText, ButtonCv, H1, H3, Social } from "./styles";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";

export default function Infos() {
    return(
        <>
         <BoxText>
                    <H1>João Vitor Lorenzeti</H1>
                    <H3>Desenvolvedor Front-End</H3>
                    <BoxLinks>
                            <A > 
                                <ButtonCv>DOWNLOAD CV</ButtonCv>
                            </A>
                        <Social> 
                            <A href="https://github.com/JoaoVitorLM"> 
                                <AiFillGithub size={30} />
                            </A>
                            |
                            <A href="https://www.linkedin.com/in/joaolm/"> 
                                <BiLogoLinkedin size={25} />
                            </A>
                        </Social> 
                    </BoxLinks>                   
                </BoxText>
        </>
    )
}