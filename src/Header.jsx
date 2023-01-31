import './Header.css'

const Header = () => {
    return (
        <>
            <header className='site-header'>
                <div className="container">
                    <div className="header__inner">
                        <div className="box"></div>
                        <ul className="navbar">
                            <li className="navbar__item">
                                <a className="navbar__item-link" href="#link">Why Xref</a>
                                </li>
                            <li className="navbar__item">
                                <a className="navbar__item-link" href="#link">Solutions</a>
                                </li>
                            <li className="navbar__item">
                                <a className="navbar__item-link" href="#link">Platform</a>
                                </li>
                            <li className="navbar__item">
                                <a className="navbar__item-link" href="#link">Resources</a>
                                </li>
                            <li className="navbar__item">
                                <a className="navbar__item-link" href="#link">Pricing</a>
                            </li>
                        </ul>
                        <div className="links">
                            <a className="sign__link" href="#">Sign in</a>
                            <button className="btn__link" type="button">Request a demo</button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header