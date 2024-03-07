import { FaCar } from 'react-icons/fa';
import style from  './style.module.scss'
import { MdOutlineBedroomParent, MdOutlineConstruction } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import casa from  '../../../public/casa.jpg'
export const CardDetail = () => {
    return (
      <section className={style.cardContainer}>
        <article>
          <Link href='/propertyDetails/1'>
          <ul className={style.cardBody}>
            <li>
              <Image className={style.image} unoptimized src={casa} alt='casa' height={200} width={200} />
            </li>
            <div>
                <li className={style.cardTitle}>
                          <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, quam? Dolor voluptatem aspernatur fuga nihil perferendis, illum error laudantium reprehenderit recusandae suscipit. Rem adipisci illo explicabo? Amet, fugit autem? At!</h2>
                          <p>-</p>
                </li>
                <li className={style.cardPrice}>
                  <span>R$ 300,000</span> <span>Venda</span>
                </li>
                <li className={style.rooms}>
                  <span> <FaCar /> 2 Garagens</span>
                  <span> <MdOutlineBedroomParent />4 Cômodos</span>
                  <span>< MdOutlineConstruction  /> 152m² área construida</span>
                </li>
            </div>
          </ul>
        </Link>
        </article>
      
      </section>
    );
  };
  