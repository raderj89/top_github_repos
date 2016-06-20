# Top GitHub repos

A simple React app that displays the top 100 most starred GitHub repositories, as well as their top contributor. [View it on Heroku](https://top-github-repos.herokuapp.com).

### Stack/Libraries
- Babel: for sweet ES6 syntax
- ExpressJS: minimal JavaScript web app framework
- Webpack: flexible module bundler
- ReactJS: A simple library for building highly componentized, dynamic UIs
- Axios: Promise-based HTTP client
- Twitter Bootstrap: Mobile-first HTML and CSS framework
- Mocha: Node.js test framework
- Chai: Node.js BDD / TDD assertion library
- Enzyme: Testing utility for React components
- Sinon: Test spies, stubs and mocks for JavaScript

### Directory structure
- `public`: Code in `src` gets compiled to here and loaded in browsers
- `src`: Application code lives here | - `app`: React components and their tests | - `config`: Client-side routes |- `utils`: Functions making API calls and their tests.
- `test`: Test setup. Test files live in the same directories as their corresponding files, for now.
- root directory: webpack config, which handles app compilation and bundling

### Prerequisites
node.js (Node 6 with npm 3 is required).

### Installing
```
git clone git@github.com:raderj89/top_github_repos.git
cd top_github_repos
npm install
```

### Start development
1. `npm run dev`
2. Point your browser to localhost:5000

### Running tests
`npm test`
