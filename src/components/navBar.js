import Script from "../assets/script";

const NavBar = () => {

    const { scrolled } = Script()

    return (
        <nav className={scrolled > 100 ? "navbar" : "navbar navbar-bg-blur"}>
            <div className="navmenu">
                <div className="navitem fadeInDown delay-100ms">
                    <a href="#about" className="navlink">About</a>
                </div>
                <div className="navitem fadeInDown delay-200ms">
                    <a href="#project" className="navlink">Project</a>
                </div>
                <div className="navitem fadeInDown delay-500ms">
                    <a href="#contact" className="navlink">Contact</a>
                </div>
                <div className="navitem fadeInDown delay-500ms">
                    <a href="https://drive.google.com/file/d/1vzQN_hhRQTSqkmLApMwVYqr_4HR-vTPa/view?usp=drive_link" target="_blank" className="navlinkcv">See My CV</a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;