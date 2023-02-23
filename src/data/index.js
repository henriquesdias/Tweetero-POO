class User {
  constructor(username, avatar) {
    this.username = username;
    this.avatar = avatar;
  }
}

class Tweet {
  constructor(tweet, username, avatar) {
    this.tweet = tweet;
    this.username = username;
    this.avatar = avatar;
  }
}

const tweets = [];
const usuarios = [];

export { tweets, usuarios, User, Tweet };
