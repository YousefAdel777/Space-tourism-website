import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import logo from "../assets/shared/logo.svg"
import menuIcon from "../assets/shared/icon-hamburger.svg"
import closeIcon from "../assets/shared/icon-close.svg"

const Navbar = () => {

    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        if (showNav) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "visible";
        }
    }, [showNav]);

    return (
        <div className="navbar w-full flex items-center justify-between py-10 px-4 absolute left-0 top-0 md:px-14 lg:pr-0">
            <div className="logo">
                <img src={logo} alt="Space tourism logo" />
            </div>
            <img onClick={() => setShowNav(!showNav)} className="lg:hidden" src={menuIcon} alt="Burger menu icon" />
            <nav className={showNav ? "show" : ""}>
                <img className="absolute right-6 top-6 lg:hidden" src={closeIcon} alt="close menu icon" onClick={() => setShowNav(false)} />
                <ul className="flex flex-col items-center gap-4 lg:flex-row lg:gap-[2.875rem]">
                    <li>
                        <NavLink to="/" onClick={() => setShowNav(false)}>
                            <span>
                                00
                            </span>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/destination" onClick={() => setShowNav(false)}>
                            <span>
                                01
                            </span>
                            Destination
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/crew" onClick={() => setShowNav(false)}>
                            <span>
                                02
                            </span>
                            Crew
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/technology" onClick={() => setShowNav(false)}>
                            <span>
                                03
                            </span>
                            Technology
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;