export class UserAlreadyExists extends Error {
  constructor() {
    super('Usuário já existe.');
    this.name = 'UserAlreadyExists';
  }
}

export class UserNotFound extends Error {
  constructor() {
    super('Usuário não encontrado.');
    this.name = 'UserNotFound';
  }
}

export class CredentialsInvalid extends Error {
  constructor() {
    super('Credenciais inválidas.');
    this.name = 'CredentialsInvalid';
  }
}
