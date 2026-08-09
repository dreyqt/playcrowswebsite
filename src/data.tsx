import type { ReactNode } from 'react'
import heroVideo from './assets/hero.mp4'
import heroPoster from './assets/image-1.png'
import referralBanner from './assets/events/referral-event.png'

export type Page =
  | { view: 'home' }
  | { view: 'announcements' }
  | { view: 'updates' }
  | { view: 'announcement'; id: string }
  | { view: 'update'; id: string }

export type Lang = 'en' | 'kr' | 'th' | 'tw' | 'br'
export type LocalizedText = Record<Lang, string>

export const HERO_SLIDES = [
  {
    video: heroVideo,
    img: heroPoster,
    title: 'PLAYCROWS',
    subtitle: 'Your Ultimate Night Crows Private Server Experience.',
  }
]

export const ANNOUNCEMENTS: {
  id: string
  title: LocalizedText
  date: LocalizedText
  preview: LocalizedText
  banner?: string
}[] = [
  {
    id: 'referral-event-001',
    title: {
      en: 'PlayCrows Referral Event',
      kr: '플레이크로우즈 추천인 이벤트',
      th: 'อีเวนต์แนะนำเพื่อน PlayCrows',
      tw: 'PlayCrows 推薦好友活動',
      br: 'Evento de Indicação PlayCrows',
    },
    date: {
      en: 'August 2026',
      kr: '2026년 8월',
      th: 'สิงหาคม 2026',
      tw: '2026年8月',
      br: 'Agosto de 2026',
    },
    preview: {
      en: 'Invite friends, reach Level 53, and earn exclusive weekly rewards.',
      kr: '친구를 초대하고 레벨 53에 도달하면 독점 주간 보상을 받을 수 있습니다.',
      th: 'ชวนเพื่อน ถึงเลเวล 53 และรับรางวัลรายสัปดาห์สุดพิเศษ',
      tw: '邀請好友，達到 53 級，即可獲得專屬每週獎勵。',
      br: 'Convide amigos, alcance o Nível 53 e ganhe recompensas semanais exclusivas.',
    },
    banner: referralBanner,
  },
  {
    id: 'feedback',
    title: {
      en: 'We Heard Your Feedback!',
      kr: '여러분의 피드백을 들었습니다!',
      th: 'เราได้ยินเสียงตอบรับของคุณแล้ว!',
      tw: '我們聽到你的意見了！',
      br: 'Ouvimos seu Feedback!',
    },
    date: {
      en: 'August 6, 2026',
      kr: '2026년 8월 6일',
      th: '6 สิงหาคม 2026',
      tw: '2026年8月6日',
      br: '6 de Agosto de 2026',
    },
    preview: {
      en: 'New $5 Gift Package now available — 20,000 Diamonds in the Donation Center.',
      kr: '신규 $5 기프트 패키지 출시 — 후원 센터에서 다이아몬드 20,000개.',
      th: 'แพ็กเกจของขวัญ $5 ใหม่พร้อมแล้ว — 20,000 เพชร ในศูนย์บริจาค',
      tw: '全新 $5 禮包現已上架 — 贊助中心 20,000 鑽石。',
      br: 'Novo Pacote de Presente de $5 disponível — 20.000 Diamantes na Central de Doações.',
    },
  },
  {
    id: 'early-donation',
    title: {
      en: 'Early Donation is Now Open!',
      kr: '얼리 도네이션이 오픈되었습니다!',
      th: 'เปิดบริจาคล่วงหน้าแล้ว!',
      tw: '搶先贊助現已開放！',
      br: 'Doação Antecipada Já Está Aberta!',
    },
    date: {
      en: 'July 31, 2026',
      kr: '2026년 7월 31일',
      th: '31 กรกฎาคม 2026',
      tw: '2026年7月31日',
      br: '31 de Julho de 2026',
    },
    preview: {
      en: 'Exclusive 10% Early Donation Discount. Redeem code EARLY10 before July 31.',
      kr: '독점 얼리 도네이션 10% 할인. 7월 31일 이전에 EARLY10 코드를 사용하세요.',
      th: 'ส่วนลดพิเศษ 10% สำหรับการบริจาคล่วงหน้า ใช้โค้ด EARLY10 ก่อนวันที่ 31 กรกฎาคม',
      tw: '獨家搶先贊助 9 折優惠。7月31日前輸入代碼 EARLY10。',
      br: 'Desconto exclusivo de 10% para Doação Antecipada. Resgate o código EARLY10 antes de 31 de julho.',
    },
  },
  {
    id: 'live',
    title: {
      en: 'PLAYCROWS IS NOW LIVE!',
      kr: '플레이크로우즈 정식 오픈!',
      th: 'PLAYCROWS เปิดให้บริการแล้ว!',
      tw: 'PLAYCROWS 正式上線！',
      br: 'PLAYCROWS JÁ ESTÁ NO AR!',
    },
    date: {
      en: 'July 31, 2026',
      kr: '2026년 7월 31일',
      th: '31 กรกฎาคม 2026',
      tw: '2026年7月31日',
      br: '31 de Julho de 2026',
    },
    preview: {
      en: 'The gates have opened, the battlefield awaits, and your journey begins NOW!',
      kr: '문이 열렸고, 전장이 여러분을 기다립니다. 여정은 지금 시작됩니다!',
      th: 'ประตูได้เปิดแล้ว สนามรบรอคุณอยู่ และการเดินทางของคุณเริ่มต้นตอนนี้!',
      tw: '大門已開啟，戰場正在等待，你的旅程現在開始！',
      br: 'Os portões se abriram, o campo de batalha te espera, e sua jornada começa AGORA!',
    },
  },
  {
    id: 'stream',
    title: {
      en: 'Stream the Game & Be Rewarded!',
      kr: '게임을 스트리밍하고 보상을 받으세요!',
      th: 'สตรีมเกมและรับรางวัล!',
      tw: '直播遊戲，領取獎勵！',
      br: 'Transmita o Jogo e Seja Recompensado!',
    },
    date: {
      en: 'July 31, 2026',
      kr: '2026년 7월 31일',
      th: '31 กรกฎาคม 2026',
      tw: '2026年7月31日',
      br: '31 de Julho de 2026',
    },
    preview: {
      en: 'Stream PlayCrows and earn exclusive in-game rewards during Official Release.',
      kr: '정식 출시 기간 동안 플레이크로우즈를 스트리밍하고 독점 인게임 보상을 받으세요.',
      th: 'สตรีม PlayCrows และรับรางวัลในเกมสุดพิเศษช่วง Official Release',
      tw: '在正式上線期間直播 PlayCrows，即可獲得專屬遊戲內獎勵。',
      br: 'Transmita PlayCrows e ganhe recompensas exclusivas no jogo durante o Lançamento Oficial.',
    },
  },
  {
    id: 'server-rates',
    title: {
      en: 'Official Release Server Rates & Features',
      kr: '정식 출시 서버 배율 및 특징',
      th: 'อัตราเซิร์ฟเวอร์และฟีเจอร์ในการเปิดตัวอย่างเป็นทางการ',
      tw: '正式上線伺服器倍率與特色',
      br: 'Taxas e Recursos do Servidor no Lançamento Oficial',
    },
    date: {
      en: 'July 31, 2026',
      kr: '2026년 7월 31일',
      th: '31 กรกฎาคม 2026',
      tw: '2026年7月31日',
      br: '31 de Julho de 2026',
    },
    preview: {
      en: 'Official server rates and features for the PlayCrows launch.',
      kr: '플레이크로우즈 출시를 위한 공식 서버 배율 및 특징입니다.',
      th: 'อัตราเซิร์ฟเวอร์และฟีเจอร์อย่างเป็นทางการสำหรับการเปิดตัว PlayCrows',
      tw: 'PlayCrows 上線的正式伺服器倍率與特色。',
      br: 'Taxas e recursos oficiais do servidor para o lançamento do PlayCrows.',
    },
  },
]

