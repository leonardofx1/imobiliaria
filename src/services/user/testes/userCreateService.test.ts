import { beforeEach, describe, expect, test } from "vitest";
import type { IUserRepository } from "../../../repository/user/IUserRepository.js";
import { Cryptgraph } from "../../../utils/credentials/cryptograph.js";
import type { IUserCreateService } from "../types/IUserCreateService.js";
import { UserRepositoryMock } from "../../../mock/user/userRepository.Mock.js";
import { UserCreateService } from "../userCreateService.js";
import { CreateUserDto } from "../../../dto/userDto.js";
import { UserAlreadyExists } from "../../../error/user/user.error.js";



describe('Create user', ()=> {

    let mockRepository:IUserRepository
    let bcrypt:Cryptgraph
    let service:IUserCreateService

    beforeEach(()=> {
        mockRepository = new UserRepositoryMock()
        bcrypt = new Cryptgraph()
        service = new UserCreateService(mockRepository,bcrypt)
    })

    test('O usuário deve ser possível se cadastrar.',async()=>  {

        const user = new CreateUserDto('leo','leo@gmail.com','123456',25,"user")
        
         expect(await service.save(user)).toBeTypeOf("string")

    })

    test('Não deve ser possível criar usuários duplicados.',async ()=>{
           const user = new CreateUserDto('leo','leo@gmail.com','123456',25,"user")
           mockRepository.save(user)

           await expect(service.save(user)).rejects.throw(UserAlreadyExists)
    })
})