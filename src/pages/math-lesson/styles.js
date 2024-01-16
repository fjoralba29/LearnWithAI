import styled from "styled-components";

export const StyledQuestion = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
    max-width: 1200px;
    width: 800px;
    height: 200px;
    background-color: white;
    box-shadow: 0px 0px 5px 2px #D24091;
    align-items: center;
    justify-content: center;
`
export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
`
export const StyledQuiz = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 1200px;
    width: 848px;
    > div {
        display: flex;
        flex-direction: row;
        gap: 16px;
        
        > div {
            width: 152px;
            max-width: 288px;
            height: 50px;
            max-height: fit-content;
            box-shadow: 0px 0px 5px 2px #D24091;
            padding: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
    }
`

export const StyledContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 24px;
`

export const StyledNumberFacts = styled.div`
    background-color: #AA50B6;
    width: 100%;
    max-width: 500px;
    border-radius: 16px;
    padding: 24px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    > input {
        height: 40px;
        padding: 12px;
        border-radius: 8px;
        border: none;
        text-align: center;
    }
`
