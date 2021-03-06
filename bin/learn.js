#!/usr/bin/env node

const program = require('commander');

program
  .version('0.0.1')
  .option('-C, --chdir <path>', 'change the working directory')
  .option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')
  .option('-T, --no-tests', 'ignore test hook');

program
  .command('setup')
  .description('run remote setup commands')
  .action(() => {
    // eslint-disable-next-line no-console
    console.log('setup');
  });

program
  .command('exec <cmd>')
  .description('run the given remote command')
  .action((cmd) => {
    // eslint-disable-next-line no-console
    console.log('exec "%s"', cmd);
  });

program
  .command('teardown <dir> [otherDirs...]')
  .description('run teardown commands')
  .action((dir, otherDirs) => {
    // eslint-disable-next-line no-console
    console.log('dir "%s"', dir);
    if (otherDirs) {
      otherDirs.forEach((oDir) => {
      // eslint-disable-next-line no-console
        console.log('dir "%s"', oDir);
      });
    }
  });

program
  .command('*')
  .description('deploy the given env')
  .action((env) => {
    // eslint-disable-next-line no-console
    console.log('deploying "%s"', env);
  });

program.parse(process.argv);

require('../')