export const UPDATES: {
  id: string
  title: LocalizedText
  date: LocalizedText
  preview: LocalizedText
}[] = [
  {
    id: 'beta-patch-726',
    title: {
      en: '07/29/2026 Beta Patch Notes Update Released (726 MB)',
      kr: '07/29/2026 베타 패치노트 업데이트 발표 (726 MB)',
      th: 'ประกาศแพตช์โน้ตเบต้าอัปเดต 07/29/2026 (726 MB)',
      tw: '07/29/2026 Beta 更新公告 (726 MB)',
      br: 'Notas do Patch Beta de 29/07/2026 Lançadas (726 MB)',
    },
    date: {
      en: 'July 29, 2026',
      kr: '2026년 7월 29일',
      th: '29 กรกฎาคม 2026',
      tw: '2026年7月29日',
      br: '29 de Julho de 2026',
    },
    preview: {
      en: 'Major improvements to quests, boss raids, Black Wing Supply, and bug fixes.',
      kr: '퀘스트, 보스 레이드, 블랙윙 서플라이 개선 및 버그 수정.',
      th: 'ปรับปรุงเควส บอสเรด Black Wing Supply และแก้ไขบั๊กครั้งใหญ่',
      tw: '任務、首領團隊戰、黑翼補給大幅改善並修復錯誤。',
      br: 'Grandes melhorias em missões, raides de chefes, Suprimento Asa Negra e correções de bugs.',
    },
  },
  {
    id: 'website-update',
    title: {
      en: 'PlayCrows Website Update',
      kr: '플레이크로우즈 웹사이트 업데이트',
      th: 'อัปเดตเว็บไซต์ PlayCrows',
      tw: 'PlayCrows 官方網站更新',
      br: 'Atualização do Site PlayCrows',
    },
    date: {
      en: 'August 6, 2026',
      kr: '2026년 8월 6일',
      th: '6 สิงหาคม 2026',
      tw: '2026年8月6日',
      br: '6 de Agosto de 2026',
    },
    preview: {
      en: 'The official PlayCrows website has been updated with new features and improvements.',
      kr: '플레이크로우즈 공식 웹사이트가 새로운 기능과 개선 사항으로 업데이트되었습니다.',
      th: 'เว็บไซต์อย่างเป็นทางการของ PlayCrows ได้รับการอัปเดตด้วยฟีเจอร์และการปรับปรุงใหม่',
      tw: 'PlayCrows 官方網站已更新新功能與改進項目。',
      br: 'O site oficial do PlayCrows foi atualizado com novos recursos e melhorias.',
    },
  },
]

