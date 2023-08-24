import styled  from "styled-components"
import imageIA from "../../assets/images/FotoIA.png.jpeg"

export const SectionAbout = styled.section`
   width: 100%;
`
export const ContainerAbout = styled.section`
   max-width: 1400px;
   margin: auto;
   display: flex;
   flex-direction: row;
   align-items: center;
   margin-top: 80px;
`
export const BoxAbout = styled.section`
    width: 1200px;
    min-height: 600px;
    margin-left: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`
export const BoxColumn = styled.section`
    display: flex;
    flex-direction: column;
`
export const H1 = styled.h1`
    color: white;
    font-size: 49px;
    margin: 0 ;
`
export const H3 = styled.h3`
    color: rgba(216, 215, 216);
    font-size: 20px;
    font-weight: 400;
    margin-top: 7px;
`
export const P = styled.p`
    color: white;
    font-size: 17px;
    font-weight: 400;
    margin-top: 80px;
`
export const BoxImg = styled.div`
    width: 400px;
    height: 400px;
    border-radius: 200px;
    background-image: url(${imageIA});
    background-size: cover;
`
export const ContainerTechnologies = styled.div`
    max-width: 500px;
    min-height: 100px;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`
export const Technologies = styled.div`
    width: 90px;
    height: 90px;
`


