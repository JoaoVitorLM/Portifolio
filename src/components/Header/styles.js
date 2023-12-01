import styled  from "styled-components"

export const Header = styled.header`
    width: 100%;
`
export const Container = styled.header`
    max-width: 1600px;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.div`
  font-size: 2.3rem;
  font-weight: bold;
  font-style: italic;
  padding: 2px 15px;
  margin: 10px;
  border-radius: 9px;
  background-color: #5D12D2;
  color: #DBE2EF;
`

export const Li = styled.li`
    font-size: 19px;
    font-weight: 600;
    list-style: none;
    color: #F9F7F7;
    display: inline-block;
    padding: 15px 31px ;

    &:hover{
        background-color: #5D12D2;
        border-radius: 24px;
        transition: all 0.9s ease-in;        
    }

    @media screen and (max-width: 545px) {
        display: none;
    }
`