function ContentFeedback() {
  return (
    <div className="prose-game">
      <p>{"We've added a new $5 Gift Package for players looking for a more affordable way to support PlayCrows!"}</p>
      <div className="highlight-box">
        <span className="tag">New Package</span>
        <h3 style={{ marginTop: 8 }}>$5 Gift Package</h3>
        <ul><li> 20,000 Diamonds</li></ul>
        <p style={{ marginBottom: 0 }}>The new package is now available in our Donation Center and can be purchased immediately.</p>
      </div>
      <p>Thank you for all of your feedback and continued support. {"We'll"} keep listening and making improvements to provide the best experience possible.</p>
      <p>See you in-game!</p>
      <div style={{ marginTop: 28 }}>
        <a href="#" className="btn-primary inline-block no-underline" style={{ fontSize: 13 }}>
          <span>Donation Center</span>
        </a>
      </div>
    </div>
  )
}

function ContentReferralEvent() {
  return (
    <div className="prose-game">
      <h2>🎉 PlayCrows Referral Event</h2>

      <p>
        Invite your friends, spread the word, and earn exclusive
        <strong> Bountiful Rewards!</strong>
      </p>

      <hr />

      <h3>📌 Mechanics</h3>

      <ul>
        <li>Invite <strong>3 friends</strong> to the PlayCrows Discord using your unique invite link.</li>
        <li>Share the PlayCrows server information from <strong>#official-links</strong> in <strong>3 active gaming communities</strong> (preferably Night Crows groups).</li>
        <li>Reach <strong>Level 53</strong>.</li>
        <li>Keep all promotional posts active for at least <strong>5 hours</strong>.</li>
        <li>Posts must be publicly visible for verification.</li>
      </ul>

      <hr />

      <h3>🎁 Rewards</h3>

      <ul>
        <li>30,000 Mileage</li>
        <li>High Seal of Advancement (Bound) ×3</li>
        <li>Seal of Advancement (Bound) ×75</li>
        <li>Treasure Guild Coin Chest (Bound) ×50</li>
        <li>Gold Chest (Bound) ×200</li>
        <li>Night Crows Stimulant of Growth (Bound) ×30</li>
        <li>Eligio's Stimulant of EXP (Bound) ×30</li>
      </ul>

      <hr />

      <p>
        <strong>⚠️ Note:</strong> Claims will only be approved after all
        requirements have been verified.
      </p>

      <p>
        Rewards may only be claimed <strong>once per week</strong>.
        Weekly reset is every <strong>Monday 04:00 UTC+8</strong>.
      </p>

      <div style={{ marginTop: 30 }}>
        <a href="#" className="btn-primary">
          Submit Your Claim
        </a>
      </div>

    </div>
  )
}

