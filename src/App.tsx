import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import NavBar from './components/NavBar'
import { AboutMe } from './routes'

export enum PATH {
    ABOUT_ME = '/',
}

// Router object
const router = createBrowserRouter([
    {
        path: PATH.ABOUT_ME,
        element: <NavBar />,
        children: [
            {
                path: '',
                element: <AboutMe />,
            },
        ],
        errorElement: <div>404 not found</div>,
    },
])

const App = () => {
    return <RouterProvider router={router} />
}

export default App
