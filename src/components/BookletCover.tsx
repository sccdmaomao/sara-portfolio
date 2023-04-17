import { Box, Tooltip } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const BookletCover: React.FC<{
    title: string
    href: string
    children: React.ReactNode
}> = ({ title, href, children }) => {
    const navigate = useNavigate()

    const handleClick = (url: string) => {
        navigate(url)
    }

    return (
        <Tooltip title={title} followCursor onClick={() => handleClick(href)}>
            <Box
                sx={{
                    height: '500px',
                    border: '1px solid black',
                    ':hover': { cursor: 'pointer' },
                }}
            >
                {children}
            </Box>
        </Tooltip>
    )
}

export default BookletCover
