import { publish } from 'gh-pages';

publish(
  'build', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/nicktobat/2022-folio.git', // Update to point to your repository
    user: {
      name: 'Nicholas Tobat', // update to use your name
      email: 'ntobat@gmail.com' // Update to use your email
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);