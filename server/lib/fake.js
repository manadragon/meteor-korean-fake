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

Fake = {};

Fake.test = function (url, filter, charset, cb) {
  var callback;

  for (var i in arguments) {
    if (typeof arguments[i] === "function") {
      callback = arguments[i];
    }
  }

  if (!url) {
    var error = 'url is not exist.';
    if (callback) callback(error);
    else return error;
  }

  var options = {
    uri: url,
    encoding: 'binary', // javascript가 실행될 수 있기 때문에 binary로 가져온다. (data get a to encoding to binary because can run java script.)
    headers: {
      'User-Agent': 'Googlebot'
    }
  };

  request(options, Meteor.bindEnvironment(function (err, response, body) {
    var filterElement, filterArray, $, strContents, encoding;

    console.log('typeof charset', typeof charset);
    // converting
    if (!charset || typeof charset === "function") encoding = "utf8";

    strContents = iconv.decode(body, encoding);
    console.log('strContents', strContents);
    $ = cheerio.load(strContents);
    filterElement = $(filter).text();

    if (filterElement) {
      filterArray = filterElement.split(" ");
      if (callback)
        callback(null, filterArray);
      else
        return filterArray;
    } else {
      var error = "data is not exist.";

      if (callback)
        callback(error);
      else
        return error;
    }

  }));
  console.log('fake_end');
};

//
//
//var syllabesLength = syllabes.length;
//
//var wordLengths = [
//  1, 1,
//  2, 2, 2, 2, 2, 2, 2,
//  3, 3, 3, 3,
//  4, 4,
//  5
//];
//
//var syllabeCounts = [
//  10,
//  15,
//  20,
//  25,
//
//  30,
//  35,
//  40,
//  45,
//
//  50,
//  75,
//  100,
//  125,
//
//  150,
//  175,
//  175,
//  175,
//];
//
//var getWord = function(min, max) {
//  var length = wordLengths[Math.floor(Math.random() * 16)];
//  if(min && (length < min)) length = min;
//  if(max && (length > max)) length = max;
//  var word = '';
//  for(var i = 0; i < length; ++i) {
//    var count = syllabeCounts[Math.floor(Math.random() * 16)];
//    word += syllabes[Math.floor(Math.random() * count)];
//  }
//  return word;
//};
//
//Fake = {};
//
//Fake.sentence = function(length) {
//  if(!length) {
//    var length = 4 + Math.floor(Math.random() * 8);
//  }
//  var ending = (Math.random() < 0.95) ? '.' : (Math.random() < 0.5) ? '!' : '?';
//  var result = getWord();
//  //result = result.slice(0,1).toUpperCase() + result.slice(1).toLowerCase();
//  for(var i = 1; i < length; ++i) {
//    result += ' ' + getWord();
//  }
//  return result + ending;
//};
//
//console.log('Fake.sentence()', Fake.sentence());