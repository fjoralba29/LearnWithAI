import styled, { css } from 'styled-components'

export const StyledInputRoot = styled.div`
    position: relative;
`
export const StyledInputWrapper = styled.div`
    ${({ hasError, isSuccess, touched, iconPosition }) => css`
        position: relative;
        margin: 4px 0;
        width: 100%;
        & input {
            height: 58px;
            padding-left: ${iconPosition === 'left'
                ? `48px`
                : `16px`};
            padding-right: ${touched
                ? `80px`
                : `48px`};
            border-radius: 12px;
            ${hasError &&
            css`
                border-color: red !important;
            `};
            ${isSuccess &&
            css`
                border-color:green !important;
            `};
            &:hover {
                border-color: black;
            }
        }
    `}
`
export const StyledIcons = styled.span`
    ${({ iconPosition }) => css`
        position: absolute;
        top: 50%;
        ${iconPosition === 'left'
            ? css`
                  left: 16px;
              `
            : css`
                  right: 16px;
              `};
        transform: translateY(10%);
        display: flex;
        gap: 8px;
        z-index: 1;
    `}
`

export const StyledIcon = styled.span`
    display: flex;
    align-items: center;
    justify-items: center;
    cursor: pointer;
    width: 24px;
    height: 24px;
    & svg {
        width: 24px;
        height: 24px;
        cursor: initial;
    }
`
export const StyledStatusIcons = styled.span`
    ${({ }) => css`
        position: absolute;
        top: 50%;
        transform: translateY(10%);
        display: flex;
        gap: 8px;
        z-index: 1;
        left: unset;
        right: 16px;
    `}
`

export const StyledErrorMessage = styled.small`
    ${({  }) => css`
        color: red;
    `}
`
export const StyledInput = styled.input`
    ${({ iconPosition, touched, rounded, hasError, isSuccess }) => css`
        border: 2px solid grey;
        width: 100%;
        font-size: 16px;
        line-height: 24px;
        padding: 4px 0;
        color: gray;
        background-color: grey;
        padding-left: ${iconPosition === 'left'
            ? `48px`
            : `16px`};
        padding-right: ${touched
            ? `80px`
            : `48px`};
        ${rounded &&
        css`
            border-radius: 100px;
        `};
        ${hasError &&
        css`
            border: 1px solid red;
            background-color: red;
        `};
        ${isSuccess &&
        css`
            border: 1px solid green;
            background-color: green;
        `};
        &:focus {
            outline: none;
        }
    `}
`

export const StyledLabel = styled.label`
    ${({  }) => css`
        display: block;
        margin-bottom:4px;
        font-size: 14px;
        line-height: 24px;
        font-weight: 700;
        color: gray;
    `}
`

export const StyledSmall = styled.small`
    ${({  }) => css`
        font-size: 12px;
        line-height: 16px;
        color:grey;
    `}
`