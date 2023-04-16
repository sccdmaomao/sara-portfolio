import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import NavBar from './components/NavBar'
import Contact from './routes/Contact'
import Home from './routes/Home'
import Work from './routes/Work'

export enum PATH {
    ROOT = '/',
    WORK = '/work',
    CONTACT = '/contact',
}

// Router object
const router = createBrowserRouter([
    {
        path: PATH.ROOT,
        element: <NavBar />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: PATH.WORK,
                element: <Work />,
            },
            {
                path: PATH.CONTACT,
                element: <Contact />,
            },
        ],
        errorElement: <div>404 not found</div>,
    },
])

const App = () => {
    return <RouterProvider router={router} />
}

export default App
