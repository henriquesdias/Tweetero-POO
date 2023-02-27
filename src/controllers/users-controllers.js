import { usuarios, User } from "../data/data.js";
import { status } from "../utils.js";

export function newUser(req, res) {
  const { username, avatar } = req.body;

  if (!username || !avatar) {
    res.status(status.BAD_REQUEST).send("Todos os campos são obrigatórios!");
    return;
  }

  usuarios.push(new User(username, avatar));

  res.status(status.OK).send("OK deu tudo certo");
}
