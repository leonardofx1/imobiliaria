



export const InputForm = ({register, nameRegister, type="text", placeholder, label})=> {


    return (<>
         <label>{label}</label>
         <input type={type} {...register(nameRegister)} placeholder={placeholder} />
    </>)
}