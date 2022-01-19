var str = 'abc pass word id naver netflix';
var regex1 = /pass/;
var regex2 = /n/igm;

console.log(str.search(regex1));
console.log(str.search(regex2));

var findRangeRegex = /([a-f])\w+/i;
var findAllARngeRegex = /([a-f])\w+/gi;

console.log(str.match(findRangeRegex));
console.log(str.match(findAllARngeRegex));