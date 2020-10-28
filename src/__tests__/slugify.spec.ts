import slugify from '../index'

describe('@penguin-ui/slugify/src/slugify', () => {
  it('should handle the slugify correctly', () => {
    expect(slugify(' abc ')).toEqual('abc') // trim
    expect(slugify('ABC')).toEqual('abc') // to lower case
    expect(slugify('ÁBC')).toEqual('abc') // remove accented char
    expect(slugify('@bc')).toEqual('bc') // remove invalid chars
    expect(slugify('a    b c')).toEqual('a-b-c') // collapse whitespace and replace by -
    expect(slugify('a  --  b c')).toEqual('a-b-c') // collapse dashes
  })
})
