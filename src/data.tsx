import type { ReactNode } from 'react'
import heroVideo from './assets/hero.mp4'
import referralBanner from './assets/events/referral-event.png'

export type Page =
  | { view: 'home' }
  | { view: 'announcements' }
  | { view: 'updates' }
  | { view: 'announcement'; id: string }
  | { view: 'update'; id: string }

export const HERO_SLIDES = [
  {
    video: heroVideo,
    title: 'PLAYCROWS',
    subtitle: 'Your Ultimate Night Crows Private Server Experience.',
  }
]

export const ANNOUNCEMENTS = [
  { id: 'referral-event-001', title: 'PlayCrows Referral Event', date: 'August 2026', preview: 'Invite friends, reach Level 53, and earn exclusive weekly rewards.', banner: referralBanner,
  },
  { id: 'feedback', title: ' We Heard Your Feedback!', date: 'August 6, 2026', preview: 'New $5 Gift Package now available  20,000 Diamonds in the Donation Center.' },
  { id: 'early-donation', title: ' Early Donation is Now Open!', date: 'July 31, 2026', preview: 'Exclusive 10% Early Donation Discount. Redeem code EARLY10 before July 31.' },
  { id: 'live', title: 'PLAYCROWS IS NOW LIVE! ', date: 'July 31, 2026', preview: 'The gates have opened, the battlefield awaits, and your journey begins NOW!' },
  { id: 'stream', title: ' Stream the Game & Be Rewarded!', date: 'July 31, 2026', preview: 'Stream PlayCrows and earn exclusive in-game rewards during Official Release.' },
  { id: 'server-rates', title: 'Official Release Server Rates & Features', date: 'July 31, 2026', preview: 'Official server rates and features for the PlayCrows launch.' },
]

export const UPDATES = [
  { id: 'beta-patch-726', title: '07/29/2026 Beta Patch Notes Update Released (726 MB)', date: 'July 29, 2026', preview: 'Major improvements to quests, boss raids, Black Wing Supply, and bug fixes.' },
  { id: 'website-update', title: 'PlayCrows Website Update', date: 'August 6, 2026', preview: 'The official PlayCrows website has been updated with new features and improvements.' },
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
        <a href="https://playcrowsweb.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block no-underline" style={{ fontSize: 13 }}>
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
        <a
          href="https://forms.gle/eictLSFZtFsCbm7Z6"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
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
        <a href="https://playcrowsweb.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block no-underline" style={{ fontSize: 13 }}>
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
        <a href="http://download.playcrows.com/p/PlayPC-en.zip" className="btn-primary inline-block no-underline" style={{ fontSize: 13 }}>
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
          <li>Sunset{'\''}s Mount Summon x11 (Bound) �6</li>
          <li>Sunset{'\''}s Weapon Style Summon x11 (Bound) �6</li>
          <li>Night Crows Stimulant of Growth (Bound) �15</li>
          <li>Food Basket (Bound) �30</li>
          <li>Gold Coin Chest (Bound) �150</li>
          <li>Mileage �15,000</li>
        </ul>
      </div>
      <p style={{ color: '#8A6A3A' }}>Please Note: Only selected streamers will be eligible to receive these rewards. Make sure to follow our streaming guidelines and stay tuned for the list of qualified participants.</p>
      <p>Get your stream ready, invite your friends, and join us as we celebrate the official launch of PlayCrows!</p>
      <p>See you on the battlefield!</p>
      <div style={{ marginTop: 28 }}>
        <a href="https://discord.com/channels/1527607490840100955/1532456047271215306" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block no-underline" style={{ fontSize: 13 }}>
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
        <a href="https://discord.gg/ayxHdychr" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block no-underline" style={{ fontSize: 13 }}>
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
        <ul><li>Major Insignia (PvE) Drop Rate Bonus has been increased from 30% <strong style={{ color: '#5BC8FF' }}>50%</strong>.</li></ul>
        <p style={{ color: '#7AAEC8', marginBottom: 6, marginTop: 12 }}>Daily Distinction Insignia Limit Increased</p>
        <ul><li>While Black Wing Supply is active, the daily Distinction Insignia limit has been increased from 200,000 ? <strong style={{ color: '#5BC8FF' }}>450,000</strong>.</li></ul>
      </div>
      <h3>?? Quest & Progression Improvements</h3>
      <div className="highlight-box">
        <p style={{ color: '#7AAEC8', marginBottom: 6 }}>Quest Rewards Increased</p>
        <ul>
          <li>Main Quest Rewards increased from x1 ? <strong style={{ color: '#5BC8FF' }}>x3</strong></li>
          <li>Sub Quest Rewards increased from x1 ? <strong style={{ color: '#5BC8FF' }}>x3</strong></li>
          <li>Daily Quest Rewards increased from x1 ? <strong style={{ color: '#5BC8FF' }}>x3</strong></li>
          <li>Extra Quest Rewards increased from x1 ? <strong style={{ color: '#5BC8FF' }}>x3</strong></li>
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
