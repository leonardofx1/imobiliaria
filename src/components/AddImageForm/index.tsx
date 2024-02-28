'use client'
import { IdType } from '@/app/admin/config/addImage/[imagePropertyId]/page'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useFireBase } from '../hooks/useFireBase'




export const AddImageForm = ({params}:IdType) =>  {
  const {register, handleSubmit} = useForm()
  const {handleAddImage} = useFireBase(params={params})
  console.log(params, 'add')
  return (
    <form onSubmit={handleSubmit(handleAddImage)}>
      <label htmlFor="">
        adicionar imagem
      <input type="file" name="image" id="" multiple {...register('image')} />
      </label>
      <button>ola</button>
    </form>
  )
}
