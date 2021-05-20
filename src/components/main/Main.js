import "./Main.css";

const Main = () => {
    return (
        <main>
            <div className="main_container">
                <div className="main__title">
                    <div className="main__greeting">
                        <h1>Hello</h1>
                        <p>Welcome to your Dashboard</p>
                    </div>
                </div>

                <div className="main__cards">

                    <div className="card">
                        <i className="fa fa-user-o fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Calendar 1</p>
                            <span className="font-bold text-title">Calendar 1</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-calendar fa-2x text-red"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Calendar 2</p>
                            <span className="font-bold text-title">Calendar 2</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-video camera fa-2x text-yellow"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Calendar 3</p>
                            <span className="font-bold text-title">Calendar 3</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-thumb-up fa-2x text-green"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Calendar 4</p>
                            <span className="font-bold text-title">Calendar 4</span>
                        </div>
                    </div>
                </div>

                <p>
                    
                    <a href="/Events">Check out your saved events!</a>
                </p>
                
            </div>
        </main>

    )
}

export default Main;