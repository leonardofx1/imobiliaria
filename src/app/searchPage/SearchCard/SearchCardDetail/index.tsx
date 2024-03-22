import { FaCar } from 'react-icons/fa';
import style from  './style.module.scss'
import { MdOutlineBedroomParent, MdOutlineConstruction } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import casa from  '../../../public/casa.jpg'
import { SwiperDetails } from '../../../../components/SwiperDetails';
export const SearchCardDetail = () => {
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
                          <p>São Paulo - Sp</p>
                </li>
                <li>
                  <span  className={style.cardPrice}>R$ 300,000</span> <span className={style.typeProperty}>Venda</span>
                </li>
                <li className={style.rooms}>
                  <span className={style.typeProperty}> <FaCar /> 2 Garagens</span>
                  <span className={style.typeProperty}> <MdOutlineBedroomParent />4 Cômodos</span>
                  <span className={style.typeProperty}>< MdOutlineConstruction  /> 152m² área construida</span>
                </li>
            </div>
          </ul>
        </Link>
        </article>
      
      </section>
    );
  };
  