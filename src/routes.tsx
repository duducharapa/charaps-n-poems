import { Navigate, RouteObject } from "react-router-dom";

import Home from "./pages/Home";
import PoemView from "./pages/PoemView";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/poem/:id",
        element: <PoemView />,
        errorElement: <Navigate to="/" />
    }
];

export default routes;