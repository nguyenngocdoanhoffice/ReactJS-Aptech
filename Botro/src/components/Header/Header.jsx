import Logo from './Logo'
import Menu from './Menu'
import './Header.css'
function Header() {
    return (
        <>
            <div className="header">
                <Logo />
                <Menu />
            </div>
        </>
    )
}

export default Header