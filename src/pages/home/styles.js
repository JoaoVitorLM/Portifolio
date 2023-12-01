import styled  from "styled-components"
import imageIA from "../../assets/images/FotoIA.png.jpeg"


export const ContainerAbout = styled.section`
    max-width: 1200px;
    min-height: 600px;
    margin-left: 40px;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 47px;

    @media screen and (max-width: 950px) {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
`
export const BoxImg = styled.div`
    width: 400px;
    height: 400px;
    border-radius: 200px;
    background-image: url(${imageIA});
    background-size: cover;

    @media screen and (max-width: 950px) {
        margin-top: 30px;
    }
    @media screen and (max-width: 545px) {
        width: 320px;
        height: 320px;
    }
`
export const ContainerTechnologies = styled.div`
    max-width: 500px;
    min-height: 100px;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 100px;

    @media screen and (max-width: 950px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    @media screen and (max-width: 545px) {
        display: flex;
        flex-direction: column;
    }
`
export const Technologies = styled.div`  
    animation: float 5s ease-in-out infinite;

    @keyframes float {
        0%{
            transform: translatey(0px);
        }
        50%{
            transform: translatey(-16px);
        }
        100%{
            transform: translatey(0px);
        }  
    };
`


