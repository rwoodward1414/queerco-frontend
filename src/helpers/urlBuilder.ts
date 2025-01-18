import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder({ projectId: '0qcbspok', dataset: 'production'})

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}