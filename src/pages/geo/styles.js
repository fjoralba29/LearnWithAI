import styled from "styled-components";

export const StyledDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    border: 1px solid #DE5A61;
    box-shadow:  0px 0px 5px 2px #DE5A61;
    border-radius: 16px;
    padding: 24px;
    > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 24px;
        > p {
            font-size: 16px;
            font-weight: 500;
        }
    }
`
export const StyledCountryInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 24px;
    width: 100%;
`

export const StyledRoot = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    > h1 {
        margin: 0;
    }
`

export const StyledNasa = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`