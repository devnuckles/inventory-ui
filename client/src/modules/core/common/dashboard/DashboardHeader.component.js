import * as React from "react";

export default function DashboardHeader() {
    return (
        <>
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-10 dashboard-right-header py-5">
                    <div className="row">
                        <div className="col-lg-10 dashboard-right-header-left">
                            <div className="dashboard-header-search">
                                <i class="bi bi-search"></i>
                                <input
                                    type="search"
                                    className="form-control"
                                    id="searchbar"
                                    aria-describedby="searchHelp"
                                    placeholder="Search product, supplier, order"
                                />
                            </div>
                        </div>
                        <div className="col-lg-2 dashboard-right-header-right">
                            <i class="bi bi-bell"></i>
                            <img src="../images/profile-image.png"></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
