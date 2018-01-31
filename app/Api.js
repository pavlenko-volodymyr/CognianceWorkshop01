export default class Api {
  username = null;

  login = (username) => {
    this.username = username;
  }
  
  getUsername = () => this.username;
}