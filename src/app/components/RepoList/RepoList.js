import React from 'react';
import Repo from '../Repo/Repo';
import { getGitHubRepos } from '../../utils/helpers';

class RepoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
  }

  componentDidMount() {
    getGitHubRepos().then((repoData) => {
      this.setState({
        repos: repoData.repos
      });
    });
  }

  render() {
    return (
      <div className='col-sm-12'>
        {this.state.repos.map((repo, index) => (
          <Repo repo={repo} key={index} />
        ))}
      </div>
    );
  }
}

export default RepoList;
