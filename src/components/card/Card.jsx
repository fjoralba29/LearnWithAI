import {StyledBody, StyledContainer, StyledCard, StyledImage, StyledImg, StyledContent} from './styles'

const Card = ({name, data, onClick, src, children}) => {
    return <StyledBody onClick={onClick}>
        <StyledContainer>
            <StyledCard>
                <StyledImage>
                    <StyledImg src={src}/>
                </StyledImage>
                <StyledContent>
                    <h2>{name}</h2>
                    {children}
            
                </StyledContent>
            </StyledCard>
        </StyledContainer>

    </StyledBody>
}

export default Card