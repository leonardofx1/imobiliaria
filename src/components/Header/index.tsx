import Link from 'next/link'
import style from './style.module.scss'
import { IoMenu } from "react-icons/io5";

export const Header = () => {


    return (
        <header className={style.header}> 
            <nav className={style.nav}>
            <Link href="/">Logo</Link>
            <ul>
                <li><Link href="/">inicio</Link></li>
                <li><Link href="/abount">sobre</Link></li>
                <li><Link href="/contact">contato</Link></li>
            </ul>
                </nav>   
               <span> < IoMenu size={35}/> </span>
        </header>
    )
}