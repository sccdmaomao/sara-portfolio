import styled from 'styled-components'

import { screen_breakpoints } from '../constants'

const Wrapper = styled.div`
    user-select: none;
    text-transform: capitalize;
    padding: 40px;
    display: flex;
    flex-direction: column;
    /* Apply when screen is more than X px */
    @media (min-width: ${screen_breakpoints.XXL}px) {
        padding: 40px 10%;
    }
    > p {
        margin: 0;
    }
`

const Header = styled.div`
    display: flex;
    > h1 {
        margin: 0; // remove all margin to make sure page size
        display: inline-block;
        font-weight: normal;
        font-size: 10em;
        :last-child {
            margin-left: auto;
            font-size: 10.2em;
        }
    }
`

const Details = styled.div`
    margin-left: auto;
    margin-top: -80px; // move this element up
    > .abilities {
        margin: 0;
        margin-top: 20px;
        width: 400px;
        margin-left: 140px;
        font-size: 1.2em;
    }
`
const Title = styled.div`
    display: flex;
    font-size: 2em;
    > p {
        display: inline-block;
        margin: 0;
    }
    .title {
        color: #62c;
    }
    .slogan {
        padding-left: 2em;
    }
`

const AboutMe = () => {
    return (
        <Wrapper>
            <Header>
                <h1>{`Hello, I'm`}</h1>
                <h1>{`SARA MOCK`}</h1>
            </Header>
            <Details>
                <Title>
                    <p className="title">graphic designer</p>
                    <p className="slogan">Passionate about fashion</p>
                </Title>

                <p className="abilities">
                    I create typography, layouts, posters, covers, and web & App
                    interfaces, bridging aesthetics across diverse medius.
                </p>
            </Details>
        </Wrapper>
    )
}

export default AboutMe
