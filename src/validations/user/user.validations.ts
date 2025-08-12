import * as z from 'zod' 

export const createUserValidation = z.object({
    name:z.string().min(3,{message:'O nome deve ter no mínimo de 3 caracteres.'}),
    email: z.email({message:'Formato de e-mail inválido.'}),
    password:z.string().min(5,{message:'a senha deve conter o mínimo de 5 caracteres.'}).nonempty(),
    age:z.number().min(18, {message:'O usuário deve ter idade superior a 18 anos'}),
    role:z.enum(['user', 'admin']).default('user')

})