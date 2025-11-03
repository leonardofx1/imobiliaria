import { type FastifyInstance } from "fastify";
import { UserController } from "../../controllers/user/user.controller.js";
import { loginUserFactory } from "../../factory/user/loginUser.factory.js";
import { createUserFactory } from "../../factory/user/CreateUser.factory.js";
import { createUserValidation, loginUserValidate} from "../../validations/user/user.validations.js";
import z from "zod";
import type { ZodTypeProvider } from "fastify-type-provider-zod";

export const userRoutes = async (app: FastifyInstance) => {
  const userControler = new UserController(createUserFactory, loginUserFactory);

  app.withTypeProvider<ZodTypeProvider>().post(
    "/create",
    {
      schema: {
        tags:['user'],
        summary: "Create user",
        description: "Creates and validates a user and returns a JWT token.",
        body: createUserValidation,
        response: {
          400: z.object({ message: z.string() }),
        },
      },
    },
    userControler.save
  );

  app.post(
    "/login",
    { 
      schema:{
        tags:['user'],
        description:'validates the login credentials and returns an authentication token.',
        summary:'login and authentication.',
        body:loginUserValidate
      }
    },
    userControler.login
  );
};