function ContentEarlyDonation() {
  return (
    <div className="prose-game">
      <p>{"Our official PlayCrows Donation Center is now live! To celebrate the official launch, we're giving everyone an exclusive 10% Early Donation Discount before the server opens."}</p>
      <div className="highlight-box">
        <span className="tag">Early Support Event</span>
        <ul style={{ marginTop: 12 }}>
          <li> Redeem Code: <strong style={{ color: '#5BC8FF' }}>EARLY10</strong></li>
          <li> Discount: <strong style={{ color: '#5BC8FF' }}>10% OFF</strong> all Gift Packages</li>
          <li> Valid Until: July 31, 2026 3:00 PM (Singapore Time)</li>
        </ul>
      </div>
      <h3>Example</h3>
      <div className="highlight-box">
        <ul>
          <li> $100 Gift Package | Pay only $90</li>
          <li> You still receive: Full $100 Gift Package</li>
          <li> Full $100 Cumulative Reward Progress</li>
        </ul>
      </div>
      <h3> Official Server Launch</h3>
      <ul>
        <li> July 31, 2026</li>
        <li> 3:00 PM (Singapore Time)</li>
      </ul>
      <p>Thank you for supporting PlayCrows! Every contribution helps us improve the server and prepare for an even better launch experience.</p>
      <p>See you all at launch!</p>
      <div style={{ marginTop: 28 }}>
        <a href="#" className="btn-primary inline-block no-underline" style={{ fontSize: 13 }}>
          <span>Donate Now</span>
        </a>
      </div>
    </div>
  )
}

function ContentLive() {
  return (
    <div className="prose-game">
      <p>{"The gates have opened, the battlefield awaits, and your journey begins NOW!"}</p>
      <p>{"Our Official Release is finally here! It's time to create your character, explore the world, and forge your own legend."}</p>
      <hr />
      <h3>WHAT'S WAITING FOR YOU</h3>
      <ul>
        <li>Claim your New Player Rewards</li>
        <li>Stream the game for a chance to earn exclusive Streaming Rewards</li>
        <li>Join a guild, make allies, and conquer powerful enemies</li>
        <li>Battle against players from around the world</li>
        <li>Experience all the improvements and content prepared for our official launch</li>
      </ul>
      <hr />
      <h3>START YOUR ADVENTURE</h3>
      <p>{"Download the game, log in, and begin your journey today! Whether you're a returning beta player or a brand-new adventurer, everyone is welcome to join the battle."}</p>
      <hr />
      <h3>THANK YOU!</h3>
      <p>Thank you to everyone who supported us throughout the beta. Your feedback helped shape PlayCrows into what it is today.</p>
      <p>The server is now <strong style={{ color: '#5BC8FF' }}>ONLINE!</strong></p>
      <div style={{ marginTop: 28 }}>
        <a href="#" className="btn-primary inline-block no-underline" style={{ fontSize: 13 }}>
          <span>Download & Play Now</span>
        </a>
      </div>
    </div>
  )
}

function ContentStream() {
  return (
    <div className="prose-game">
      <p>Official Release Opens in 30 Minutes!</p>
      <p>{"The wait is almost over! As we prepare to launch, we're inviting everyone to share the excitement by streaming PlayCrows and earning exclusive in-game rewards."}</p>
      <div className="highlight-box">
        <span className="tag">Streaming Rewards</span>
        <ul style={{ marginTop: 12 }}>
          <li>Sunset{'\''}s Mount Summon x11 (Bound) ×6</li>
          <li>Sunset{'\''}s Weapon Style Summon x11 (Bound) ×6</li>
          <li>Night Crows Stimulant of Growth (Bound) ×15</li>
          <li>Food Basket (Bound) ×30</li>
          <li>Gold Coin Chest (Bound) ×150</li>
          <li>Mileage ×15,000</li>
        </ul>
      </div>
      <p style={{ color: '#8A6A3A' }}>Please Note: Only selected streamers will be eligible to receive these rewards. Make sure to follow our streaming guidelines and stay tuned for the list of qualified participants.</p>
      <p>Get your stream ready, invite your friends, and join us as we celebrate the official launch of PlayCrows!</p>
      <p>See you on the battlefield!</p>
      <div style={{ marginTop: 28 }}>
        <a href="#" className="btn-primary inline-block no-underline" style={{ fontSize: 13 }}>
          <span>Share Your Stream</span>
        </a>
      </div>
    </div>
  )
}

function ContentServerRates() {
  return (
    <div className="prose-game">
      <p>Full server rates and feature details will be published here. Stay tuned for the official announcement.</p>
      <p>Join our Discord for the latest updates and announcements.</p>
      <div style={{ marginTop: 28 }}>
        <a href="#" className="btn-primary inline-block no-underline" style={{ fontSize: 13 }}>
          <span>Join Discord</span>
        </a>
      </div>
    </div>
  )
}

