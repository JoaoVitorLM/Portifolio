import styled  from "styled-components"

export const Header = styled.header`
    width: 100%;
    background-color: black;
    border-bottom: 2px solid rgb(0, 173, 252);
    box-shadow: 5px 5px 15px rgb(0, 173, 252);
`
export const Container = styled.header`
    max-width: 1400px;
    padding: 10px 0px ;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  font-style: italic;
  text-shadow: 0 0 10px rgb(0, 173, 252), 0px 0px 10px #fff;
`

export const Li = styled.li`
    font-size: 19px;
    font-weight: 500;
    list-style: none;
    color: rgba(221, 222, 230, 1);
    display: inline-block;
    padding-right: 40px;
    &:hover{
        transition: all 0.7s ease 0s;
        color:rgb(0, 173, 252);
    }
`
