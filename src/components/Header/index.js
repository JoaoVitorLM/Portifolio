import React from "react";
import { Container, Header, Li, Logo, Ul } from "../Header/styles";
import { Link } from "react-router-dom";

export default function HeaderCuston() {
    return(
        <>
          <Header>
            <Container>
                <Logo>LM</Logo>
                <ul>
                    <Link to='/'> 
                        <Li>Home</Li>
                    </Link> 
                    <Link to='/projects'>
                        <Li>Projetos</Li>
                    </Link>
                    <Link to='/contacts'>
                        <Li>Contato</Li>
                    </Link>             
                </ul>
            </Container>
        </Header>  
        </>
    )
}