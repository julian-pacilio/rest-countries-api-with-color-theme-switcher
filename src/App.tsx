import Header from "./components/HeaderComponent"
import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom"

import Country from './pages/CountryDetails';
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainApp/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <HomePage/>,
      },
      {
        path: 'country',
        element: <Outlet/>,
        children: [
          {
            path: ':code',
            element: <Country/>,
          }
        ]
      }
    ]
  }
]);

export default function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export function MainApp() {
    return(
        <>
            <Header />
            <main className="max-w-[1440px] mx-auto my-10 px-5">
                <Outlet />
            </main>
        </>
  )
}