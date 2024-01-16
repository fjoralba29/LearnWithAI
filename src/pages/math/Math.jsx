import { useEffect, useState } from "react"
import { Rating } from "@mui/material"
import Alert from '@mui/material/Alert';
import Header from "../../components/header/Header"
import LessonsItems from "../../components/lessons-items/LessonsItems"

import { StyledContent, 
        StyledContainer, 
        StyledSide, 
        StyledQuotesRoot, 
        StyledWeather, 
        StyledNews, 
        StyledInput, 
        StyledButton, 
        StyledReview,
        StyledSubmitButton,
        StyledRoot, 
        StyledAlert } from './styles'

import { CloudsWeather, RainyWeather, SunnyWeather } from "../../assets/icons/icons"
import { useNavigate } from "react-router-dom"
import { ROUTE_MATH_LESSON } from "../../utilities/constants"


const MathPage = () => {

    const [ quote, setQuote ] = useState('');
    const [ author, setAuthor ] = useState('');
    const [ weather, setWeather ] = useState({main: '', temp: '', feels_like: ''})
    const [ news, setNews ] = useState('')
    const [ value, setValue ] = useState()
    const [ alert, setAlert ] = useState(false)
    const navigate = useNavigate()

    const fetchRandomQuote = async () => {
        try {
            const response = await fetch('https://api.quotable.io/random');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setQuote(data?.content);
            setAuthor(data?.author)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchWeather = async () => {
        try {
            const response = await fetch('http://api.openweathermap.org/geo/1.0/direct?q=Athens&appid=c60abfb6d6b1075550e7c19617c7cc65')
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            console.log(data[0].lat, data[0].lon);
            try {
                const responseWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=c60abfb6d6b1075550e7c19617c7cc65`)
                if (!responseWeather.ok) {
                    throw new Error('Failed to fetch data');
                }
                const dataWeather = await responseWeather.json();
                console.log(dataWeather);
                setWeather({main: dataWeather.weather[0].main, temp: dataWeather.main.temp, feels_like: dataWeather.main.feels_like})
            }
            catch (err) {
                console.error(err)
            }
        
        }
        catch (error) {
            console.error(error)
        }
    }

    const randomNumberInRange = (min, max) => { 
        return Math.floor(Math.random()  
                * (max - min + 1)) + min; 
    };

    const fetchNews = async () => {
        try {
            const response = await fetch('https://newsapi.org/v2/everything?q=math&apiKey=82e9aada6ac446528da7dfe40ec37c32')
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            console.log(randomNumberInRange(0, 100));
            console.log(data);
            const max = data.articles.length
            setNews(data.articles[randomNumberInRange(0, max)].description)
        }
        catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchRandomQuote();
        fetchWeather();
        fetchNews();
    }, []); 

    const handleSubmit = () => {
        console.log('alerttttttt');
        setAlert(true)
    }

    return <>
        <Header />
        <StyledRoot>
            <h1>Mathematics</h1>
            <StyledContainer>
                <StyledContent>
                    <LessonsItems lesson_name={'Lesson 1'} progress={0} onClick={() => navigate(ROUTE_MATH_LESSON)} />
                    <LessonsItems lesson_name={'Lesson 2'} progress={0} onClick={() => navigate('/math-lesson')} />
                    <LessonsItems lesson_name={'Lesson 3'} progress={0} onClick={() => navigate('/math-lesson')} />
                    <LessonsItems lesson_name={'Lesson 4'} progress={0} onClick={() => navigate('/math-lesson')} />
                    <LessonsItems lesson_name={'Lesson 5'} progress={0} onClick={() => navigate('/math-lesson')} />
                    <StyledReview>
                        <div>
                            <h1>Reviews</h1>
                            <h3>Leave a comment or rate...</h3>  
                        </div>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            size={'large'}
                        />
                    </StyledReview>
                    <StyledInput   name='comment'
                                type='text'
                                placeholder='Write your comment here...'/>
                    <StyledSubmitButton onClick={handleSubmit}>Submit</StyledSubmitButton>
                </StyledContent>
                <StyledSide>
                    <StyledQuotesRoot>
                        <h3>"{quote}"</h3>
                        <h4>-{author}</h4>
                    </StyledQuotesRoot>
                    <StyledWeather>
                        <h2>Weather</h2>
                        <p>{weather.main == 'Rain' ? <RainyWeather /> : weather.main == 'Clouds' ? <CloudsWeather /> : <SunnyWeather />}</p>
                        <p>Description: {weather.main}</p>
                        <p>
                            <p>Temp: {weather.temp}</p>
                            <p>Feels like: {weather.feels_like}</p>
                        </p>
                        
                    </StyledWeather>
                    <StyledNews>
                        {news}
                        <StyledButton>Read more...</StyledButton>
                    </StyledNews>
                </StyledSide>
            </StyledContainer>
        </StyledRoot>
        {alert && <StyledAlert>
            <Alert variant="filled" severity="success">
                Review submited successfully!
            </Alert> 
        </StyledAlert>}
    </>
}

export default MathPage