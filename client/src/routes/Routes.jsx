import { createBrowserRouter } from "react-router-dom";
import Login from "../modules/platform/users/component/Login.component";
import DashboardHeader from "../modules/core/common/dashboard/DashboardHeader.component";
import DashboardLayout from "../modules/core/common/dashboard/layout";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/dashboard",
        element: (
            <DashboardLayout>
                <p>Hello</p>
            </DashboardLayout>
        ),
    },
]);

export default Routes;
