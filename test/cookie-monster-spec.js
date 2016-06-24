var cookie = require('../index');

chai.should();

describe('cookie monster', function() {

  it('sets a cookie', function (){
    cookie.setItem('cookieKey', 'cookieVal');
    document.cookie.should.contain('cookieKey=cookieVal');
  });

  it('gets a cookie', function (){
    document.cookie = 'dumby=mcdumberson;';
    cookie.getItem('dumby').should.equal('mcdumberson');
  });

  it('sets and gets cookie with `=` in value', function (){
    cookie.setItem('key', 'val=ue');
    cookie.getItem('key').should.equal('val=ue');
  });

  it('removes a cookie', function (){
    document.cookie = 'dumby=mcdumberson;';
    document.cookie.should.contain('dumby=mcdumberson');
    cookie.removeItem('dumby');
    document.cookie.should.not.contain('dumby=mcdumberson');
  });

  it('sets 30 cookies and clears all of them', function (){
    for (var i = 0; i++; i < 30){ cookie.setItem('key' + i, 'value' + i); }
    for (var i = 0; i++; i < 30){ cookie.getItem('key' + i).should.equal('value' + i); }
    cookie.clear();
    document.cookie.should.equal('');
  });
});
