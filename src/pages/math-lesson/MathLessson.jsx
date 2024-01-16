import { useEffect, useState } from "react"
import Rating from '@mui/material/Rating';
import styled from "styled-components";
import Header from "../../components/header/Header"

import { StyledContainer, StyledQuiz, StyledQuestion, StyledNumberFacts, StyledContent } from './styles'
import { MathPoints, MathPointsEmpty } from "../../assets/icons/icons";

const MathLesson = () => {

    const [ quiz, setQuiz ] = useState([])
    const [ correctAnswer, setCorrectAnswer ] = useState(0)
    const [ correct, setCorrect ] = useState({0: false, 1: false, 2: false, 3: false})
    const [ numberFact, setNumberFact ] = useState() 
    const [ lessonNo, setLessonNo ] = useState(0)

    function shuffleAnswer(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }

    const fetchQuiz = async () => {
        try {
            setCorrect({0: false, 1: false, 2: false, 3: false})
            setCorrectAnswer(0)
            setQuiz([])
            
            const response = await fetch('https://opentdb.com/api.php?amount=5&category=19&type=multiple')
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            console.log(data);
            const quizQuestions = []
            data?.results?.map((question, index) => {
                console.log(question.correct_answer);
                const originalAnswers = [...question.incorrect_answers, question.correct_answer]
                const shuffledAnswers = shuffleAnswer(originalAnswers)
                quizQuestions.push({question: question.question, answers: shuffledAnswers, correct_answer: question.correct_answer})
            })
            setQuiz(quizQuestions);
            console.log(quizQuestions);
            setLessonNo(lessonNo+1)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (correctAnswer == 0 || correctAnswer == 5) {
            fetchQuiz()
        }
    },[correctAnswer])

    const StyledRating = styled(Rating)({
        justifyContent: 'flex-end',       
    });

    const fetchNumberFact = async (nr) => {
        try {
            const response = await fetch(`http://numbersapi.com/${nr}`)
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.text();
            setNumberFact(data)
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        console.log(e.target.value);
        const nr = e.target.value
        if (nr) { 
            fetchNumberFact(nr)
        } 
        e.preventDefault;
    } 

    console.log(correctAnswer);
    return <>
        <Header />
        <StyledContainer>
            <h1>Lesson {lessonNo} </h1>
            <StyledContent>
                <StyledQuiz correct={correct}>
                    <StyledQuestion>{quiz[correctAnswer]?.question}</StyledQuestion>
                    <div>
                        <div onClick={() => {
                                if (quiz[correctAnswer]?.answers[0] === quiz[correctAnswer]?.correct_answer) {
                                    setCorrect({...correct, 0: true})
                                    setTimeout(() => {
                                        setCorrectAnswer(correctAnswer+1)
                                        setCorrect({...correct, 0: false})
                                    }, 2000)
                                    
                                    console.log('correct');
                                }
                                console.log('idkk', quiz[correctAnswer]?.answers[0], quiz[correctAnswer]?.correct_answer);
                        }} style={{backgroundColor: correct?.[0] && '#D24091'}}>{quiz[correctAnswer]?.answers[0]}</div>
                        <div onClick={() => {
                                if (quiz[correctAnswer]?.answers[1] === quiz[correctAnswer]?.correct_answer) {
                                    setCorrect({...correct, 1: true})
                                    setTimeout(() => {
                                        setCorrectAnswer(correctAnswer+1)
                                        setCorrect({...correct, 0: false})
                                    }, 2000)
                                    console.log('correct');
                                }
                        }} style={{backgroundColor: correct?.[1] && '#D24091'}} >{quiz[correctAnswer]?.answers[1]}</div>
                        <div onClick={() => {
                                if (quiz[correctAnswer]?.answers[2] === quiz[correctAnswer]?.correct_answer) {
                                    setCorrect({...correct, 2: true})
                                    setTimeout(() => {
                                        setCorrectAnswer(correctAnswer+1)
                                        setCorrect({...correct, 0: false})
                                    }, 2000)
                                    console.log('correct');
                                }
                        }} style={{backgroundColor: correct?.[2] && '#D24091'}}>{quiz[correctAnswer]?.answers[2]}</div>
                        <div onClick={() => {
                                if (quiz[correctAnswer]?.answers[3] === quiz[correctAnswer]?.correct_answer) {
                                    setCorrect({...correct, 3: true})
                                    setTimeout(() => {
                                        setCorrectAnswer(correctAnswer+1)
                                        setCorrect({...correct, 0: false})
                                    }, 2000)
                                    console.log('correct');
                                }
                        }} style={{backgroundColor: correct?.[3] && '#D24091'}}>{quiz[correctAnswer]?.answers[3]}</div>   
                    </div>
                    <StyledRating
                        name="customized-color"
                        defaultValue={correctAnswer}
                        icon={<MathPoints />}
                        emptyIcon={<MathPointsEmpty />}
                        readOnly
                    />
                </StyledQuiz>
                <StyledNumberFacts>
                    <h2>Write a number and get an interesting fact about it</h2>
                    <input name="number" placeholder="Write number here ... " onChange={handleChange}/>
                    <p>{numberFact}</p>
                </StyledNumberFacts>
            </StyledContent>
        </StyledContainer>
    </>
} 

export default MathLesson