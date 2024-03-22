import { SearchCard } from './SearchCard'
import { SearchForm } from './SearchForm'
import style from  './style.module.scss'




 const searchPage = () => {


    return (
        <main className={style.main}>
                <SearchForm /> 
                <SearchCard /><SearchCard /><SearchCard />
        </main>
    )
 } 

 export default searchPage