import "./Navbar2.css";

const NavBar2 = ({ sidebarOpen, openSidebar }) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars"></i>
            </div>
            <div className="navbar__left">
                <a href="/">Profile</a>
                <a href="/">Search</a>
                <a className="active_link" href="/">Settings</a>
            </div>
            <div className="navbar__right">
                <a href="/">
                    <i className="fa fa-search"></i>
                </a>
                <a href="/">
                    <i className="fa fa-clock-o"></i>
                </a>
            </div>
        </nav>
    )
}

export default NavBar2;