/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled from '@emotion/styled'
import { ArrowBack, ArrowForward } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { ReactNode, useRef, useState } from 'react'

type ScrollDirection = 'LEFT' | 'RIGHT'

const ScrollPanel = styled.div`
    overflow-x: hidden;
`

const Wrapper = styled.div`
    display: inline-flex;
    flex-wrap: nowrap;
`

const ScrollButton = styled(IconButton)<{
    itemSize: number
    isLeft?: boolean
}>`
    position: relative;
    left: ${(props) => (props.isLeft ? `5vw` : `90vw`)};
    top: ${(props) => `-${props.itemSize / 2}px}`};
`

const HorizontalInfiniteScroll: React.FC<{
    itemSize: number
    children: ReactNode
}> = ({ itemSize, children }) => {
    const containerRef = useRef<HTMLDivElement>(null)

    const [offset, setOffset] = useState(0)

    const handleScroll = (direction: ScrollDirection) => {
        const { scrollWidth, clientWidth } = containerRef.current!

        let newOffset: number

        const displayCountFloor = Math.floor(clientWidth / itemSize)
        const displayCountCeil = Math.ceil(clientWidth / itemSize)

        if (direction === 'LEFT') {
            // minus current displaying width
            newOffset =
                offset <= 0
                    ? scrollWidth - displayCountFloor * itemSize
                    : offset - itemSize
        } else {
            newOffset =
                // minus current displaying width
                offset >= scrollWidth - displayCountCeil * itemSize
                    ? 0
                    : offset + itemSize
        }
        setOffset(newOffset)
        containerRef.current!.scrollTo({
            left: newOffset,
            behavior: 'smooth',
        })
    }

    return (
        <div style={{ width: '100vw' }}>
            <ScrollPanel ref={containerRef}>
                <Wrapper>{children}</Wrapper>
            </ScrollPanel>
            <ScrollButton
                isLeft={true}
                itemSize={itemSize}
                onClick={() => handleScroll('LEFT')}
            >
                <ArrowBack />
            </ScrollButton>
            <ScrollButton
                itemSize={itemSize}
                onClick={() => handleScroll('RIGHT')}
            >
                <ArrowForward />
            </ScrollButton>
        </div>
    )
}

export default HorizontalInfiniteScroll
