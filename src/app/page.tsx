import { MainHome } from "@/components/MainHome";
import style from "./style.module.scss";
export default function Home() {
  return (
    <main className={style.conteinerMain}>
      <MainHome />
    </main>
  );
}
