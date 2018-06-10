// @flow
import urlUtils from 'url'

type TParsedUrl = {
  path: string,
  href: string,
  pathname: string,
  host: string,
  hostname: string,
  protocol?: string,
  search?: string,
  query?: Object,
}

export default function getThumbnailUrl(
  baseUrl: string,
  size: string,
  quality: string = 'bb',
): string {
  const expectedDimensions = `${size}x${size}${quality}`
  const parsedUrl: TParsedUrl = urlUtils.parse(baseUrl)

  return parsedUrl.href.replace(/(?!=\/)(\w+)(?=\.\w+$)/gi, expectedDimensions)
}
