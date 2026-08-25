import { useState } from 'react'

function Navbar() {
    const [menuAberto, setMenuAberto] = useState(false)

    return (
        <header className="header_section long_section px-0">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
                <a className="navbar-brand" href="/">
                    <span>LEONARDO MAGRELO</span>
                </a>


                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setMenuAberto(!menuAberto)}
                    aria-expanded={menuAberto}
                    aria-label="Botão de navegação"
                >
                    <span> </span>
                </button>

                <div className={`collapse navbar-collapse ${menuAberto ? 'show' : ''}`}>
                    <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">
                                    home <span className="sr-only"></span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#profile">profile</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolio">portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#bstudio">b.studio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#research">research</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar