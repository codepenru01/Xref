import "./Digital.css"

const Digital = () => {
    return (
        <>
            <section className="digital-section">
                    <div className="digital">
                        <div className="container">
                            <div className="digital__inner">
                                <div className="digital__text">
                                    <h3 className="digital__checks">Additional checks</h3>
                                    <h2 className="digital__you">Connecting you to the world of digital trust</h2>
                                    <p className="growing__text">As a growing community of global checking vendors, Trust Marketplace is an aggregator for enhanced due diligence in the online trust environment.</p>
                                    <button className="digital__btn" type="button">Visit website</button>
                                </div>
                                <div className="digital__img">
                                    <img src="../../img/digital.svg" alt="svg" width="645" height="391" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="first">
                        <div className="container">
                            <div className="first__title">
                                <div className="first__lead">
                                    <h2 className="load__title">Security and compliance</h2>
                                    <p className="load__text">We lead with a security-first mindset, a robust infrastructure, and a compliant operating environment.</p>
                                    <a className="load__link" href="#link">Learn more</a>
                                </div>
                                <div className="first__tools">
                                    <h2 className="load__title">Integrations</h2>
                                    <p className="load__text">Integrate Xref with your everyday tools for simplified people management within a single platform.</p>
                                    <a className="load__link" href="#link">Learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default Digital