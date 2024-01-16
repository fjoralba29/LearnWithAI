import { useNavigate } from "react-router-dom"

import { StyledLoginRoot, StyledFormRoot, StyledForm, StyledInput, StyledButton, StyledLabel, StyledHead } from "./styles"


const Login = () => {
    const navigate = useNavigate()

    return(
    <StyledLoginRoot>
     <StyledFormRoot>
            <StyledHead>
                <h1>Welcome!</h1>
                <h4>Please enter your credentials to start learning!</h4>
            </StyledHead>
            <StyledForm>
                <StyledLabel>Username:</StyledLabel>
                <StyledInput   name='username'
                            type='text'
                            placeholder='Enter your username'/>
                <StyledLabel>Password:</StyledLabel>
                <StyledInput  name='password'
                            type='password'
                            placeholder='Enter your password' />
                
            </StyledForm>
            <StyledButton onClick={() => navigate('/')}>Login</StyledButton>
        </StyledFormRoot> 
    </StyledLoginRoot>
    )
}

export default Login