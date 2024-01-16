import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
    width: 200px;
    background-color: #FBF4F4;
    border-radius: 5px;
    padding: 3px;
`

export const StyledFiller = styled.div`
${({percent}) => css`
    height: 20px;
    width: ${percent}%;
    background-color: #DE5A61;
    border-radius: 5px;
    transition: width 0.5s ease-in-out;
`}`