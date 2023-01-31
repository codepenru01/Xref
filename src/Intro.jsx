import './Intro.css'

const Intro = () => {
    return (
        <>
            <section className='intro-section'>
                <div className="container">
                    <div className="intro">
                        <div className="intro__head">
                            <div className="all">
                                <div className="xref">
                                    <h3 className='xref__head'>Introducing Xref</h3>
                                    <h2 className='xref__title'>Get feedback across the entire talent journey</h2>
                                </div>
                                <div className="simple">
                                    <h2 className='simple__title'>Simple</h2>
                                    <p className='simple__text'>Save time: Create and send a survey in as little as 30 seconds. Feedback is compiled in easy to understand graphs for actionable insights.</p>
                                    <h2 className='simple__title'>Convenient</h2>
                                    <p className='simple__text'>Reduce admin: Surveys can be created and completed anywhere, any time, on any device. Let automation do the rest.</p>
                                    <h2 className='simple__title'>Secure</h2>
                                    <p className='simple__text'>Ensure peace of mind: Xref is ISO27001 certified and GDPR compliant so your data is kept safe and secure.</p>
                                </div>
                            </div>
                            <div className="card__box">
                                <div className="card">
                                    <img src="../../img/refer.svg" alt="svg" width="64" height="64" />
                                    <h3 className='card__head'>Reference</h3>
                                    <h2 className='card__title'><span className='soon'>Recruit </span>only the best &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; validated talent.</h2>
                                    <p className='card__text'>Reduce time to hire and secure top talent fast. Make informed, compliant hiring decisions with Xref's automated reference checking software.</p>
                                </div>
                                <div className="card">
                                    <img src="../../img/pulse.svg" alt="svg" width="64" height="64" />
                                    <h3 className='card__head'>Pulse <span className='pulse'>Coming soon</span></h3>
                                    <h2 className='card__title'><span className='soon'>Retain </span>your people and &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; make meaningful</h2>
                                    <p className='card__text'>Want the secret to reduce attrition and understand what metrics your organisation performs well at or can improve upon? Conduct a Pulse Survey.</p>
                                </div>
                                <div className="card">
                                    <img src="../../img/exits.svg" alt="svg" width="64" height="64" />
                                    <h3 className='card__head'>Exits <span className='new'>New</span></h3>
                                    <h2 className='card__title soon'>Remember</h2>
                                    <p className='card__text'>Collect, analyse and measure feedback from departing employees. Reduce attrition and improve retention over time by collecting consistent data to improve organisational performance.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Intro