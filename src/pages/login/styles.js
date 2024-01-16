import styled from 'styled-components'


export const StyledLoginRoot = styled.div `
    height: 100vh;
    width: 100%;
    background-image: url(https://t3.ftcdn.net/jpg/02/39/39/92/360_F_239399223_tthRTvt26El5ccmyQIck9ySsHKgX5YBo.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;    
`
export const StyledFormRoot = styled.div `
    background-color: white;
    padding: 45px;
    border-radius: 32px;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    margin-left: 100px;
`
export const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
`
export const StyledInput = styled.input`
    height: 36px;
    width: 400px;
    padding: 8px;
    border-radius: 8px;
    font-size: 16px;
    border: 1px solid #EFEAEA;
`
export const StyledButton = styled.button `
    align-self: center;
    width: 416px;
    background-color: #EBA550;
    color: white;
    border: 1px solid #EBA550;
    font-size: 20px;
    &:hover {
        background-color: white;
        color: #EBA550;
        border: 1px solid #EBA550;
    }
`

export const StyledLabel = styled.label `
    font-size: 20px;
    font-weight: 500;
    color: #EBA550;
`

export const StyledHead = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #EBA550;
    > h1 {
        margin: 0 !important;
    }
    > h4 {
        font-weight: 500;
    }
`