export const fallbackLng = 'en'
export const languages = [fallbackLng, 'ru', 'kk']
export const defaultNS = 'translation'


export function getOptions(lng = fallbackLng, ns: string | string[] = defaultNS) {
  return {
    supportedLngs: languages,
    preload: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  }
}