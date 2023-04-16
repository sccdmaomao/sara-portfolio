import { Box, Container, Divider, Link, Tab, Tabs } from '@mui/material'
import React from 'react'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'

import { PATH } from '../App'

const NavBar = () => {
    /* ===========================
     Hooks
     ============================= */
    const location = useLocation()
    const { parkId } = useParams()
    const navigate = useNavigate()

    // useMemo for performance improvements
    const routing = React.useMemo(() => {
        return [
            { label: 'Work', to: PATH.WORK, value: 0 },
            { label: 'Contact', to: PATH.CONTACT, value: 1 },
        ]
    }, [])

    /* ===========================
     State Variables
     ============================= */
    const [selectedTab, setSelectedTab] = React.useState(0)

    const isViewingContactPage =
        !!parkId && location.pathname.includes(PATH.CONTACT)

    /* ===========================
     Side Effects
     ============================= */
    React.useEffect(() => {
        const selectedTabIndex = isViewingContactPage
            ? 2
            : routing.find((routeObj) =>
                  routeObj.to.includes(location.pathname)
              )?.value ?? 0

        setSelectedTab(selectedTabIndex)
    }, [location.pathname, parkId, routing, isViewingContactPage])

    /* ===========================
     Handlers
     ============================= */
    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setSelectedTab(newValue)
        navigate(routing[newValue].to)
    }

    /* ===========================
     JSX
     ============================= */
    return (
        <Container
            sx={{
                padding: '12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <Link
                    href="/"
                    underline="none"
                    sx={{
                        marginRight: 'auto',
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: '40px',
                    }}
                >
                    Sara Mock Wu
                </Link>

                <Tabs value={selectedTab} onChange={handleChange}>
                    {routing.map((route, i) => (
                        <Tab key={`route-${i}`} label={route.label} />
                    ))}
                </Tabs>
            </Box>
            <Divider />
            <Outlet />
        </Container>
    )
}

export default NavBar
