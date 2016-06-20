import React from 'react';

const Main = ({children}) => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h2>Most Popular GitHub Repos</h2>
      </div>
      <div className="github-repos">
        {children}
      </div>
    </div>
  );
}

export default Main;
