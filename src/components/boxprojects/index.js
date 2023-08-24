
import { Box, Boximg, ButtonProjects, Name, Tecs } from "./styled";

export default function BoxProject({objeto,route,code,image}) {
    return (
        <>
            <Box>
            {objeto.map(item => {
                return (
                    <>
                        <Boximg><img src={image} width={340} height={230}/></Boximg>
                        <Name>{item.name}</Name>
                        <Tecs>{item.tec}</Tecs>
                        <a href={code}><ButtonProjects>CÓDIGO</ButtonProjects></a>
                        <a href={route}><ButtonProjects>PROJETO</ButtonProjects></a>
                    </>
                )                
            })}
            </Box>
        </>
    )
}