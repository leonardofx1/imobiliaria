import style from "./style.module.scss";
import {SearchCardDetail } from "@/app/searchPage/SearchCard/SearchCardDetail";
export const SearchCard = () => {
  return (
    <section className={style.containerCard}>
      <SearchCardDetail />
   
    </section>
  );
};
