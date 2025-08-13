import type { FastifyReply, FastifyRequest } from "fastify";
import { createUserValidation, loginUserValidate } from "../../validations/user/user.validations.js";

import { CreateUserDto, UserLoginDto } from "../../dto/userDto.js";
import { CredentialsInvalid, UserAlreadyExists, UserNotFound } from "../../error/user/user.error.js";
import { createUserFactory } from "../../factory/user/CreateUser.factory.js";
import { LoginUserFactory } from "../../factory/user/loginUser.factory.js";

export class UserController {
  consatructor() {}

  save = async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const { age, email, name, password, role } = createUserValidation.parse(
        req.body
      );

      const userService = await createUserFactory().save(
        new CreateUserDto(name, email, password, age, role)
      );
      reply.status(200).send({ message: "Usuário criado com sucesso." });
    } catch (error) {
      if (error instanceof UserAlreadyExists) {
        reply.status(409).send({ message: "Esse usuário já existe. " });
      }
    }
  };
  login = async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const { email, password } = loginUserValidate.parse(req.body)
        const userDto = new UserLoginDto(email,password)
        const userLog = LoginUserFactory().login(userDto)
        reply.status(200).send(userLog)
    } catch (error) {
        if(error instanceof CredentialsInvalid){
            reply.status(401).send({message:'Credenciais inválidas'})
        }
        if(error instanceof UserNotFound) {
            reply.status(404).send({message:'Usuário não encontrado'})
        }
    }
  };
}
