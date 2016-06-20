import React from 'react';
import Repo from './Repo';
import repoData from '../../../lib/repoData.json';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import sinon from 'sinon';

describe('<RepoList />', () => {
  it('renders with a class name of row', () => {
    const repo = shallow(<Repo repo={repoData[0]} />);
    expect(repo.find('.row')).to.have.length(1);
  })

  it('calls showTopContributor on button click', () => {
    sinon.spy(Repo.prototype, 'showTopContributor');
    const repo = shallow(<Repo repo={repoData[0]} />);

    repo.find('.btn').simulate('click');
    expect(Repo.prototype.showTopContributor.calledOnce).to.be.true
    Repo.prototype.showTopContributor.restore();
  });

  it('shows the top contributor after getting the top contributor', () => {
    const repo = shallow(<Repo repo={repoData[0]} />);
    expect(repo.find('.top-contributor-name').text()).to.contain('');
    repo.setState({ topContributor: "raderj89" });

    expect(repo.find('.top-contributor-name').text()).to.contain('raderj89');
  });
});
