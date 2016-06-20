import React from 'react';
import RepoList from './RepoList';
import Repo from '../Repo/Repo';
import repoData from '../../../lib/repoData.json';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import sinon from 'sinon';

describe('<RepoList />', () => {
  it('renders the containing div', () => {
    const repoList = shallow(<RepoList />);
    expect(repoList.find('.col-sm-12')).to.have.length(1);
  });

  it('calls componentDidMount', () => {
    sinon.spy(RepoList.prototype, 'componentDidMount');
    const repoList = mount(<RepoList />);
    expect(RepoList.prototype.componentDidMount.calledOnce).to.be.true;
    RepoList.prototype.componentDidMount.restore();
  });

  it('it renders Repo components when its state has repos', () => {
    const repoList = shallow(<RepoList />);
    repoList.setState({ repos: repoData });
    expect(repoList.find(Repo)).to.have.length(3);
  });
});
