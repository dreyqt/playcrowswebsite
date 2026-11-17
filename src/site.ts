export type Platform = 'windows' | 'android'

export const LINKS = {
  accountMerge: 'https://www.playcrows.com/v3gethequacc/',
  webshop: 'https://playcrowsweb.vercel.app/',
  discord: 'https://discord.gg/Kmwfee38c',
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
      windows: 'https://download.playcrows.com/p/PlayV1-PC-all-19.zip',
      android: 'https://download.playcrows.com/p/PlayAZ-v1-all-19.apk',
    },
  },
} as const
