import style from "./style.module.scss";

export const SearchForm = () => {
  return (
    <form action="" className={style.form}>
      <input type="text" placeholder="Valor mínimo" />
      <input type="text" placeholder="Valor máximo" />
      <input type="text" placeholder=" Cidade, Estado..." />
      <button>Buscar</button>
    </form>
  );
};
