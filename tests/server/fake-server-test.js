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

  describe('Fake.test', function () {
    beforeAll(function (done) {
      //spyOn(Fake, 'test').and.callThrough();
      //Fake.test(url, filter, charset, function (err, res) {
      //  if (err) result = err;
      //  else result = res;
      //  done();
      //});
      Fake.test(function () {
        done();
      });
      //expect(fake).toBeDefined();
    });

    it('Fake is defined', function (){
      expect(Fake).toBeDefined();
    });

    it('result.length equal 379. ', function () {
      //expect(true).toBe(false);
      expect(Fake.results().length).toEqual(379);
    });

    it('result.length equal 379. ', function () {
      //expect(true).toBe(false);
      expect(Fake.results().length).toEqual(379);
    });

    it('result.length equal 379. ', function () {
      //expect(true).toBe(false);
      expect(Fake.results().length).toEqual(379);
    });

    it('result.length equal 379. ', function () {
      //expect(true).toBe(false);
      expect(Fake.results().length).toEqual(379);
    });

    //
    //it('get random text in result', function () {
    //  var results = [];
    //  do {
    //    var random = Math.floor(Math.random() * result.length);
    //
    //    results.push(result[random]);
    //  } while(result[random].substr(result[random].length -1 , 1) != ".");
    //
    //  expect(results.join(" ").substr(results.join(" ").length - 1, 1)).toMatch(".");
    //});

  });
});


