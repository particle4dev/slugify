// https://gist.github.com/codeguy/6684588

import unaccented from '@penguin-ui/unaccented'

export default function stringToSlug(str: string): string {
  str = str.replace(/^\s+|\s+$/g, '') // trim
  str = str.toLowerCase()

  str = unaccented(str)
  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-') // collapse dashes

  return str
}
