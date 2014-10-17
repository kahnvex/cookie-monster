var cookie = require('../index');
var chai = require('chai');


chai.should();

describe('cookie monster', function() {

  it('sets a cookie', function() {
    cookie.set('cookieKey', 'cookieVal');
    document.cookie.should.equal('cookieKey=cookieVal');
  });

  it('gets a cookie', function() {
    document.cookie = 'dumby=mcdumberson;';
    cookie.get('dumby').should.equal('mcdumberson');
  });
});
