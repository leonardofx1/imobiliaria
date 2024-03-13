"use client";
import Link from "next/link";
import style from "./style.module.scss";
import { IoMenu } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import whatssapp from "../../../public/whatssapp.png";
import logo from "../../../public/logo.png";
import Image from "next/image";
export const Header = () => {
  const refHeader = useRef(null);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const headerTop = refHeader.current.getBoundingClientRect().top;
      setIsAtTop(headerTop == 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header ref={refHeader} className={style.header}>
      <nav className={`${isAtTop ? style.nav : style.navAbsolute}`}>
        <Link href="/"><Image src={logo} height={80} width={80} alt="logo-imobiliária"  quality={100} unoptimized/> </Link>
        <ul>
          <li>
            <Link href="/">inicio</Link>
          </li>
          <li>
            <Link href="/abount">sobre</Link>
          </li>
          <li>
            <Link href="/contact">contato</Link>
          </li>
        </ul>
        <button className={style.containerWhats}>
        
          <Image
            src={whatssapp}
            height={30}
            width={30}
            alt="casa"
            unoptimized
            quality={100}
          />
        </button>
      </nav>
      <span>
        {" "}
        <IoMenu size={35} />{" "}
      </span>
    </header>
  );
};
