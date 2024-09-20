const Portfolio = () => {
    return (
        <div className="container text-center">
            <div className="row row-cols-2 py-5 ">
                <div className="col py-5">
                    <div>
                    <img src="../src/assets/weatherDashboardReadMERender.png" className="card-img-top w-75 d-flex align-items-center" alt="Weather Dashboard" />
                        <div className="card-body">
                            <p className="card-text">
                                <a href="https://xchrisxwilliamsx.github.io/weather-dashboard/" target="_blank">Weather Dashboard</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col py-5">
                    <div>
                    <img src="../src/assets/Screenshot 2024-09-19 152319.png" className="card-img-top w-75" alt="Regex Tutorial" />
                        <div className="card-body">
                            <p className="card-text">
                                <a href="https://github.com/xChrisxWilliamsx/a-regex-tutorial" target="_blank">Regex Tutorial</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col py-5">
                    <div>
                    <img src="../src/assets/Screenshot 2024-09-19 152440.png" className="card-img-top w-75" alt="Note Taker" />
                        <div className="card-body">
                            <p className="card-text">
                                <a href="https://note-taker-7rff.onrender.com/" target="_blank">Note Taker</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col py-5">
                    <div>
                    <img src="../src/assets/firstBlogReadMeRender.gif" className="card-img-top w-75" alt="A Dev Blog" />
                        <div className="card-body">
                            <p className="card-text">
                                <a href="https://xchrisxwilliamsx.github.io/first-blog" target="_blank">A Dev Blog</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;