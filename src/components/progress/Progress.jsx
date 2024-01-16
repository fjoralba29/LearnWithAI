import { StyledContainer, StyledFiller } from './styles'

const Progress = ({progress}) => {

    return <StyledContainer>
        <StyledFiller percent={progress}></StyledFiller>
    </StyledContainer>
}

export default Progress