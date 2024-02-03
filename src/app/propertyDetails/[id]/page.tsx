import Image from 'next/image';
import casa from '../../../../public/casa.jpg'
import style from   './style.module.scss'
import { SwiperDetails } from '@/components/SwiperDetails';

const PropertyDetails = ({params} : {params: {id:string}})=> {

     return (
         
         <main className={style.containerMain}>
            <section>
                <SwiperDetails />
            </section>
        </main>
     )

}

export default PropertyDetails