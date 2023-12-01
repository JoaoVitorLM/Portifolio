import React from "react"
import { Box, BoxButton, BoxDesc, ButtonCode, ButtonVisit, Card, Desc, Img, Name } from "./styled"
import { Project } from "../../utils/projects"


export default function Cards() {
    return (
        <>
            <Box>
                {Project.map(item => {
                    return (
                        <>
                            <Card>
                                <Img src={item.pic}/>
                                <Name>{item.title}</Name>
                                <BoxDesc>
                                    <Desc>{item.desc}</Desc>
                                </BoxDesc>
                                <BoxButton>
                                    <a href={item.git}>
                                        <ButtonCode>CÓDIGO</ButtonCode>
                                    </a>
                                    <a href={item.path}>
                                        <ButtonVisit>VISITA</ButtonVisit>
                                    </a>
                                </BoxButton>
                            </Card>
                        </>
                    )
                })}
            </Box>
        </>
    )
}