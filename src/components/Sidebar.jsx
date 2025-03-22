import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <div className="leftside-menu">
                {/* Brand Logo Light */}
                <a href="http://localhost:5173/" className="logo logo-light">
                    <span className="logo-lg">
                        <img src="assets/images/logo.png" alt="logo" />
                    </span>
                    <span className="logo-sm">
                        <img src="assets/images/logo-sm.png" alt="small logo" />
                    </span>
                </a>
                {/* Brand Logo Dark */}
                <a href="index.html" className="logo logo-dark">

                    <span className="logo-lg">
                        <img src="assets/images/logo-dark.png" alt="dark logo" />
                    </span>
                    <span className="logo-sm">
                        <img src="assets/images/logo-sm.png" alt="small logo" />
                    </span>
                </a>
                {/* Sidebar -left */}
                <div className="h-100" id="leftside-menu-container" data-simplebar>
                    {/*- Sidemenu */}



                    <ul className="side-nav">
                        {/* <li class="side-nav-title">Main</li> */}
                        <li className="side-nav-item">
                            <a href="http://localhost:5173/" className="side-nav-link">
                                <i className="ri-dashboard-3-line" />
                                <span className="badge bg-success float-end">9+</span>
                                <span> Dashboard </span>
                            </a>
                        </li>
                        <li className="side-nav-title">Management</li>


                        {/* Inventory Management Menu */}
                        <li className="side-nav-item">
                            <a data-bs-toggle="collapse" href="#sidebarBaseUI" aria-expanded="false" aria-controls="sidebarBaseUI" className="side-nav-link">
                                {/* <i class="ri-briefcase-line"></i> */}
                                <i className="fa-solid fa-book" />
                                <span>Inventory</span>
                                <span className="menu-arrow" />
                            </a>
                            <div className="collapse" id="sidebarBaseUI">
                                <ul className="side-nav-second-level">
                                    <li>
                                        <NavLink to="/product">View All Product</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/">Create Product</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/">Category</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>


                        {/* Stock Management Menu */}
                        <li className="side-nav-item">
                            <a data-bs-toggle="collapse" href="#sidebarExtendedUI" aria-expanded="false" aria-controls="sidebarExtendedUI" className="side-nav-link">
                                <i className="fas fa-users" />
                                <span> Stock </span>
                                <span className="menu-arrow" />
                            </a>
                            <div className="collapse" id="sidebarExtendedUI">
                                <ul className="side-nav-second-level">
                                    <li>
                                        <NavLink to="/stock">Manage Stock</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>


                        {/* Order Menu */}
                        <li className="side-nav-item">
                            <a data-bs-toggle="collapse" href="#borrows" aria-expanded="false" aria-controls="borrows" className="side-nav-link">
                                <i className="fas fa-hand-holding" />
                                <span>Orders</span>
                                <span className="menu-arrow" />
                            </a>
                            <div className="collapse" id="borrows">
                                <ul className="side-nav-second-level">
                                    <li>
                                        <NavLink to="/order">Order</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/">Order Details</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>


                        {/* Purchase Menu */}
                        <li className="side-nav-item">
                            <a data-bs-toggle="collapse" href="#return" aria-expanded="false" aria-controls="return" className="side-nav-link">
                                <i className="fas fa-hand-holding" />
                                <span>Purchases</span>
                                <span className="menu-arrow" />
                            </a>
                            <div className="collapse" id="return">
                                <ul className="side-nav-second-level">
                                    <li>
                                        <NavLink to="/purchase">Purchase</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/">Purchase Details</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/">Purchase Return</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>



                        {/* Peoples Menu */}
                        <li className="side-nav-item">
                            <a data-bs-toggle="collapse" href="#borrowdetails" aria-expanded="false" aria-controls="borrowdetails" className="side-nav-link">
                                <i className="fas fa-file-alt" />
                                <span>Peoples</span>
                                <span className="menu-arrow" />
                            </a>
                            <div className="collapse" id="borrowdetails">
                                <ul className="side-nav-second-level">
                                    <li>
                                        <NavLink to="/customer">Customers</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/supplier">Suppliers</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>


                        {/* Reports Menu */}
                        <li className="side-nav-item">
                            <a data-bs-toggle="collapse" href="#sidebarCharts" aria-expanded="false" aria-controls="sidebarCharts" className="side-nav-link">
                                <i className="fas fa-coins" />
                                <span> Reports </span>
                                <span className="menu-arrow" />
                            </a>
                            <div className="collapse" id="sidebarCharts">
                                <ul className="side-nav-second-level">
                                    <li>
                                        <NavLink to="/">Orders Report</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/">Purchase Report</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/">Stock Report</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        {/* Exit Menu */}
                        <li className="side-nav-item mb-5">
                            <a data-bs-toggle="collapse" href="#sidebarPagesAuth" aria-expanded="false" aria-controls="sidebarPagesAuth" className="side-nav-link">
                                <i className="fas fa-arrow-right-from-bracket" />
                                <span> Exit </span>
                                <span className="menu-arrow" />
                            </a>
                            <div className="collapse" id="sidebarPagesAuth">
                                <ul className="side-nav-second-level">
                                    <li className="mb-5">
                                        <a href="<?php echo $base_url ?>/logout.php">Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>













                    {/*- End Sidemenu */}
                    <div className="clearfix" />
                </div>
            </div>


        </>
    )
}

export default Sidebar