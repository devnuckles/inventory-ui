import DashboardHeader from "./modules/core/common/dashboard/DashboardHeader.component";
import DashboardLeftNav from "./modules/core/common/dashboard/DashboardLeftNav.component";
import Login from "./modules/platform/users/component/Login.component";
import SignUp from "./modules/platform/users/component/SignUp.component";

function App() {
    return (
        <div className="App">
            {/* <Login /> */}
            {/* <DashboardHeader /> */}
            <DashboardLeftNav />
        </div>
    );
}

export default App;
