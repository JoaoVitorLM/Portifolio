import React from "react";
import HeaderCuston from "../../components/Header";
import { ButtonCuston, ContainerContacts, ContainerInfos, H1, InputCuston, SectionContacts } from "./styles";

export default function Contacts() {
    return(
        <>
            <HeaderCuston/>
            <SectionContacts>
                <ContainerContacts>
                        <H1>CONTATE-ME</H1>
                    <ContainerInfos>
                        <InputCuston 
                        type="text" 
                        placeholder="Name"/>                   
                        <InputCuston  
                        type="Name" 
                        placeholder="Email;"/>                   
                        <InputCuston  
                        type="text" 
                        placeholder="mensagem"/>
                        <ButtonCuston>ENVIAR</ButtonCuston>                   
                    </ContainerInfos>
                </ContainerContacts>
            </SectionContacts>
        </>
    )
}