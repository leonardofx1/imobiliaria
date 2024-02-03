
import style from "./style.module.scss";

import casa from '../../../public/casa.jpg'
import Image from "next/image";
import { FaCar } from "react-icons/fa";
import { MdOutlineBedroomParent, MdOutlineConstruction  } from "react-icons/md";
import Link from "next/link";


export const Card = () => {
  return (
    <>
      <article>
        <Link href='/propertyDetails/1'>
        <ul className={style.cardBody}>
          <li>
            <Image unoptimized src={casa} alt='casa' height={200} width={200} />
          </li>
          <li className={style.cardTitle}>
        <h2>Casa Sobrado em Irecê/BA</h2>
        <p>Irecê - Bahia</p>
          </li>
          <li className={style.cardPrice}>
            <span>R$ 300,000</span> <span>Venda</span>
          </li>
          <li className={style.rooms}>
            <span> <FaCar /> 2 Garagens</span>
            <span> <MdOutlineBedroomParent />4 Cômodos</span>
            <span>< MdOutlineConstruction  /> área construida</span>
          </li>
        </ul>
      </Link>
      </article>
    
    </>
  );
};
