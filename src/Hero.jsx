import './Hero.css'

const Hero = () => {
    return (
        <>
            <section className='hero-section'>
                <div className="container">
                    <div className="hero">
                        <h2 className="hero__title">
                            Recruit, retain and remember your people
                        </h2>
                        <p className="hero__text">
                            Simplify your talent journey and make confident, people-focused decisions with Xref.
                        </p>
                        <div className="hero__demo">
                            <button className='hero__btn' type='button'>Get started for free</button>
                            <a className='hero__link' href="#">Request a demo</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;