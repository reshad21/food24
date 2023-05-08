import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Loggin from "../Shared/Loggin/Loggin";
import Signin from "../Shared/Signin/Signin";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <Signin></Signin>
            },
            {
                path: '/login',
                element: <Loggin></Loggin>
            },
        ]
    },
]);

export default router;