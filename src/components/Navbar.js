import logo from '../images/dyna-01.png'

let Navbar = () => {
    return (
        <div className='karem002'>
            <nav className="navbar">
                <div className='navbarStart'>
                    <a href="">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <div className="navbarEnd">
                    <ul>
                        <li>
                            <a href="#Manufacturers">
                                About us
                            </a>
                        </li>
                        <li>
                            <a href="#Video">
                                Video
                            </a>
                        </li>
                        <li>
                            <a href="#Feedback">
                                Our work
                            </a>
                        </li>
                        <li>
                            <a href="#fotter">
                                Contact
                            </a>
                        </li>
                        <li className='links'>
                            <span class="icon">
                                <span></span>
                                <span></span>
                                <span></span>
                                <ul>
                                    <li>
                                        <a href="#Manufacturers">
                                            About us
                                        </a>
                                    </li>
                                    {/* <li>
                                <a href="#Robots">
                                    Robots
                                </a>
                            </li> */}
                                    <li>
                                        <a href="#Video">
                                            Video
                                        </a>
                                    </li>
                                    {/* <li>
                                <a href="#GrayMatter">
                                    GrayMatter
                                </a>
                            </li> */}
                                    <li>
                                        <a href="#Feedback">
                                            Our Work
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#Demo">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </span>
                        </li>
                    </ul>
                </div>
            </nav >
        </div>
    );
}

export default Navbar