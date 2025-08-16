import { beforeEach, describe, expect, test } from "vitest";
import { UserLoginService } from "../userLoginService.js";
import { Cryptgraph, type ICryptgraph } from "../../../utils/credentials/cryptograph.js";
import { UserRepositoryMock } from "../../../mock/user/userRepository.Mock.js";
import { UserCreateService } from "../userCreateService.js";
import { CreateUserDto, UserLoginDto } from "../../../dto/userDto.js";
import type { IUserLoginService } from "../types/IUserLoginService.js";
import type { IUserRepository } from "../../../repository/user/IUserRepository.js";
import { CredentialsInvalid } from "../../../error/user/user.error.js";
describe("user login", () => {
  let bcrypt:ICryptgraph
  let mockRepository:IUserRepository
  let fakeUser:CreateUserDto
  let userLoginService:IUserLoginService;
  

  beforeEach(async () => {
    bcrypt = new Cryptgraph();
    mockRepository = new UserRepositoryMock();
    fakeUser = new CreateUserDto(
      "leonardo",
      "leo@gmail.com",
      "123456nardo",
      24
    );
    fakeUser.password = await bcrypt.hash(fakeUser.password)
    mockRepository.save(fakeUser)
    userLoginService = new UserLoginService(mockRepository, bcrypt);


  });

  test("deve ser possível realizar o login.", async () => {

    const userLoginReturn = await userLoginService.login(
      new UserLoginDto("leo@gmail.com", "123456nardo")
    );
    expect(userLoginReturn).toHaveProperty("id");
  });
  test('Não é permitido realizar o login com credenciais inválidas.',async ()=> {
     await expect(  userLoginService.login(new UserLoginDto('leo@gmail.com','23454dsaddxz'))).rejects.throw(CredentialsInvalid)
  })
});
