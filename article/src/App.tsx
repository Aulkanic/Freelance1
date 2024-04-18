import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RouterUrl } from './routes';
import { Private, Public } from './layout';
import './App.css'
import { ItemDetails, Login, MainPage } from './pages';

function App() {
  const router = createBrowserRouter([
    {
      path: RouterUrl.login,
      element: <Public />,
      children:[
        {
          path: RouterUrl.login,
          element:<Login />
        },
      ]
    },
    {
      path: RouterUrl.login,
      element: <Private />,
      children:[
        {path:RouterUrl.mainPage,element:<MainPage/>},
        {path:RouterUrl.PhotoInfo,element:<ItemDetails/>},
      ]
    },
  ])
  return (
    <RouterProvider router={router} fallbackElement={<h6>Loading...</h6>} />
  )
}

export default App
