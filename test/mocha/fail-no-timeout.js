var Nightmare = require('nightmare');
var config = require('../config')({dirname: __dirname});
var phantomPath = config.phantomPath;
var testPath = config.basePath;
var expect = require('chai').expect; // jshint ignore:line

describe('testing the create account dialog', function() {
  this.timeout(30000);

  describe('filling out the create account form', function() {
    it('fails because password is not confirmed correctly', function(done) {
      new Nightmare({phantomPath: phantomPath})
        .viewport(1024, 1000)
        .goto(testPath)
        .click('[data-modal-click="signup"]')
        .wait(300)
        .type('#signup-dialog input[name="email"]', config.email)
        .type('#signup-dialog input[name="password1"]', config.password)
        .type('#signup-dialog input[name="password2"]', 'wrong password')
        .click('#signup-dialog button[type="submit"]')
        .screenshot(config.screenshot({ imgName: 'no-timeout-signup-form-filled' }))
        .wait(500)
        .screenshot(config.screenshot({ imgName: 'no-timeout-signup-complete' }))
        .evaluate(function() {
          return {
            signedIn: document.body.classList.contains('signed-in')
          };
        }, function(results) {
            try {
              expect(results.signedIn).to.equal(true);
            } catch (err) {
              console.log('Error thrown from Chai assertion: ', err);
            }
        })
        .run(function(err, nightmare) {
          if(err) {
            console.log('Nightmare error: ', err);
          } else {
            console.log('Nightmare instance done!!');
          }
          done();
        });
    });
  }); //end create account test

  describe('a test after a failure in mocha where the exception is caught won\'t timeout', function() {
    it('simple test runs and passes', function(done) {
      new Nightmare({phantomPath: phantomPath})
        .viewport(1024, 1000)
        .goto(testPath)
        .click('[data-modal-click="signup"]')
        .wait(300)
        .type('#signup-dialog input[name="name"]', 'I still run')
        .screenshot(config.screenshot({ imgName: 'no-timeout-signup-form-name-filled' }))
        .evaluate(function() {
          return document.querySelector('#signup-dialog input[name="name"]').value;
        }, function(nameInputVal) {
            expect(nameInputVal).to.equal('I still run');
        })
        .run(function(err, nightmare) {
          if(err) {
            console.log('Nightmare error: ', err);
          } else {
            console.log('Nightmare instance done!!');
          }
          done();
        });
    });
  }); //end create account test


});
