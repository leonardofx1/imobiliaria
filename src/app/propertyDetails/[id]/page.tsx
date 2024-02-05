import style from "./style.module.scss";
import { SwiperDetails } from "@/components/SwiperDetails";

const PropertyDetails = ({ params }: { params: { id: string } }) => {
  return (
    <main className={style.containerMain}>
      <section className={style.containerImg}>
        <SwiperDetails />
      </section>
      <section className={style.containerTitle}>
        <h1>Casa em Condomínio com 5 dormitórios em irecê</h1>
        <br />
        <h2>R$3.216.000 / VENDA</h2>
      </section>
      <section className={style.listOfFeatures}>
          <h3>Cômodos</h3>
        <div>
          <span>5 Dormitórios, sendo 4 suítes</span>{" "}
          <span>1 Sala de jantar</span>
          <span>1 Escritório</span>
          <span>1 Closet</span>
          <span>2 Garagens</span>
          <span>1 Área de serviço</span>
        </div>
      </section>
    </main>
  );
};

export default PropertyDetails;
