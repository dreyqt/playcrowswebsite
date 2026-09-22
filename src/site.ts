export type ServerId = 'v1' | 'v2'
export type Platform = 'windows' | 'android'

export const LINKS = {
  webshop: 'https://playcrowsweb.vercel.app/',
  discord: 'https://discord.gg/ayxHdychr',
  facebook: 'https://www.facebook.com/PlayCrows',
  rules: 'https://playcrows.base44.app',
  report: 'https://discord.com/channels/1527607490840100955/1527609980625227866',
} as const

// Registration and download URLs supplied by the owner.
export const SERVERS = {
  v1: {
    name: 'V1',
    register: 'https://account.playcrows.com/regchannel.php?pid=3024',
    downloads: {
      windows: 'http://download.playcrows.com/p/PlayV1-PC-all-11.zip',
      android: 'http://download.playcrows.com/p/PlayAZ-v1-all-12.apk',
    },
  },
  v2: {
    name: 'V2',
    register: 'https://account002.playcrows.com/regchannel.php?pid=3050',
    downloads: {
      windows: 'http://download.playcrows.com/pv2/PlayV2-PC-all-7.zip',
      android: 'http://download.playcrows.com/pv2/PlayAZ-v2-all-7.apk',
    },
  },
} as const
