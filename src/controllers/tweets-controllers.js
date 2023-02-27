import { usuarios, tweets, Tweet } from "../data/data.js";
import { status } from "../utils.js";

function reverseTweets() {
  return [...tweets].reverse();
}

export function createTweet(req, res) {
  const { tweet, username } = req.body;

  if (!username || !tweet) {
    return res
      .status(status.BAD_REQUEST)
      .send("Todos os campos são obrigatórios!");
  }

  const { avatar } = usuarios.find((user) => user.username === username);

  tweets.push(new Tweet(tweet, username, avatar));

  res.status(status.CREATED).send("OK, seu tweet foi criado");
}

export function getTweetsOfUser(req, res) {
  const { username } = req.params;

  const tweetsDoUsuario = tweets.filter((t) => t.username === username);

  res.status(status.OK).send(tweetsDoUsuario);
}

export function getTweets(req, res) {
  const { page } = req.query;

  if (page && page < 1) {
    res.status(status.BAD_REQUEST).send("Informe uma página válida!");
    return;
  }
  const limite = 10;
  const start = (page - 1) * limite;
  const end = page * limite;

  if (tweets.length <= 10) {
    return res.send(reverseTweets());
  }

  res.status(status.OK).send([...tweets].reverse().slice(start, end));
}
