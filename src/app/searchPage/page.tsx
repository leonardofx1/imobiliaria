import { SearchCard } from './SearchCard'
import { SearchForm } from './SearchForm'
import style from  './style.module.scss'




 const searchPage = () => {


    return (
        <main className={style.main}>
           <div className={style.container}>
                 <SearchForm /> 
                <SearchCard /><SearchCard /><SearchCard />
           </div>
        </main>
    )
 } 

 export default searchPage