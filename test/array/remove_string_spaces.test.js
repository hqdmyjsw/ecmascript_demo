var noSpace = require('../../src/array/remove_string_spaces');
var expect = require('chai').expect;

describe('字符串去除空格', () => {
  it("'abc d e' => 'abcde'", () => {
    expect(noSpace.noSpace1('abc d e')).to.be.equal('abcde');
  })
})

describe('字符串去除空格', () => {
  it("' abcde ' => 'abcde'", () => {
    expect(noSpace.noSpace2('abc d e')).to.be.equal('abcde');
  })
})

describe('字符串去除空格', () => {
  it("' abcde ' => 'abcde'", () => {
    expect(noSpace.noSpace3('abc d e')).to.be.equal('abcde');
  })
})
