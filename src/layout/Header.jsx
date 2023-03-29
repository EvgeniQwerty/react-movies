function Header() {
    return (
        <header className='header'>
            <nav className='teal'>
                <div className='nav-wrapper'>
                    <a href='#' className='brand-logo'>
                        React Movies
                    </a>
                    <ul id='nav-mobile' className='right hide-on-med-and-down'>
                        <li>
                            <a href='https://github.com/EvgeniQwerty/react-movies'>
                                Repo
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export { Header };
