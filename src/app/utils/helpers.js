import axios from 'axios';

const API_ADDR = "https://api.github.com";

export function getGitHubRepos() {
  const topReposEndpoint =
    `${API_ADDR}/search/repositories?per_page=100&q=stars%3A%3E10000`;

  return axios.get(topReposEndpoint)
              .then((repoData) => { return { repos: repoData.data.items }; });
              // TODO - handle error
}

export function getTopContributor(repo) {
  const repoOwner = repo.owner.login;
  const repoName = repo.name;
  const contributorEndpoint =
    `${API_ADDR}/repos/${repoOwner}/${repoName}/contributors?per_page=1`;

  // Contributor data is returned in descending order, so we only care
  // about the first
  return axios.get(contributorEndpoint)
              .then((contributorData) => contributorData.data[0].login);
              // TODO - handle error
}
