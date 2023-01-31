import "./Ref.css"

const Ref = () => {
    return (
        <>
            <section className="ref-section">
                <div className="container">
                    <div className="ref">
                        <h3 className="ref__head">Platform</h3>
                        <h2 className="ref__title">Automating your people journey</h2>
                        <div className="ref__img">
                            <img src="../../img/ref.jpg" alt="jpg" width="963" height="471" />
                        </div>
                        <div className="ref__box">
                            <div className="ref__card">
                                <h2 className="ref__more">Survey builder</h2>
                                <p className="ref__text">Create compliant, non-bias surveys in seconds. Choose a Reference or Exit Survey template or build your own from a selection of HR-approved, compliant, non-bias questions.</p>
                                <a className="ref__link" href="#">Learn more</a>
                            </div>
                            <div className="ref__card">
                                <h2 className="ref__more">Automated requests</h2>
                                <p className="ref__text">Receive feedback faster with automated requests. Save time and reduce manual, repetitive tasks with automated survey requests, easily accessible all in one place.</p>
                                <a className="ref__link" href="#">Learn more</a>
                            </div>
                            <div className="ref__card">
                                <h2 className="ref__more">People records</h2>
                                <p className="ref__text">Build strong talent relationships with centralised people records. Person-specific feedback is stored in one place to easily recruit, retain and remember talent.</p>
                                <a className="ref__link" href="#">Learn more</a>
                            </div>
                            <div className="ref__card">
                                <h2 className="ref__more">Insights</h2>
                                <p className="ref__text">Know your next move with people and organisational insights. From an aggregated overview of data to detailed feedback, find the insights you need to make confident business decisions.</p>
                                <a className="ref__link" href="#">Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Ref