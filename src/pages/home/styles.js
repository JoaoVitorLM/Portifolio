import styled  from "styled-components"

export const SectionBodyHome = styled.header`
   width: 100%;
`
export const SectionHome = styled.header`
    max-width: 1050px;
    height: 829px;
    margin: auto;    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const BoxText= styled.div`
   max-width: 500px;
   min-height: 500px;
   display: flex;
   flex-direction: column;
   color: white;
`
export const H1 = styled.h1`
   font-size: 83px;
   letter-spacing: 2px;
   font-weight: 300;
   margin-bottom: 0px;
   border-left: 1px solid rgba(44, 0, 201, 1);
`
export const H2= styled.h2`
    margin-top: 0px;
    font-size: 30px;
    letter-spacing: 1px;
    margin-bottom: 17px;
    margin-left: 30px;
    margin-left: 9px ;
`
export const H3= styled.h3`
   font-size: 19px;
   letter-spacing: 9px;
   margin-top: 0px;
   margin-left: 4px;
   border-bottom: 2px solid rgba(44, 0, 201, 1);
   `
export const BoxLinks = styled.div`
   max-width: 340px;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-around;
   margin-left: 50px;
   margin-top: 6px;
`
export const ButtonCv = styled.button`
   width: 177px;
   height: 49px;
   border: 2px solid black;
   border-radius: 9px;
   background-color: rgb(245, 250, 250);
   font-size: 16px;
   font-weight: 600;
   box-shadow: 0 0 5px rgb(0, 173, 252), 0 0 10px rgb(0, 173, 252) ;
   &:hover{
      box-shadow: 0 0 5px rgb(0, 173, 252),
      0 0 15px rgb(0, 173, 252), 0 0 40px rgb(0, 173, 252);
      transition: all 0.6s ease 0s;
   }
   cursor: pointer;
`
export const BoxSocials = styled.div`
   width: 50px;
   height: 50px;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: white;
   border-radius: 40px;
   border: 3px solid black;
   box-shadow: 0 0 5px rgb(0, 173, 252), 0 0 10px rgb(0, 173, 252) ;
   &:hover{
      box-shadow: 0 0 5px rgb(0, 173, 252),
      0 0 15px rgb(0, 173, 252), 0 0 40px rgb(0, 173, 252);
      transition: all 0.6s ease 0s; 
   }

`
export const SpanColor = styled.span`
   color: rgba(44, 0, 201, 1);
`
export const A = styled.a`
   text-decoration: none;
   color: black;
`


  
