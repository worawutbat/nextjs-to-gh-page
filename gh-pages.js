/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
let ghpages = require('gh-pages');
let dayjs = require('dayjs');

ghpages.publish(
  'out',
  {
    branch: 'master',
    dotfiles: true,
    message: `🚀 Deploy [${dayjs().format('DD/MM/YY')}]`,
  },
  () => {
    console.log('deploy success!!');
  },
);
