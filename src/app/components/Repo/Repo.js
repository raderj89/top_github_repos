import React from 'react';
import { getTopContributor } from '../../utils/helpers';

class Repo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topContributor: ""
    };
  }

  showTopContributor() {
    getTopContributor(this.props.repo).then((topContributor) => {
      this.setState({
        topContributor: topContributor
      });
    });
  }

  render() {
    const repoOwner = this.props.repo.owner.login;
    const repoName = this.props.repo.name;
    const starCount = this.props.repo.stargazers_count;
    const repoLink = `https://github.com/${repoOwner}/${repoName}`;

    return (
      <div className="row">
        <div className="repo">
          <a href={repoLink}>
            {repoName}
          </a>
          <br />
          <span>STARS: {starCount}</span>
          <br />
          <button className='btn btn-sm btn-primary'
                  onClick={this.showTopContributor.bind(this)}>
             Show top contributor
          </button>
          <span className='top-contributor-name'>
            <a href={`https://github.com/${this.state.topContributor}`}>
              {this.state.topContributor}
            </a>
          </span>
          <hr />
        </div>
      </div>
    );
  }
}

Repo.propTypes = {
  repo: React.PropTypes.object.isRequired,
};

export default Repo;
