import aspectRatio from '../index'

// https://www.hobo-web.co.uk/best-screen-size/

describe('@penguin-ui/aspectRatio/src/aspectRatio', () => {
  it('should handle the aspectRatio correctly', () => {
    expect(aspectRatio(1920/1080)).toEqual([16, 9])
    expect(aspectRatio(1366/768)).toEqual([16, 9])
    expect(aspectRatio(1440/900)).toEqual([8, 5])
    expect(aspectRatio(1536/864)).toEqual([16, 9])
    expect(aspectRatio(2560/1440)).toEqual([16, 9])
    expect(aspectRatio(1680/1050)).toEqual([8, 5])
    expect(aspectRatio(1280/720)).toEqual([16, 9])
    expect(aspectRatio(1280/800)).toEqual([8, 5])
    expect(aspectRatio(360/640)).toEqual([9, 16])
    expect(aspectRatio(1600/900)).toEqual([16, 9])
    expect(aspectRatio(800/600)).toEqual([4, 3])
    expect(aspectRatio(800/600, 2)).toEqual([1, 1])
  })
})
