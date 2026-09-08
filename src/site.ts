export type ServerId = 'v1' | 'v2'
export type Platform = 'windows' | 'android'
export type ClientLanguage = 'en' | 'tw' | 'kr'

export const LINKS = {
  webshop: 'https://playcrowsweb.vercel.app/',
  discord: 'https://discord.gg/ayxHdychr',
  facebook: 'https://www.facebook.com/PlayCrows',
  rules: 'https://playcrows.base44.app',
  report: 'https://discord.com/channels/1527607490840100955/1527609980625227866',
} as const

// Registration URLs supplied by the owner; download URLs retained from the source.
export const SERVERS = {
  v1: {
    name: 'V1',
    register: 'https://account.playcrows.com/register.php',
    downloads: {
      windows: {
        en: 'http://download.playcrows.com/p/play-pc-en10.zip',
        tw: 'http://download.playcrows.com/p/play-pc-tw10.zip',
        kr: 'http://download.playcrows.com/p/play-pc-kr10.zip',
      },
      android: {
        en: 'http://download.playcrows.com/p/play-az-en-10.apk',
        tw: 'http://download.playcrows.com/p/play-az-tw-10.apk',
        kr: 'http://download.playcrows.com/p/play-az-kr-10.apk',
      },
    },
  },
  v2: {
    name: 'V2',
    register: 'https://account002.playcrows.com/register.php',
    downloads: {
      windows: {
        en: 'http://download.playcrows.com/pv2/PlayV2-PC-en-4.zip',
        tw: 'http://download.playcrows.com/pv2/PlayV2-PC-tw-4.zip',
        kr: 'http://download.playcrows.com/pv2/PlayV2-PC-kr-4.zip',
      },
      android: {
        en: 'http://download.playcrows.com/pv2/PlayAZ-v2-en-4.apk',
        tw: 'http://download.playcrows.com/pv2/PlayAZ-v2-tw-4.apk',
        kr: 'http://download.playcrows.com/pv2/PlayAZ-v2-kr-4.apk',
      },
    },
  },
} as const

export const CLIENT_LANGUAGES: { id: ClientLanguage; name: string }[] = [
  { id: 'en', name: 'English' },
  { id: 'kr', name: '한국어' },
  { id: 'tw', name: '繁體中文' },
]
