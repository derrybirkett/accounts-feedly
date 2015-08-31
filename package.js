Package.describe({
  name: "d2tstudio:accounts-feedly",
  summary: "Login service for Feedly accounts",
  version: "1.0.0",
  git: "https://github.com/d2tstudio/accounts-feedly.git"
});

Package.onUse(function(api) {
  api.use('accounts-base@1.1.3', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base@1.1.3', ['client', 'server']);
  api.use('accounts-oauth@1.1.3', ['client', 'server']);

  api.addFiles('feedly_login_button.css', 'client');

  api.addFiles("feedly.js");
});
