import { RouterProvider } from 'react-router-dom'
import { StyleSheetManager} from 'styled-components'


import router from './router.jsx'

function App() {
    const themeName = 'light'

    return (

            <StyleSheetManager>
                <RouterProvider router={router} />     
           </StyleSheetManager>

    )
}

export default App