import styled from '@emotion/styled'
import { Container, Grid, Typography } from '@mui/material'

import { PATH } from '../App'
import BookletCover from '../components/BookletCover'
import HorizontalInfiniteScroll from '../components/HorizontalInfiniteScroll'

const ITEM_SIZE = 500
const Item = styled.div`
    width: ${ITEM_SIZE}px;
    height: ${ITEM_SIZE}px;
    display: flex;
    justify-content: center;
    align-items: center;

    // temp debugging style
    border: 1px solid black;
    margin: 5px;
`

const Home = () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <>
            <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="h2">School Project</Typography>
            </Container>
            <HorizontalInfiniteScroll itemSize={ITEM_SIZE}>
                {items.map((item) => (
                    <Item key={item}>{item}</Item>
                ))}
            </HorizontalInfiniteScroll>
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}
            >
                <Typography variant="h2">Design Booklet</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <BookletCover
                            title="Brand Book Making"
                            href={PATH.CAPCOM}
                        >
                            brand book
                        </BookletCover>
                    </Grid>
                    <Grid item xs={6}>
                        <BookletCover title="Bosideng" href={PATH.BOSIDENG}>
                            Bosideng
                        </BookletCover>
                    </Grid>
                    <Grid item xs={6}>
                        <BookletCover
                            title="Capstone Project"
                            href={PATH.CAPSTONE}
                        >
                            capstone
                        </BookletCover>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Home
