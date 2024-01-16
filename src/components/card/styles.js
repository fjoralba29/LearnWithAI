import styled from "styled-components";

export const StyledBody = styled.body`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height : 370px;
    cursor: pointer;
`
export const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 16px;
`
export const StyledCard = styled.div `
    position: relative;
    max-width : 300px;
    height : 170px;  
    background-color : #fff;
    margin : 30px 10px;
    padding : 20px 15px;
    display : flex;
    flex-direction : column;
    box-shadow : 0 5px 20px rgba(0,0,0,0.5);
    transition : 0.3s ease-in-out;
    border-radius : 15px;
    &:hover {
        height : 230px;  
        & div {
            margin-top : 30px;
            visibility : visible;
            opacity : 1;
            transition-delay: 0.2s;
        }
    }
`
export const StyledImage = styled.div `
    position : relative;
    width : 260px;
    height : 170px;
    top : -40%;
    box-shadow : 0 5px 20px rgba(0,0,0,0.2);
    z-index : 1;
`
export const StyledImg = styled.img `
    max-width : 100%;
    border-radius : 15px;
`
export const StyledContent = styled.div`
    position : relative;
    top : -120px;
    padding : 10px 15px;
    color : #111;
    text-align : center;
    visibility : hidden;
    opacity : 0;
    transition : 0.3s ease-in-out;
`