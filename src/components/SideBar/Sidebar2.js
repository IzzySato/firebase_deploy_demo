import "./Sidebar2.css";


const Sidebar2 = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <h1>InSync</h1>
                </div>
                <i className="fa fa-times"
                    id="sidebarIcon"
                    onClick={() => closeSidebar()}
                ></i>
            </div>

            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                <i className="fas fa-home"></i>
                    <a href="/">Dashboard</a>
                </div>
                <h2>Calendar</h2>
                <div className="sidebar__link">
                <i className="fas fa-calendar-alt"></i>
                    <a href="/">Daily</a>
                </div>
                <div className="sidebar__link">
                <i className="fas fa-calendar-alt"></i>
                    <a href="/">Weekly</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-wrench"></i>
                    <a href="/">Monthly</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-archive"></i>
                    <a href="/">Profile</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-handshake-o"></i>
                    <a href="/">Friends</a>
                </div>
                <h2>Events</h2>
                <div className="sidebar__link">
                    <i className="fa fa-question"></i>
                    <a href="/">Saved Events</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-sign-out"></i>
                    <a href="/">Friends Events</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-calendar-check-o"></i>
                    <a href="/">Special Days</a>
                </div>
                <div className="sidebar__logout">
                    <i className="fa fa-power-off"></i>
                    <a href="/">Log-off</a>
                </div>
            </div >
        </div >
    );
};

export default Sidebar2;