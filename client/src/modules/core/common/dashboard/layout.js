import React from "react";
import DashboardHeader from "./DashboardHeader.component";
import DashboardLeftNav from "./DashboardLeftNav.component";

const DashboardLayout = ({ children }) => {
    return (
        <div className="container">
            <div className="row">
                <DashboardLeftNav />

                <div className="col-lg-10 col-md-10 p-0">
                    <div className="dashboard-right-header">
                        <DashboardHeader />
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
