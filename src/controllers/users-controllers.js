import { usuarios, User } from "../data/index.js";

export function newUser(req, res) {
  const { username, avatar } = req.body;

  if (!username || !avatar) {
    res.status(400).send("Todos os campos são obrigatórios!");
    return;
  }

  usuarios.push(new User(username, avatar));

  res.status(200).send("OK deu tudo certo");
}
