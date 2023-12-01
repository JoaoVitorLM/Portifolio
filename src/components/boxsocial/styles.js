import styled  from "styled-components"

export const BoxText= styled.div`
   display: flex;
   flex-direction: column;
   color: white;
`
export const H1 = styled.h1`
   font-size: 45px;
   letter-spacing: 1px;
   margin-bottom: 12px;
   color: #DBE2EF;
`
export const H3= styled.h3`
   font-size: 18px;
   letter-spacing: 9px;
   font-weight: 400;
   margin-left: 3px;
   color: #DBE2EF;

   @media screen and (max-width: 545px) {
      text-align: center;
      margin-left: 20px;
      margin-right: 20px;
      font-size: 18px;
   }
`
export const BoxLinks = styled.div`
   max-width: 400px;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   margin-top: 36px;

   @media screen and (max-width: 950px) {
      margin: auto;
      margin-top: 15px;
   }
   @media screen and (max-width: 545px) {
      display: flex;
      flex-direction: column;
   }
`
export const ButtonCv = styled.button`
   width: 190px;
   padding: 19px 16px;
   border: none;
   border-radius: 9px;
   color: #DBE2EF;
   background-color: #5D12D2;
   font-size: 16px;
   font-weight: 600;
   cursor: pointer;

   &:hover{
      color: white;
      box-shadow:  0px 0px 6px #DBE2EF;
      transition: 0.4s ease;
   }
`
export const Social = styled.div`
   width: 170px;
   padding: 8px 13px;
   border: 3px solid #DBE2EF;
   border-radius: 9px;
   background-color: transparent;
   display: flex;
   align-items: center;
   justify-content: space-around;
   margin-left: 10px;

   @media screen and (max-width: 545px) {
      margin-top: 20px;
   }
`
export const A = styled.a`
   color: #DBE2EF;
`