var cookie = require('../index');
var chai = require('chai');


chai.should();

describe('cookie monster', function() {
  var doc;
  var cookieMonster;

  beforeEach(function() {
    doc = {cookie: 'fakey=mcfakerson; dumby=mcdumberson'};
    cookieMonster = cookie(doc);
  });

  it('sets a cookie', function() {
    cookieMonster.set('cookieKey', 'cookieVal');
    doc.cookie.should.equal('cookieKey=cookieVal');
  });

  it('gets a cookie', function() {
    cookieMonster.get('dumby').should.equal('mcdumberson');
  });
});
