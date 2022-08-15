import styles from '../styles/navbar.module.scss'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div>
            Logo
        </div>

        <div className={styles.links}>
            <Link href="/"><a className={styles.navlink}>Home</a></Link>
            <Link href="/about"><a className={styles.navlink}>About</a></Link>
            <Link href="/services"><a className={styles.navlink}>Services</a></Link>
            <Link href="/contact"><a className={styles.navlink}>Contact</a></Link>
        </div>
    </nav>
  )
}

export default Navbar