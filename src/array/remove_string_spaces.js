function noSpace1(x) {
  return x.split(' ').join('');
}

function noSpace2(x) {
  var result = '';
  for(var i = 0, j = x.length; i < j; i++) {
    if(x[i] !== ' ') {
      result += x[i];
    }
  }
  return result;
}

function noSpace3(x) {
  return  x.replace(/\s/g, '');
}

module.exports = {
  noSpace3,
  noSpace2,
  noSpace1,
};
