/**
 * Created by ProgrammingPearls on 15. 9. 3..
 */


/* ---------- ---------- ---------- ---------- ---------- ---------- */
/* Source arrays */
/* ---------- ---------- ---------- ---------- ---------- ---------- */

var request = Npm.require('request');
var cheerio = Npm.require('cheerio');
var iconv = Npm.require('iconv-lite');
iconv.skipDecodeWarning = true;

var info = {
  url: "http://www.ldskorea.net/cheongchoon.html",
  filter: 'font[color=navy]',
  charset: "euc-kr"
};

// 모듈 패턴(module pattern)
Fake = function (info) {

  var result;

  // 공용 메서드(common method)
  function test(cb) {
    var callback;

    for (var i in arguments) {
      if (typeof arguments[i] === "function") {
        callback = arguments[i];
      }
    }

    //if (!url) {
    //  var error = 'url is not exist.';
    //  if (callback) callback(error);
    //  else return error;
    //}
    var url = info.url;
    var filter = info.filter;
    var charset = info.charset;

    var options = {
      uri: url,
      encoding: 'binary', // javascript가 실행될 수 있기 때문에 binary로 가져온다. (data get a to encoding to binary because can run java script.)
      headers: {
        'User-Agent': 'Googlebot'
      }
    };

    request(options, Meteor.bindEnvironment(function (err, response, body) {
      var filterElement, filterArray, $, strContents, encoding;

      // converting
      if (!charset || typeof charset === "function") encoding = "utf8";
      else encoding = charset;

      strContents = iconv.decode(body, encoding);
      //console.log('strContents', strContents);
      $ = cheerio.load(strContents);
      filterElement = $(filter).text();

      if (filterElement) {
        filterArray = filterElement.split(" ");
        result = filterArray;
        if (callback)
          callback(null, filterArray);
        //else
        //  return filterArray;

      } else {
        var error = "data is not exist.";
        result = error;
        if (callback)
          callback(error);
        //else
        //  return error;

      }

    }));
    console.log('fake_end');
  }

  return {
    results: function () {
      return result;
    },
    test: function (cb) {
      return test(cb);
    }
  }
}(info);



//function test(url, filter, charset, cb) {
//  var callback;
//
//  for (var i in arguments) {
//    if (typeof arguments[i] === "function") {
//      callback = arguments[i];
//    }
//  }
//
//  if (!url) {
//    var error = 'url is not exist.';
//    if (callback) callback(error);
//    else return error;
//  }
//
//  var options = {
//    uri: url,
//    encoding: 'binary', // javascript가 실행될 수 있기 때문에 binary로 가져온다. (data get a to encoding to binary because can run java script.)
//    headers: {
//      'User-Agent': 'Googlebot'
//    }
//  };
//
//  request(options, Meteor.bindEnvironment(function (err, response, body) {
//    var filterElement, filterArray, $, strContents, encoding;
//
//    // converting
//    if (!charset || typeof charset === "function") encoding = "utf8";
//    else encoding = charset;
//
//    strContents = iconv.decode(body, encoding);
//    //console.log('strContents', strContents);
//    $ = cheerio.load(strContents);
//    filterElement = $(filter).text();
//
//    if (filterElement) {
//      filterArray = filterElement.split(" ");
//      if (callback)
//        callback(null, filterArray);
//      else
//        return filterArray;
//    } else {
//      var error = "data is not exist.";
//
//      if (callback)
//        callback(error);
//      else
//        return error;
//    }
//
//  }));
//  console.log('fake_end');
//}