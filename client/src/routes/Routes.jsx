import { createBrowserRouter } from "react-router-dom";
import Login from "../modules/platform/users/component/Login.component";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
]);

export default Routes;
