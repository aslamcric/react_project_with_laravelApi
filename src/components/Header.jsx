import React from 'react'

const Header = () => {
    return (
        <><div className="navbar-custom">
            <div className="topbar container-fluid">
                <div className="d-flex align-items-center gap-1">
                    {/* Topbar Brand Logo */}
                    <div className="logo-topbar">
                        {/* Logo light */}
                        <a href="index.html" className="logo-light">
                            <span className="logo-lg">
                                <img src="assets/images/logo.png" alt="logo" />
                            </span>
                            <span className="logo-sm">
                                <img src="assets/images/logo-sm.png" alt="small logo" />
                            </span>
                        </a>
                        {/* Logo Dark */}
                        <a href="index.html" className="logo-dark">
                            <span className="logo-lg">
                                <img src="assets/images/logo-dark.png" alt="dark logo" />
                            </span>
                            <span className="logo-sm">
                                <img src="assets/images/logo-sm.png" alt="small logo" />
                            </span>
                        </a>
                    </div>
                    {/* Sidebar Menu Toggle Button */}
                    <button className="button-toggle-menu">
                        <i className="ri-menu-line" />
                    </button>
                    {/* Horizontal Menu Toggle Button */}
                    <button className="navbar-toggle" data-bs-toggle="collapse" data-bs-target="#topnav-menu-content">
                        <div className="lines">
                            <span />
                            <span />
                            <span />
                        </div>
                    </button>
                    {/* Topbar Search Form */}
                    <div className="app-search d-none d-lg-block">
                        <form>
                            <div className="input-group">
                                <input type="search" className="form-control" placeholder="Search..." />
                                <span className="ri-search-line search-icon text-muted" />
                            </div>
                        </form>
                    </div>
                </div>
                <ul className="topbar-menu d-flex align-items-center gap-3">
                    <li className="dropdown d-lg-none">
                        <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <i className="ri-search-line fs-22" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-animated dropdown-lg p-0">
                            <form className="p-3">
                                <input type="search" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                            </form>
                        </div>
                    </li>
                    <li className="dropdown">
                        <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <img src="assets/images/flags/us.jpg" alt="user-image" className="me-0 me-sm-1" height={12} />
                            <span className="align-middle d-none d-lg-inline-block">English</span> <i className="ri-arrow-down-s-line d-none d-sm-inline-block align-middle" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated">
                            {/* item*/}
                            <a href="javascript:void(0);" className="dropdown-item">
                                <img src="assets/images/flags/germany.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">German</span>
                            </a>
                            {/* item*/}
                            <a href="javascript:void(0);" className="dropdown-item">
                                <img src="assets/images/flags/italy.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">Italian</span>
                            </a>
                            {/* item*/}
                            <a href="javascript:void(0);" className="dropdown-item">
                                <img src="assets/images/flags/spain.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">Spanish</span>
                            </a>
                            {/* item*/}
                            <a href="javascript:void(0);" className="dropdown-item">
                                <img src="assets/images/flags/russia.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">Russian</span>
                            </a>
                        </div>
                    </li>
                    <li className="dropdown notification-list">
                        <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <i className="ri-mail-line fs-22" />
                            <span className="noti-icon-badge badge text-bg-purple">4</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg py-0">
                            <div className="p-2 border-top-0 border-start-0 border-end-0 border-dashed border">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h6 className="m-0 fs-16 fw-semibold"> Messages</h6>
                                    </div>
                                    <div className="col-auto">
                                        <a href="javascript: void(0);" className="text-dark text-decoration-underline">
                                            <small>Clear All</small>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div style={{ maxHeight: 300 }} data-simplebar>
                                {/* item*/}
                                <a href="javascript:void(0);" className="dropdown-item p-0 notify-item read-noti card m-0 shadow-none">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <div className="notify-icon">
                                                    <img src="assets/images/users/avatar-1.jpg" className="img-fluid rounded-circle" alt />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 text-truncate ms-2">
                                                <h5 className="noti-item-title fw-semibold fs-14">Cristina Pride <small className="fw-normal text-muted float-end ms-1">1 day ago</small></h5>
                                                <small className="noti-item-subtitle text-muted">Hi, How are you? What about our
                                                    next meeting</small>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                {/* item*/}
                                <a href="javascript:void(0);" className="dropdown-item p-0 notify-item read-noti card m-0 shadow-none">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <div className="notify-icon">
                                                    <img src="assets/images/users/avatar-2.jpg" className="img-fluid rounded-circle" alt />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 text-truncate ms-2">
                                                <h5 className="noti-item-title fw-semibold fs-14">Sam Garret <small className="fw-normal text-muted float-end ms-1">2 day ago</small></h5>
                                                <small className="noti-item-subtitle text-muted">Yeah everything is fine</small>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                {/* item*/}
                                <a href="javascript:void(0);" className="dropdown-item p-0 notify-item read-noti card m-0 shadow-none">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <div className="notify-icon">
                                                    <img src="assets/images/users/avatar-3.jpg" className="img-fluid rounded-circle" alt />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 text-truncate ms-2">
                                                <h5 className="noti-item-title fw-semibold fs-14">Karen Robinson <small className="fw-normal text-muted float-end ms-1">2 day ago</small></h5>
                                                <small className="noti-item-subtitle text-muted">Wow that's great</small>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                {/* item*/}
                                <a href="javascript:void(0);" className="dropdown-item p-0 notify-item read-noti card m-0 shadow-none">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <div className="notify-icon">
                                                    <img src="assets/images/users/avatar-4.jpg" className="img-fluid rounded-circle" alt />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 text-truncate ms-2">
                                                <h5 className="noti-item-title fw-semibold fs-14">Sherry Marshall <small className="fw-normal text-muted float-end ms-1">3 day ago</small></h5>
                                                <small className="noti-item-subtitle text-muted">Hi, How are you? What about our
                                                    next meeting</small>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                {/* item*/}
                                <a href="javascript:void(0);" className="dropdown-item p-0 notify-item read-noti card m-0 shadow-none">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <div className="notify-icon">
                                                    <img src="assets/images/users/avatar-5.jpg" className="img-fluid rounded-circle" alt />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 text-truncate ms-2">
                                                <h5 className="noti-item-title fw-semibold fs-14">Shawn Millard <small className="fw-normal text-muted float-end ms-1">4 day ago</small></h5>
                                                <small className="noti-item-subtitle text-muted">Yeah everything is fine</small>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            {/* All*/}
                            <a href="javascript:void(0);" className="dropdown-item text-center text-primary text-decoration-underline fw-bold notify-item border-top border-light py-2">
                                View All
                            </a>
                        </div>
                    </li>
                    <li className="dropdown notification-list">
                        <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <i className="ri-notification-3-line fs-22" />
                            <span className="noti-icon-badge badge text-bg-pink">3</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg py-0">
                            <div className="p-2 border-top-0 border-start-0 border-end-0 border-dashed border">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h6 className="m-0 fs-16 fw-semibold"> Notification</h6>
                                    </div>
                                    <div className="col-auto">
                                        <a href="javascript: void(0);" className="text-dark text-decoration-underline">
                                            <small>Clear All</small>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div style={{ maxHeight: 300 }} data-simplebar>
                                {/* item*/}
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-primary-subtle">
                                        <i className="mdi mdi-comment-account-outline text-primary" />
                                    </div>
                                    <p className="notify-details">Caleb Flakelar commented on Admin
                                        <small className="noti-time">1 min ago</small>
                                    </p>
                                </a>
                                {/* item*/}
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-warning-subtle">
                                        <i className="mdi mdi-account-plus text-warning" />
                                    </div>
                                    <p className="notify-details">New user registered.
                                        <small className="noti-time">5 hours ago</small>
                                    </p>
                                </a>
                                {/* item*/}
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-danger-subtle">
                                        <i className="mdi mdi-heart text-danger" />
                                    </div>
                                    <p className="notify-details">Carlos Crouch liked
                                        <small className="noti-time">3 days ago</small>
                                    </p>
                                </a>
                                {/* item*/}
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-pink-subtle">
                                        <i className="mdi mdi-comment-account-outline text-pink" />
                                    </div>
                                    <p className="notify-details">Caleb Flakelar commented on Admi
                                        <small className="noti-time">4 days ago</small>
                                    </p>
                                </a>
                                {/* item*/}
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-purple-subtle">
                                        <i className="mdi mdi-account-plus text-purple" />
                                    </div>
                                    <p className="notify-details">New user registered.
                                        <small className="noti-time">7 days ago</small>
                                    </p>
                                </a>
                                {/* item*/}
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-success-subtle">
                                        <i className="mdi mdi-heart text-success" />
                                    </div>
                                    <p className="notify-details">Carlos Crouch liked <b>Admin</b>.
                                        <small className="noti-time">Carlos Crouch liked</small>
                                    </p>
                                </a>
                            </div>
                            {/* All*/}
                            <a href="javascript:void(0);" className="dropdown-item text-center text-primary text-decoration-underline fw-bold notify-item border-top border-light py-2">
                                View All
                            </a>
                        </div>
                    </li>
                    <li className="d-none d-sm-inline-block">
                        <a className="nav-link" data-bs-toggle="offcanvas" href="#theme-settings-offcanvas">
                            <i className="ri-settings-3-line fs-22" />
                        </a>
                    </li>
                    <li className="d-none d-sm-inline-block">
                        <div className="nav-link" id="light-dark-mode">
                            <i className="ri-moon-line fs-22" />
                        </div>
                    </li>
                    <li className="dropdown">
                        <a className="nav-link dropdown-toggle arrow-none nav-user" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <span className="account-user-avatar">
                                <img src="assets/images/users/avatar-1.jpg" alt="user-image" width={32} className="rounded-circle" />
                            </span>
                            <span className="d-lg-block d-none">
                                <h5 className="my-0 fw-normal">Aslam <i className="ri-arrow-down-s-line d-none d-sm-inline-block align-middle" /></h5>
                            </span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated profile-dropdown">
                            {/* item*/}
                            <div className=" dropdown-header noti-title">
                                <h6 className="text-overflow m-0">Welcome !</h6>
                            </div>
                            {/* item*/}
                            <a href="pages-profile.html" className="dropdown-item">
                                <i className="ri-account-circle-line fs-18 align-middle me-1" />
                                <span>My Account</span>
                            </a>
                            {/* item*/}
                            <a href="pages-profile.html" className="dropdown-item">
                                <i className="ri-settings-4-line fs-18 align-middle me-1" />
                                <span>Settings</span>
                            </a>
                            {/* item*/}
                            <a href="pages-faq.html" className="dropdown-item">
                                <i className="ri-customer-service-2-line fs-18 align-middle me-1" />
                                <span>Support</span>
                            </a>
                            {/* item*/}
                            <a href="auth-lock-screen.html" className="dropdown-item">
                                <i className="ri-lock-password-line fs-18 align-middle me-1" />
                                <span>Lock Screen</span>
                            </a>
                            {/* item*/}
                            <a href="auth-logout-2.html" className="dropdown-item">
                                <i className="ri-logout-box-line fs-18 align-middle me-1" />
                                <span>Logout</span>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>


        </>
    )
}

export default Header