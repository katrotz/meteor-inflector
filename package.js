Package.describe({
  name: 'katrotz:inflector',
  version: '0.0.1',
  summary: 'Ruby on Rails > NodeJS > Meteor port of inflection',
  git: 'git@github.com:katrotz/meteor-inflector.git',
  documentation: 'README.md',
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');

  api.use(['templating'], 'client');

  api.addFiles(['./.npm/package/node_modules/inflection/lib/inflection.js'], 'client');
  api.addFiles(['inflector.js'], ['server', 'client']);

  api.export('Inflector', ['server', 'client']);
});

Package.onTest(function(api) {
  api.use('templating', 'client');
  api.use('katrotz:inflector');
  api.use('tinytest');
  api.addFiles('inflector-tests.js');
});

Npm.depends({inflection: '1.7.1'});