import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import NavBar from './components/NavBar'
import Bosideng from './routes/Bosideng'
import Capcom from './routes/Capcom'
import Capstone from './routes/Capstone'
import Contact from './routes/Contact'
import Home from './routes/Home'

export enum PATH {
    ROOT = '/',
    WORK = '/work',
    CONTACT = '/contact',
    CAPSTONE = '/work/capstone-playwood',
    CAPCOM = '/work/brand-book-capcom',
    BOSIDENG = '/work/bosideng-garment-design',
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
                element: <Home />,
            },
            {
                path: PATH.CONTACT,
                element: <Contact />,
            },
            { path: PATH.CAPCOM, element: <Capcom /> },
            { path: PATH.CAPSTONE, element: <Capstone /> },
            { path: PATH.BOSIDENG, element: <Bosideng /> },
        ],
        errorElement: <div>404 not found</div>,
    },
])

const App = () => {
    return <RouterProvider router={router} />
}

export default App
