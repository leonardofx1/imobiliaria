

import style from "./style.module.scss";
import { SearchBar } from "../SearchBar";
import { Card } from '../Card/index';

import { CardDetail } from "../CardDetail";
import { getPropertys } from "../services/firebase";


export const MainHome = async () => {
  
  const res = await getPropertys()

  return (
    <>
    
      <SearchBar />
      <section className={style.propertiesFeatured}>
        <h1>Imóveis em destaque</h1>
        <CardDetail />
        {res.map((item, index) =>( <Card key={index as number}  />))}
      
      </section>
    </>
  );
};
