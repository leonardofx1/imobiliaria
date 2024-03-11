import Image from "next/image";
import style from "./style.module.scss";
import whatssapp from '../../../../public/whatssapp.png'
import casa from  '../../../../public/casa.jpg'
const PropertyDetails = ({ params }: { params: { id: string } }) => {
  return (
    <main className={style.containerMain}>
      <section className={style.containerImg}>
      <Image src={casa} height={200} width={200} alt="casa" unoptimized quality={100}/> 
      <Image src={casa} height={200} width={200} alt="casa" unoptimized quality={100}/> 

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
      <section className={style.listOfFeatures}>
        <h3>Proximidades</h3>
        <div>
          <span>Proximidades</span> <span>Escola</span>
          <span>Farmácia</span>
          <span>Igreja</span>
          <span>Padaria</span>
          <span>Praça</span>
        </div>
      </section>
      <section className={style.propertyDescription}>
        <h3>Descrição do imóvel</h3>
        <div>
          <p>
            O terreno tem 466,32 e a casa tem de 378,30m² distribuída em 2
            pavimentos, logo ao entrar na casa você se depara com um Hall de
            entrada com pé direito alto e uma bela escada com mezanino, entrando
            terá a sala de estar e jantar integradas com a cozinha, esse
            ambiente conta com portas de vidro que possibilitam integração com a
            área externa. Na cozinha temos uma churrasqueira a carvão.
          </p>
          <p>
            Ainda temos uma lavanderia com acesso separado para a área externa,
            e ao lado da cozinha encontrasse uma despensa.
          </p>
          <p>
            No primeiro andar tem também 1 quarto que pode servir como Home
            Office e um banheiro social.
          </p>
        </div>
      </section>
      <Image className={style.whatsapp} src={whatssapp} height={50} width={50} alt="whatsapp" /> 
    </main>
  );
};

export default PropertyDetails;
