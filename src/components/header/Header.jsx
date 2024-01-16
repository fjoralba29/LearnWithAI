import { StyledHeader, StyledMenu } from './styles.js'
import UserAvatar from '../user-avatar/UserAvatar'
import { Lessons, NotificationIcon } from '../../assets/icons/icons.jsx'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate()

    return <>
        <StyledHeader>
            <h2 onClick={() => navigate('/') }>Learn with AI</h2>
            <StyledMenu>
                <Lessons />
                <NotificationIcon />
                <UserAvatar />
            </StyledMenu>
        </StyledHeader>
    </>
}

export default Header