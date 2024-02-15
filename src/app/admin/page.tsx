import React from "react";
import style from "./style.module.scss";

const Admin = () => {
  return (
    <form action="" className={style.form}>
      <div>
        <h2 className={style.title}>Adicionar Imóvel </h2>

        <div className={style.containerTypeProperty}>
          <strong>Seu Imóvel è:</strong>
          <label htmlFor="">
            <input type="radio" name="" id="" />
            Terreno
          </label>
          <label htmlFor="">
            <input type="radio" name="" id="" />
            Imóvel
          </label>
        </div>
        <section>
          <div className={style.containerCep}>
          <strong>Onde fica o imóvel?</strong>
          <label htmlFor="">Cep
          <input type="text"  placeholder="00000-000"/> </label>
          </div>
         <div className={style.containerAddress}>
         <div >
            <span>UF</span>
            <select id="estados">
              <option value="">Selecione um estado</option>
              <option value="ac">Acre</option>
              <option value="al">Alagoas</option>
              <option value="ap">Amapá</option>
              <option value="am">Amazonas</option>
              <option value="ba">Bahia</option>
              <option value="ce">Ceará</option>
              <option value="df">Distrito Federal</option>
              <option value="es">Espírito Santo</option>
              <option value="go">Goiás</option>
              <option value="ma">Maranhão</option>
              <option value="mt">Mato Grosso</option>
              <option value="ms">Mato Grosso do Sul</option>
              <option value="mg">Minas Gerais</option>
              <option value="pa">Pará</option>
              <option value="pb">Paraíba</option>
              <option value="pr">Paraná</option>
              <option value="pe">Pernambuco</option>
              <option value="pi">Piauí</option>
              <option value="rj">Rio de Janeiro</option>
              <option value="rn">Rio Grande do Norte</option>
              <option value="rs">Rio Grande do Sul</option>
              <option value="ro">Rondônia</option>
              <option value="rr">Roraima</option>
              <option value="sc">Santa Catarina</option>
              <option value="sp">São Paulo</option>
              <option value="se">Sergipe</option>
              <option value="to">Tocantins</option>
            </select>
          </div>
          <div >
            <span>Cidade</span>
            <input type="text" placeholder="Cidade"/>
          </div>
          <div>
            <span>Bairro</span>
            <input type="text" placeholder="Bairro"/>
          </div>
          <div>
            <span>Endereço</span>
            <input type="text" placeholder="Endereço" />
          </div>
          <div>
            <span>Complemento</span>
            <input type="text"placeholder="Complemento"/>
          </div>
          <div className={style.addressNumber}>
            <span>Número</span>
            <input type="text" placeholder="Numero"/>
          </div>
         </div>
        </section>
        <section className={style.descriptionProperty}>
          <strong>Descreva seu imóvel</strong>
          <p>
            Informe dados para ajudar a valorizar o anúncio, como situação do
            imóvel, pontos fortes do bairro em que se localiza, vizinhança,
            ventilação, iluminação, etc.
          </p>
          <textarea name=""  id="" placeholder="descrição"></textarea>
        </section>
      </div>
      <button>Enviar</button>
    </form>
  );
};

export default Admin;
