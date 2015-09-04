/**
 * Created by ProgrammingPearls on 15. 9. 4..
 */

/*
  test methods
  */

//if (Meteor.isServer){
//  Meteor.methods({
//    'test/method': function () {
//      return true;
//    }
//  });
//}

/*
************************************
 */

describe('sanjo:jasmine on server', function () {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000000;

  var url = "http://www.ldskorea.net/cheongchoon.html";
  var filter = 'font[color=navy]';
  var charset = "euc-kr";
  var result;

  describe('init test', function () {
    it('Fake is defined', function (){
      expect(Fake).toBeDefined();
    });
  });


  describe('Fake.test data', function () {
    // beforeEach는 it의 갯수만큼 읽는다는 것을 기억하자.
    // beforeEach -> it, beforeEach -> it...

    beforeEach(function (done) {
      //spyOn(Fake, 'test').and.callThrough();
      Fake.test(url, function (err, res) {
        if (err) result = err;
        else result = res;
        done();
      });
      //expect(fake).toBeDefined();
    });

    it('Fake.test(url) return data is not exist. ', function () {
      //expect(true).toBe(false);
      expect(result).toMatch('data is not exist');
    });
  });

  describe('Fake.test data', function () {
    // beforeEach는 it의 갯수만큼 읽는다는 것을 기억하자.
    // beforeEach -> it, beforeEach -> it...

    beforeEach(function(done) {
      Fake.test(url, filter, function (err, res) {
        if (err) result = err;
        else result = res;
        done();
      });
    });

    it('Fake.test(url, filter) return data is not exist. ', function () {
      //expect(true).toBe(false);
      expect(result).toMatch('data is not exist');
    });
  });
});


