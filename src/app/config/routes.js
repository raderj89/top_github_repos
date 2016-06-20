import React from 'react';
import Main from '../components/Main';
import RepoList from '../components/RepoList/RepoList';
import { Route, IndexRoute, hashHistory } from 'react-router';

export default (
  <Route path="/" component={Main} history={hashHistory}>
    <IndexRoute component={RepoList} />
  </Route>
)
