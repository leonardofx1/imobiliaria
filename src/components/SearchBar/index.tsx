import Image from "next/image"
import casa from '../../../public/casa.jpg'
import style from './style.module.scss'

 export const  SearchBar = () => {



    return (

        <form >
            <div className={style.containerSearch}>   <input type="text" placeholder="pesquisar" /><button>Pesquisar</button></div>
        </form>
        
    )
}