import { createBrowserRouter } from "react-router-dom";

import App from '../App';
import Country from '../pages/Country';
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/country/:id',
    element: <Country/>,
  }
]);