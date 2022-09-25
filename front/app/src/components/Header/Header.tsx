import Nav from "../Nav/Nav"
import styles from "./Header.module.css"


const Header = () => {
    return (
        <header className={styles.header}>
            <Nav></Nav>
        </header>
    )
}

export default Header;