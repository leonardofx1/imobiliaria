'use client'
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { db, storage } from "@/utils/firebase/firebaseSdk";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import style from "./style.module.scss";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";

export const Form = () => {
  const { register, handleSubmit, control } = useForm();

  const onSubmit = async  (data) => {
    console.log(data);
    const docRef = collection(db, 'property')
    const addProperty  = await addDoc(docRef, data)
    const toUpdateDoc = doc(db, 'property', addProperty.id)
    const res = await  updateDoc(toUpdateDoc,{id: addProperty.id} )

  };

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h2 className={style.title}>Adicionar Imóvel </h2>

        <div className={style.containerTypeProperty}>
          <strong>Seu Imóvel è:</strong>
          <label htmlFor="">
            <input type="radio" {...register("tipoImovel")} value="Terreno" />
            Terreno
          </label>
          <label htmlFor="">
            <input type="radio" {...register("tipoImovel")} value="Imovel" />
            Imóvel
          </label>
        </div>
        <section>
          <div className={style.containerCep}>
            <strong>Onde fica o imóvel?</strong>
            <label htmlFor="">
              Cep
              <input type="text" {...register("cep")} placeholder="00000-000" />
            </label>
          </div>
          <div className={style.containerAddress}>
            <div>
              <span>UF</span>
              <Controller
                name="estado"
                control={control}
                render={({ field }) => (
                  <select {...field}>
                    <option value="">Selecione um estado</option>
                    <option value="ac">Acre</option>
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
                )}
              />
            </div>
            <div>
              <span>Cidade</span>
              <input type="text" {...register("cidade")} placeholder="Cidade" />
            </div>
            <div>
              <span>Bairro</span>
              <input type="text" {...register("bairro")} placeholder="Bairro" />
            </div>
            <div>
              <span>Endereço</span>
              <input
                type="text"
                {...register("endereco")}
                placeholder="Endereço"
              />
            </div>
            <div>
              <span>Complemento</span>
              <input
                type="text"
                {...register("complemento")}
                placeholder="Complemento"
              />
            </div>
            <div className={style.addressNumber}>
              <span>Número</span>
              <input type="text" {...register("numero")} placeholder="Numero" />
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
          <textarea
            {...register("descricao")}
            placeholder="descrição"
          ></textarea>
        </section>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};
