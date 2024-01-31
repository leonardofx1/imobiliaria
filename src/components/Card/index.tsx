
import style from "./style.module.scss";

import casa from '../../../public/casa.jpg'
import Image from "next/image";

export const Card = () => {
  return (
    <>
      <article>
        <ul className={style.cardBody}>
          <li>
            <Image src={casa} alt='casa' height={200} width={200} />
          </li>
          <li>
       
          </li>
        </ul>
      </article>
    
    </>
  );
};
