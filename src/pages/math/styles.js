import styled from "styled-components";

export const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
`
export const StyledRoot = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px 0 0 24px;
`

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
`

export const StyledSide = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    padding: 24px 24px 24px 0;
    width: 100%;
`

export const StyledQuotesRoot = styled.div`
    background-color: #EBA550;
    box-shadow: 0px 0px 5px 1px gray;
    width: 100%;
    max-width: 500px;
    color: white;
    border-radius: 16px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > h4 {
        text-align: end;
    }
`

export const StyledWeather = styled.div`
    background-color: #FFFFFF;
    width: 100%;
    max-width: 500px;
    color: #49A4FC;
    border-radius: 16px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    > p {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 16px;
        font-size: 16px;
        font-weight: 500;
    }
`

export const StyledNews = styled.div`
    background-color: #1E1E5F;
    box-shadow: 0px 0px 5px 1px gray;
    width: 100%;
    max-width: 500px;
    color: #49A4FC;
    border-radius: 16px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const StyledInput = styled.textarea`
    height: 150px;
    max-width: 1200px;
    width: 800px;
    padding: 8px;
    border-radius: 8px;
    font-size: 16px;
    border: 1px solid #EFEAEA;
`

export const StyledButton = styled.button`
    width: 130px;
    align-self: flex-end;
    padding: 8px;
`

export const StyledReview = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const StyledSubmitButton = styled.button`
    width: 130px;
    align-self: flex-end;
    padding: 8px;
    background-color: #DE5A61;
    color: white;
    &:hover {
        background-color: #BE4E54;
        border-color: white;
    }
`
export const StyledAlert = styled.div`
    position: absolute;
    bottom: -490;
    right: 0;
`