import "./Teams.css"

const Teams = () => {
    return (
        <>
            <section className="teams-section">
                <div className="container">
                    <div className="teams">
                        <div className="teams__title">
                            <h3 className="teams__head">For teams</h3>
                            <h2 className="teams__for">Fits seamlessly into your ecosystem</h2>
                            <h3 className="talent__title">Talent acquisition</h3>
                            <p className="talent__text">In a fast-paced market, efficiency and trust are essential for Talent Acquisition. Data-driven insights can help confident hiring.</p>
                            <a className="talent__link" href="#">Learn more</a>
                            <h2 className="people talent__title">People and culture</h2>
                            <p className="people__text">In a fast-paced, people-driven market, recruiting and retaining talent is a challenge. Data-driven feedback is vital to recruit, retain and remember top talent.</p>
                            <a className="people__link" href="#">Learn more</a>
                            <p className="firms__text">Unbiased, efficient hiring is imperative for staffing and recruitment firms. Fast, data-driven candidate insights can help.</p>
                            <a className="firms__link" href="#">Learn more</a>
                        </div>
                        <div className="teams__img">
                            <img src="../../img/teams.svg" alt="" width="586" height="422" />
                        </div>
                    </div>
                    <div className="needs">
                        <div className="needs__img">
                            <img src="../../img/needs.svg" alt="" width="586" height="422" />
                        </div>
                        <div className="needs__title">
                            <h3 className="needs__head">For industries</h3>
                            <h2 className="needs__unique">Tailored to the unique needs of your industry</h2>
                            <p className="needs__text">At Xref, we're people-focused, so no matter what industry you're in, we cater to your unique needs to provide you with one source of talent truth.</p>
                            <div className="not__all">
                                <div className="not">
                                    <div className="for">
                                        <h2 className="for__title">Not-For-Profit</h2>
                                        <div className="for__img">
                                            <img src="../../img/right.svg" alt="svg" width="12" height="12" />
                                        </div>
                                    </div>
                                    <div className="for">
                                        <h2 className="for__title">Health and Aged Care</h2>
                                        <div className="for__img">
                                            <img src="../../img/right.svg" alt="svg" width="12" height="12" />
                                        </div>
                                    </div>
                                    <div className="for">
                                        <h2 className="for__title">Government</h2>
                                        <div className="for__img">
                                            <img src="../../img/right.svg" alt="svg" width="12" height="12" />
                                        </div>
                                    </div>
                                </div>
                                <div className="retail__title">
                                    <div className="retail for">
                                        <h2 className="retail__head for__title">Retail</h2>
                                        <div className="for__img">
                                            <img src="../../img/right.svg" alt="svg" width="12" height="12" />
                                        </div>
                                    </div>
                                    <div className="retail for">
                                        <h2 className="retail__head for__title">Hospitality</h2>
                                        <div className="for__img">
                                            <img src="../../img/right.svg" alt="svg" width="12" height="12" />
                                        </div>
                                    </div>
                                    <div className="retail for">
                                        <h2 className="retail__head for__title">Construction</h2>
                                        <div className="for__img">
                                            <img src="../../img/right.svg" alt="svg" width="12" height="12" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Teams