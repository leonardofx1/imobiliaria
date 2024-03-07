import { MainHome } from "@/components/MainHome";
import style from "./style.module.scss";
import Image from "next/image";
import casa from "../../public/casa.jpg";
export default function Home() {
  return (
    <main>
        <section className={style.containerImg}>
        <Image src={casa} alt="casa" unoptimized height={500} width={500} />
        <span>aqui você encontra os melhores imovéis.</span>
      </section>
      <div  className={style.conteinerMain}>
      <MainHome />

      </div>
    </main>
  );
}
