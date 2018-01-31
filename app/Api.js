const timeout = 200;

const repos = [
  {
    name: 'test repo 1',
    stars: 10,
    username: 'test owner 1',
    created: 'Wed Jan 31 2018 23:48:32 GMT+0200 (EET)',
    updated: 'Wed Jan 31 2018 23:48:32 GMT+0200 (EET)',
    language: 'javascript',
  },
  {
    name: 'test repo 2',
    stars: 10,
    username: 'test owner 1',
    created: 'Wed Jan 31 2018 23:48:32 GMT+0200 (EET)',
    updated: 'Wed Jan 31 2018 23:48:32 GMT+0200 (EET)',
    language: 'javascript',
  },
  {
    name: 'test repo 3',
    stars: 10,
    username: 'test owner 2',
    created: 'Wed Jan 31 2018 23:48:32 GMT+0200 (EET)',
    updated: 'Wed Jan 31 2018 23:48:32 GMT+0200 (EET)',
    language: 'javascript',
  },
  {
    name: 'test repo 4',
    stars: 10,
    username: 'test owner 2',
    created: 'Wed Jan 31 2018 23:48:32 GMT+0200 (EET)',
    updated: 'Wed Jan 31 2018 23:48:32 GMT+0200 (EET)',
    language: 'javascript',
  },
  {
    name: 'test repo 5',
    stars: 10,
    username: 'test owner 5',
    created: 'Wed Jan 31 2018 23:48:32 GMT+0200 (EET)',
    updated: 'Wed Jan 31 2018 23:48:32 GMT+0200 (EET)',
    language: 'javascript',
  },
  {
    name: 'test repo 6',
    stars: 10,
    username: 'test owner 2',
    created: 'Wed Jan 31 2018 23:48:32 GMT+0200 (EET)',
    updated: 'Wed Jan 31 2018 23:48:32 GMT+0200 (EET)',
    language: 'javascript',
  },
  {
    name: 'test repo 7',
    stars: 10,
    username: 'test owner 5',
    created: 'Wed Jan 31 2018 23:48:32 GMT+0200 (EET)',
    updated: 'Wed Jan 31 2018 23:48:32 GMT+0200 (EET)',
    language: 'javascript',
  },
];

const fakeApiResponse = data => {
  return new Promise(resolve => setTimeout(
    () => resolve(data),
    timeout
  ))
}

export default class Api {
  username = null;

  login = (username) => {
    this.username = username;
    return fakeApiResponse();
  }
  
  getUsername = () => this.username;

  fetchRepos = () => fakeApiResponse(repos)

  fetchRepo = repoName => this.fetchRepos().then(repos => repos.find(repo => repo.name === repoName))
}