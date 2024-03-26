import Image from "next/image"
import casa from '../../../public/casa.jpg'
import style from './style.module.scss'
import Link from "next/link"

 export const  SearchBar = () => {



    return (

        <form >
           <Link href='/searchPage'> <div className={style.containerSearch}>   <input type="text" placeholder="pesquisar" /><button>Pesquisar</button></div></Link>
        </form>
        
    )
}