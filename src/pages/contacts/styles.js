import styled  from "styled-components"

export const ContainerContacts = styled.section`
   max-width: 1000px;
   min-height: 440px;
   background-color: rgba(17,45,78,1);
   border: 1px solid #DBE2EF;
   border-radius: 20px;
   box-shadow: 0px 0px 12px black;
   margin: auto;
   margin-top: 170px;

   @media screen and (max-width: 1040px) {
      max-width: 600px;
      min-height: 440px;
   }
   @media screen and (max-width: 620px) {
      max-width: 380px;
      min-height: 440px;
   }
`
export const H1 = styled.h1`
   color: #DBE2EF;
   font-weight: 600;
   font-size: 28px;
   text-align: center;
`
export const ContainerInfos = styled.div`
   max-width: 400px;
   display: flex;
   flex-direction: column;
   margin: auto;
`
export const InputCuston = styled.input`
   padding: 20px 20px;
   background-color: transparent;
   border: 1px solid #DBE2EF;
   border-radius: 10px;
   margin-top: 22px;
   color: #DBE2EF;

   @media screen and (max-width: 620px) {
      margin: auto;
      width: 300px;
      height: 10px;
      margin-top: 20px;
   }
`
export const ButtonCuston = styled.button`
   width: 200px;
   height: 50px;
   border: none;
   background-color: #5D12D2;
   border-radius: 10px;
   color: #DBE2EF;
   margin: auto;
   margin-top: 25px;
   font-size: 15px;
   font-weight: 600;
   cursor: pointer;

   &:hover{
      color: white;
      box-shadow:  0px 0px 6px #DBE2EF;
      transition: 0.4s ease;
   }

`