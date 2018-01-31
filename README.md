# This repository contains study project for Cogniance React Native workshop

## Setup
- cd `CognianceWorkshop01`
- `yarn`
choose one of the following commands
- `yarn run ios`
- `yarn run android`
- `yarn run start`

## UI
- `LoginScreen`
  - `Logo`
  - `UserInput`
  - `PasswordInput`
  - `SubmitButton`
- `ReposScreen`
  - `Header`
    - `Username`
    - `LogoutButton`
  - `Content`
    - `List`
      - `RepoShortCard`
        - `OwnerAvatar`
        - `RepoName`
        - `NumberOfStars`
- `RepoScreen`
  - `Header`
    - `BackButton`
  - `Content`
    - `name`
    - `language`
    - `forks_count`
    - `stargazers_count`
    - `watchers_count`
    - `size`
    - `default_branch`
    - `open_issues_count`
    - `pushed_at`
    - `created_at`
      'updated_at'
## API
- GithubApi
  - get user `curl -u username:password https://api.github.com/user`
  - get repos `curl -u username:password https://api.github.com/user/repos`
  - get repo details `curl -u username:password https://api.github.com/repos/:owner/:repo`

