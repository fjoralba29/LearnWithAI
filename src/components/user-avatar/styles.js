import styled, { css } from 'styled-components'

export const StyledImg = styled.img`
    ${({width, height, username }) => css`
        width: ${width ?? 48}px;
        height: ${height ?? 48}px;
        border-radius: 50%;
        cursor: ${username ? 'pointer' : 'default'};
    `}
`

export const StyledDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: end;
    & svg {
        width: 32px;
        height: 32px;
    }
`
export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    z-index: 999;
`