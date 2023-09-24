import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import { PATH } from '../App'
import NavTabs from './NavTabs'

const HeaderBar = styled.div`
    border-bottom: 1px solid #ddd;
    margin: 0 14px;
    font-size: 2rem;
`

const NavBar = () => {
    // useMemo for performance improvements
    const routing = React.useMemo(() => {
        return [
            { label: 'About Me', to: PATH.ABOUT_ME },
            { label: 'Personal Project', to: PATH.ABOUT_ME },
            { label: 'School Project', to: PATH.ABOUT_ME },
            { label: 'Contact', to: PATH.ABOUT_ME },
        ]
    }, [])

    /* ===========================
     JSX
     ============================= */
    return (
        <div>
            <HeaderBar>SARA MOCK</HeaderBar>
            <NavTabs tabs={routing} />
            <Outlet />
        </div>
    )
}

export default NavBar