function ContentBetaPatch() {
  return (
    <div className="prose-game">
      <p>A new update is now available! Please download the latest 726 MB patch to enjoy the following improvements:</p>
      <hr />
      <h3>Black Wing Supply Improvements</h3>
      <div className="highlight-box">
        <p style={{ color: '#7AAEC8', marginBottom: 6 }}>Time-Limited Buff Increased</p>
        <ul><li>Major Insignia (PvE) Drop Rate Bonus has been increased from 30% to <strong style={{ color: '#5BC8FF' }}>50%</strong>.</li></ul>
        <p style={{ color: '#7AAEC8', marginBottom: 6, marginTop: 12 }}>Daily Distinction Insignia Limit Increased</p>
        <ul><li>While Black Wing Supply is active, the daily Distinction Insignia limit has been increased from 200,000 to <strong style={{ color: '#5BC8FF' }}>450,000</strong>.</li></ul>
      </div>
      <h3>Quest & Progression Improvements</h3>
      <div className="highlight-box">
        <p style={{ color: '#7AAEC8', marginBottom: 6 }}>Quest Rewards Increased</p>
        <ul>
          <li>Main Quest Rewards increased from x1 to <strong style={{ color: '#5BC8FF' }}>x3</strong></li>
          <li>Sub Quest Rewards increased from x1 to <strong style={{ color: '#5BC8FF' }}>x3</strong></li>
          <li>Daily Quest Rewards increased from x1 to <strong style={{ color: '#5BC8FF' }}>x3</strong></li>
          <li>Extra Quest Rewards increased from x1 to <strong style={{ color: '#5BC8FF' }}>x3</strong></li>
        </ul>
        <p style={{ fontSize: 13, color: '#3A5270', marginTop: 10, marginBottom: 0 }}>These changes significantly boost overall progression and reward efficiency across all quest types.</p>
      </div>
      <div className="highlight-box">
        <p style={{ color: '#7AAEC8', marginBottom: 6 }}>Monster Requirement Reduction</p>
        <ul><li>The total number of monsters required for Main Quests, Sub Quests, Daily Quests, and Extra Quests has been reduced by <strong style={{ color: '#5BC8FF' }}>50%</strong>, allowing for much faster and smoother progression.</li></ul>
      </div>
      <h3>Boss Raid Fixes</h3>
      <ul>
        <li>Fixed an issue in Boss Raid where the message "This Field is not open yet" would incorrectly appear.</li>
        <li>Players can now enter Boss Raid during all scheduled spawn times without restrictions.</li>
      </ul>
      <h3>Bug Fixes</h3>
      <ul>
        <li>Fixed various Shop text that was displayed in Chinese, replacing it with the correct English translations.</li>
        <li>Fixed an issue where the Mythic Glider from Achievement could not be claimed.</li>
        <li>Fixed an issue where the Healer NPC could not be used at certain times even when the required Diamonds were available.</li>
      </ul>
      <hr />
      <p>Thank you for your continued support! Update your game now and enjoy the improved rewards!</p>
    </div>
  )
}

function ContentWebsiteUpdate() {
  return (
    <div className="prose-game">
      <p>The official PlayCrows website has been updated! Here is what is new:</p>
      <ul>
        <li>New Announcements and Updates pages with full detail views</li>
        <li>Enhanced Discord community section</li>
        <li>Improved Download section with PC and Android language options</li>
        <li>Donation Center with New Player Rewards details</li>
        <li>Full Server Rules page with reporting links</li>
      </ul>
      <p>We will continue improving the website as the server grows. Thank you for your support!</p>
    </div>
  )
}

export function getAnnouncementContent(id: string): ReactNode {
  switch (id) {
    case 'feedback': return <ContentFeedback />
    case 'early-donation': return <ContentEarlyDonation />
    case 'live': return <ContentLive />
    case 'stream': return <ContentStream />
    case 'server-rates': return <ContentServerRates />
    case 'referral-event-001': return <ContentReferralEvent />
    default: return <p style={{ color: '#4A6280' }}>Content not found.</p>
  }
}

export function getUpdateContent(id: string): ReactNode {
  switch (id) {
    case 'beta-patch-726': return <ContentBetaPatch />
    case 'website-update': return <ContentWebsiteUpdate />
    default: return <p style={{ color: '#4A6280' }}>Content not found.</p>
  }
}