import { AvatarImage } from '../../assets/icons/icons'

import {
    StyledImg,
    StyledDiv,
    StyledContainer,
} from './styles'

const UserAvatar = ({
    avatar,
    width,
    height,
    username,
    onClick
}) => {
    return (
        <>
            {avatar ? (
                <StyledContainer>
                    <StyledDiv>
                        <StyledImg
                            src={avatar}
                            width={width}
                            height={height}
                            username={username}
                            onClick={onClick}
                        />
                    </StyledDiv>
                    <p style={{color: '#0b1f21', fontSize: '24px', fontWeight: 700}}>{username}</p>
                </StyledContainer>
            ) : (
                <StyledContainer>
                    <StyledDiv>
                        <AvatarImage />
                    </StyledDiv>
                    {username}
                </StyledContainer>
            )}
        </>
    )
}

export default UserAvatar

