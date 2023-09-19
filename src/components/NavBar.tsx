import React from 'react'
import { Outlet } from 'react-router-dom'

import { PATH } from '../App'

const NavBar = () => {
    // useMemo for performance improvements
    const routing = React.useMemo(() => {
        return [{ label: 'AboutMe', to: PATH.ABOUT_ME, value: 0 }]
    }, [])

    /* ===========================
     JSX
     ============================= */
    return (
        <div>
            {JSON.stringify(routing)}
            <Outlet />
        </div>
    )
}

export default NavBar
