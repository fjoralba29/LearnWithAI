import Progress from '../progress/Progress'
import { StyledRoot } from './styles'

const LessonsItems = ({lesson_name, progress, onClick}) => {

    return <>
        <StyledRoot onClick={onClick}> 
            <h3>{lesson_name}</h3>
            <Progress progress={progress}/>
        </StyledRoot>
    </>
}

export default LessonsItems