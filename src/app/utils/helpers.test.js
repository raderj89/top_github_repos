import axios from 'axios';
import {getGitHubRepos, getTopContributor} from './helpers';
import {expect} from 'chai';
import sinon from 'sinon';
import sinonStubPromise from 'sinon-stub-promise';

sinonStubPromise(sinon);

const API_ADDR = "https://api.github.com";

describe('API requests', () => {
  const promise = sinon.stub().returnsPromise();
  const axiosGet = sinon.stub(axios, 'get', promise);

  describe('getGitHubRepos', () => {

    const topReposEndpoint =
      `${API_ADDR}/search/repositories?per_page=100&q=stars%3A%3E10000`;

    it('fetches top repos from the GitHub API', () => {
      getGitHubRepos();
      sinon.assert.calledWith(axiosGet, topReposEndpoint);
    });
  });

  describe('getTopContributor', () => {
    const repo = {
      owner: { login: 'raderj89' },
      name: 'refcodes'
    };

    const contributorEndpoint =
      `${API_ADDR}/repos/${repo.owner.login}/${repo.name}/contributors?per_page=1`;

    it('fetches the top contributor from the GitHub API', () => {
      getTopContributor(repo);
      sinon.assert.calledWith(axiosGet, contributorEndpoint);
    });
  });
});
