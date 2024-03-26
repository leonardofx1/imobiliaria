'use client'
import { IdType } from '@/app/admin/config/addImage/[imagePropertyId]/page'
import React from 'react'
import { useForm } from 'react-hook-form'
import { handleAddImage } from '../services/firebase'
import style from './style.module.scss'



export const AddImageForm = ({params}:IdType) =>  {
  const {register, handleSubmit} = useForm()
 

  return (
    <form className={style.form} onSubmit={handleSubmit((data) => handleAddImage(data, params))}>
      <label htmlFor="">
        adicionar imagem
      <input type="file"  id="" multiple {...register('image')} />
      </label>
      <button type='submit'> Enviar</button>
    </form>
  )
}
