import{ z} from "zod";



export const createPropertyValidation = z.object( {
    city:z.string().nonempty({message:'informe um nome de cidade válido.'}),
    
    street:z.string().nonempty({message:'Preencha com um nome de rua válido.'}),
    number:z.number().min(1 ,{ message: 'O número do imóvel deve ser maior ou igual a 1.' }),
    area:z.number().positive({message:'Informe qual a área total do imóvel'}),
    bathrooms:z.number().min(1,{message:'informe quantos banheiros há no imóvel.'}),
   
    bedrooms:z.number().min(1,{message:'Informe quantos quartos a no imóvel.'}),
    buildingFloor:z.number().optional().default(0),
    description:z.string().nonempty().min(20,{message:'Informe uma descrição válida do imóvel.'}),
    ownerId:z.string().nonempty({message:'Informe o id do proprietario.'}),
    
    price:z.number().positive({message:'informe o preço do imóvel.'}),
    status:z.string().min(4,{message:'Informe um status válido das opções disponíveis.'}),
    title:z.string().nonempty({message:'informe um título válido'}),
    vacanciesGarage:z.number().default(0)


})
export const maxAndMinProeprtyPrices = z.object({
    valueMin:z.number().default(0),
    valueMax:z.number().default(100000000)
})
export type TMaxAndMinProeprtyPrices = z.infer<typeof maxAndMinProeprtyPrices>
export const numberMinAndMaxOfGaragens =z.object({
    numberMinOfGaragens:z.number().default(0),
    numberMaxOfGaragens:z.number().default(30)
})

export type TNumberMinAndMaxOfGaragens = z.infer<typeof numberMinAndMaxOfGaragens>