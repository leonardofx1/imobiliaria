
import style from "./style.module.scss";
import { SearchBar } from "../SearchBar";
import { Card } from '../Card/index';
import {collection, getDocs} from "firebase/firestore"
import { db } from "@/utils/firebase/firebaseSdk";
import { CardDetail } from "../CardDetail";

export interface Property {
  bairro: string;
  cep: string;
  cidade: string;
  complemento: string;
  descricao: string;
  endereco: string;
  estado: string;
  id: string;
  imageUrls: string[];
  numero: string;
  tipoImovel: string;
}
export const MainHome = async () => {
  const snap= await getDocs(collection(db, "property"))
    const dataProperty:Property[] = snap.docs.map((item) => item.data() as Property)

  return (
    <>
    
      <SearchBar />
      <section className={style.propertiesFeatured}>
        <h1>Imóveis em destaque</h1>
        <CardDetail />
        {dataProperty?.map( (data:Property) => <Card {...data} />)}
      </section>
    </>
  );
};
