Package.describe({
  name:     "woodi:korean-fake",
  version:  "0.1.2",
  summary:  "Random korean text and data generator",
  git:      "https://github.com/meteor-seoul/meteor-korean-fake.git",
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('server/lib/fake.js', 'server');
  api.export('Fake', 'server');
});

Package.onTest(function(api) {

  api.use('sanjo:jasmine@0.18.0');  // jasmine 2.3
  //api.use('velocity:html-reporter');

  api.addFiles("server/lib/fake.js", 'server');
  api.addFiles("tests/client/fake-client-test.js", 'client');
  api.addFiles("tests/server/fake-server-test.js", 'server');
  api.export('Fake', 'server');

});

var npmModules = {
  "cheerio": "0.19.0",
  "request": "2.61.0",
  "iconv-lite": "0.4.11"
};

Npm.depends(npmModules);

