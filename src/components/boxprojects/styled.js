import styled  from "styled-components"

export const Box = styled.div`
   max-width: 1400px;
   margin: auto;
   display: flex;
   align-items: center;
   justify-content: space-around;
   margin-top: 150px;
   overflow: hidden;
   flex-wrap: wrap;
`
export const Card = styled.div`
   max-width: 320px;
   min-height: 480px;
   border-radius: 19px;
   background-color: white;
   box-shadow: 0px 0px 12px black;
   z-index: 20;
   margin: 30px;
`
export const Img = styled.img`
   width: 320px;
   height: 250px;
   background-color: black;
   border-top-left-radius: 18px;
   border-top-right-radius: 18px;
   margin: auto;

   image{
      width: 320px;
      height: 250px;
   }
`
export const Name = styled.h1`
   color: black;
   font-weight: 600;
   font-size: 23px;
   margin: 0;
   margin-top: 10px;
   text-align: center;
`
export const BoxDesc = styled.p`
   width: 100%;
   height: 145px;
   margin: 0;
`
export const Desc = styled.p`
   color: black;
   font-weight: 600;
   font-size: 14px;
   padding: 15px;
   margin-top: 7px;
   overflow: hidden;
   word-wrap: break-word;
   word-break: break-word;
   text-align: center;
`
export const BoxButton = styled.div`
   width: 100%;
   height: 40px;
   background-color: #5D12D2;
   border-bottom-left-radius: 17px;
   border-bottom-right-radius: 17px;
`
export const ButtonCode = styled.button`
   width:50%;
   height: 40px;
   border-bottom-left-radius: 17px;
   border: none;
   background-color: #5D12D2;
   font-weight: 800;
   cursor: pointer;
   color: #FFE5E5;

   &:hover{
      background-color: #3F72AF;
      color: #FFE5E5;
   }
`
export const ButtonVisit = styled.button`
   width:50%;
   height: 40px;
   border-bottom-right-radius: 17px;
   border: none;
   background-color: #5D12D2;
   font-weight: 800;
   cursor: pointer;
   color: #FFE5E5;

   &:hover{
      background-color: #3F72AF;
      color: #FFE5E5;
   }
`
