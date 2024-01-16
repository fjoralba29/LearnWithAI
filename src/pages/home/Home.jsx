
import Header from '../../components/header/Header.jsx'
import Card from '../../components/card/Card.jsx'

import { StyledBody, StyledCards } from './styles.js'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

    return (<>
        <Header />
        <StyledBody>
            <h1>Choose the subject you want to learn today</h1>
            <StyledCards>
                <Card name={'Math'} onClick={() => navigate('/math')} src={'https://i0.wp.com/calmatters.org/wp-content/uploads/2021/08/math-curriculum.jpg?fit=2000%2C1500&ssl=1'}>
                    <> <p>Lessons: 5</p> </>
                </Card>
                <Card name={'Geo'} onClick={() => navigate('/geo')} src={'https://www.s4d4c.eu/wp-content/uploads/2020/12/geography-1000x667.jpg'}>
                    <> <p></p> </>
                </Card>
                <Card name={'History'} onClick={() => navigate('/')} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbhJXb9ucOa2f4kNiK32zyU-HR0E9FRiMLeg&usqp=CAU'}>
                    <> <p></p> </>
                </Card>
                <Card name={'Literature'} onClick={() => navigate('/')} src={'https://t3.ftcdn.net/jpg/03/33/45/40/360_F_333454009_nlCLykXBPzOLMFCTbo3PHUQJnJrDtPQX.jpg'}>
                    <> <p>Lessons: </p> </>
                </Card>
                <Card name={'Programming'} onClick={() => navigate('/')} src={'https://www.zdnet.com/a/img/resize/0a6b0be2f543ddbf313fc83a706b807b77c3c202/2021/07/19/8a337c80-5ed6-43a1-98fb-b981d420890f/programming-languages-shutterstock-1680857539.jpg?auto=webp&fit=crop&height=900&width=1200'}>
                    <> <p>Lessons: </p> </>
                </Card>
                <Card name={'English'} onClick={() => navigate('/')} src={'https://expressenglish.ae/wp-content/uploads/2022/02/tips-improve-english.jpg'}>
                    <> <p>Lessons: </p> </>
                </Card>
                <Card name={'Physics'} onClick={() => navigate('/')} src={'https://collegerealitycheck.com/wp-content/uploads/physics-major-1988419205-1024x768.jpg'}>
                    <> <p>Lessons: </p> </>
                </Card>
                <Card name={'Biology'} onClick={() => navigate('/')} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjA56t6JTXw8UrstuoeiLLqC3s_v0arB6EA&usqp=CAU'}>
                    <> <p>Lessons: </p> </>
                </Card>
            </StyledCards>
       </StyledBody>
    </>)
}

export default Home