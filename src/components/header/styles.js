import styled from 'styled-components'

export const StyledHeader = styled.div`
    background-color: #7C108A;
    color: white;
    padding: 36px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 16px;
    box-shadow: 0px 8px 16px rgba(20, 20, 42, 0.1), 0px 0px 1px rgba(48, 49, 51, 0.05);
    > h2 {
        cursor: pointer;
    }
`

export const StyledMenu = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 24px;
`