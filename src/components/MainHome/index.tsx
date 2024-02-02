import Image from "next/image";
import casa from "../../../public/casa.jpg";
import style from "./style.module.scss";
import { SearchBar } from "../SearchBar";
import { Card } from '../Card/index';

export const MainHome = () => {
  return (
    <>
      <section className={style.containerImg}>
        <Image src={casa} alt="casa" unoptimized height={500} width={500} />
        <span>aqui você encontra os melhores imovéis.</span>
      </section>
      <SearchBar />
      <section className={style.propertiesFeatured}>
        <h1>Imóveis em destaque</h1>
        <Card />
        <Card />   <Card />   <Card />
        <Card />   <Card />   <Card />
      </section>
    </>
  );
};
