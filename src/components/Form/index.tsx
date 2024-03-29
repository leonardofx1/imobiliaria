"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";

import style from "./style.module.scss";

import { InputForm } from "./inputForm";

import useCreateProperty from "@/utils/firebase/addProperty";

export interface PropertyType {
  tipoImovel: string;
  cep: string;
  cidade: string;
  bairro: string;
  endereco: string;
  complemento: string;
  numero: string;
  descricao: string;
  estado: string;
}

export const Form = () => {
  const { register, handleSubmit, control } = useForm();

  const { createProperty } = useCreateProperty();
  return (
    <form className={style.form} onSubmit={handleSubmit(createProperty)}>
      <div>
        <h2 className={style.title}>Adicionar Imóvel </h2>

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
                name="state"
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
              <InputForm
                label="Cidade"
                type="text"
                nameRegister="city"
                register={register}
                placeholder="Cidade"
              />
            </div>
            <div>
              <InputForm
                label="Bairro"
                type="text"
                nameRegister="district"
                register={register}
                placeholder="Bairro"
              />
            </div>
            <div>
              <InputForm
                type="text"
                label="Endereço"
                nameRegister="address"
                register={register}
                placeholder="endereço"
              />
            </div>
            <div>
              <InputForm
                type="text"
                label="Complemento"
                nameRegister="complement"
                register={register}
                placeholder="Complemento"
              />
            </div>
            <div className={style.addressNumber}>
              <InputForm
                label="Número"
                type="number"
                nameRegister="number"
                register={register}
                placeholder="Número"
              />
            </div>
            <section className={style.rooms}>
              <div>
                <InputForm
                  label="Área construída "
                  type="number"
                  nameRegister="bultUpArea"
                  register={register}
                  placeholder="Área construída"
                />
              </div>
              <div>
                <InputForm
                  label="Garagens"
                  type="number"
                  nameRegister="garage"
                  register={register}
                  placeholder="Garagem"
                />
              </div>
              <div>
                <InputForm
                  label="cômodos"
                  type="number"
                  nameRegister="rooms"
                  register={register}
                  placeholder="Cômodos"
                />
              </div>
            </section>
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
            {...register("description")}
            placeholder="descrição"
          ></textarea>
        </section>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};
