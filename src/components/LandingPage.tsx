import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    padding: 0 1rem;
`

const Title = styled.h1`
    font-size: 6rem;
    font-weight: bold;
    margin-top: 10%;
    color: #313638;
    flex: 1;
    font-family: 'Kanit', sans-serif;
    @media (max-width: 900px) {
        font-size: 4rem;
    }
    @media (max-width: 600px) {
        font-size: 2.5rem;
    }
`

const Subtitle = styled.h2`
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: #e0dfd5;
    font-family: 'Kanit', sans-serif;
    @media (max-width: 900px) {
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
    }
    @media (max-width: 600px) {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
`

const NavButton = styled.button`
    margin: 0 2rem 4rem 2rem;
    font-size: 1.5rem;
    background: none;
    border: none;
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    transition: background 0.2s;
    border-radius: 0.5rem;
    color: #313638;
    @media (max-width: 900px) {
        font-size: 1.1rem;
        margin: 0 1rem 3rem 1rem;
        padding: 0.4rem 1rem;
    }
    @media (max-width: 600px) {
        font-size: 1rem;
        margin: 0 0.5rem 2rem 0.5rem;
        padding: 0.3rem 0.7rem;
    }
    &:hover {
        color: #9381ff;
    }
`

const LandingPage = () => {
    const navigate = useNavigate()
    return (
        <Container>
            <Title>Sara Mock</Title>
            <Subtitle>Graphic Designer</Subtitle>
            <div className="flex">
                <NavButton onClick={() => navigate('/projects')}>
                    Project
                </NavButton>
                <NavButton onClick={() => navigate('/contact')}>
                    Contact
                </NavButton>
            </div>
        </Container>
    )
}

export default LandingPage
