import React from 'react'
import logo from './assets/logo.png'
import heroDesktop from './assets/hero-desktop.jpg'
import heroMobile from './assets/hero-mobile.jpg'
import poolOne from './assets/pool-1.jpg'
import poolTwo from './assets/pool-2.jpg'
import poolThree from './assets/pool-3.jpg'
import poolFour from './assets/pool-4.jpg'
import serviceLiners from './assets/service-liners.png'
import servicePumps from './assets/service-pumps.png'
import serviceFilters from './assets/service-filters.png'
import owner from './assets/owner.jpg'
import linerIcon from './assets/icons/liner.png'
import pumpIcon from './assets/icons/pump.png'
import filterIcon from './assets/icons/filter.png'
import openingIcon from './assets/icons/opening.png'
import closingIcon from './assets/icons/closing.png'
import installIcon from './assets/icons/install.png'

const phone = '765-660-1428'

const navItems = ['Home', 'About', 'Services', 'Booking', 'Contact']

const services = [
  {
    title: 'Above-Ground Pool Installs',
    text: 'Complete installation of above-ground pools with quality materials and expert setup.',
    icon: installIcon,
    image: poolOne,
  },
  {
    title: 'In-Ground Pool Installs',
    text: 'Professional in-ground pool installation built for beauty, durability, and years of enjoyment.',
    icon: installIcon,
    image: poolTwo,
  },
  {
    title: 'Pool Liners',
    text: 'High-quality liners for a perfect fit and long-lasting performance.',
    icon: linerIcon,
    image: serviceLiners,
  },
  {
    title: 'Pool Pumps',
    text: 'Reliable pump installation and replacement to keep your water flowing.',
    icon: pumpIcon,
    image: servicePumps,
  },
  {
    title: 'Pool Filters',
    text: 'Clean, clear water starts with a good filter. We install and service all types.',
    icon: filterIcon,
    image: serviceFilters,
  },
  {
    title: 'Pool Openings',
    text: 'Get your pool ready for the season. We handle everything from start to swim.',
    icon: openingIcon,
    image: poolThree,
  },
  {
    title: 'Pool Closings',
    text: 'We close your pool the right way to protect it all winter long.',
    icon: closingIcon,
    image: poolFour,
  },
]

function IconGlyph({ name, className = 'h-6 w-6', stroke = 'currentColor' }) {
  const common = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
  }

  if (name === 'phone') {
    return (
      <svg {...common}>
        <path d="M7.2 4.6 9 4.1c.8-.2 1.6.2 1.9.9l.8 1.9c.3.7.1 1.5-.5 2l-1 .8a11.7 11.7 0 0 0 4.1 4.1l.8-1c.5-.6 1.3-.8 2-.5l1.9.8c.7.3 1.1 1.1.9 1.9l-.5 1.8c-.2.8-.9 1.3-1.7 1.3C11.2 18.1 5.9 12.8 5.9 6.3c0-.8.5-1.5 1.3-1.7Z" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if (name === 'calendar') {
    return (
      <svg {...common}>
        <path d="M7 3.8v3M17 3.8v3M4.5 9.2h15M6.2 5.5h11.6c1 0 1.7.8 1.7 1.7v10.6c0 1-.8 1.7-1.7 1.7H6.2c-1 0-1.7-.8-1.7-1.7V7.2c0-1 .8-1.7 1.7-1.7Z" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 12.3h2.2M13.8 12.3H16M8 16h2.2M13.8 16H16" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }

  if (name === 'shield') {
    return (
      <svg {...common}>
        <path d="M12 3.4 18.1 6v5.4c0 4-2.4 7.4-6.1 9.2-3.7-1.8-6.1-5.2-6.1-9.2V6L12 3.4Z" stroke={stroke} strokeWidth="1.8" strokeLinejoin="round" />
        <text x="12" y="14.2" textAnchor="middle" fill={stroke} fontSize="6.6" fontWeight="900" fontFamily="Arial, Helvetica, sans-serif">25</text>
      </svg>
    )
  }

  if (name === 'person') {
    return (
      <svg {...common}>
        <path d="M12 12.2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" fill={stroke} />
        <path d="M4.8 20.2c.8-3.7 3.5-5.8 7.2-5.8s6.4 2.1 7.2 5.8" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }

  if (name === 'waves') {
    return (
      <svg {...common}>
        <path d="M3 9.5c2.4-2 4.8-2 7.2 0s4.8 2 7.2 0c1.2-1 2.4-1.5 3.6-1.5M3 14c2.4-2 4.8-2 7.2 0s4.8 2 7.2 0c1.2-1 2.4-1.5 3.6-1.5M3 18.5c2.4-2 4.8-2 7.2 0s4.8 2 7.2 0c1.2-1 2.4-1.5 3.6-1.5" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }

  if (name === 'handshake') {
    return (
      <svg {...common}>
        <path d="m8.1 12.6 2.2-2.2c.7-.7 1.6-.8 2.4-.2l1 .8c.7.5 1.6.5 2.2-.1l.9-.9" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m4 11.2 3.4-3.4 4.5 4.5-3.4 3.4c-.5.5-1.2.5-1.7 0L4 12.9c-.5-.5-.5-1.2 0-1.7ZM20 11.2l-3.4-3.4-2.4 2.4 3.4 3.4 2.4-2.4Z" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m9.4 16.7.9.9c.4.4 1.1.4 1.5 0l3-3" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  }

  if (name === 'drop') {
    return (
      <svg {...common}>
        <path d="M12 3.5c3.5 4.2 5.3 7.2 5.3 9.7A5.3 5.3 0 0 1 6.7 13.2c0-2.5 1.8-5.5 5.3-9.7Z" stroke={stroke} strokeWidth="1.9" strokeLinejoin="round" />
        <path d="M9.2 14.2c.6 1.3 1.5 2 2.8 2" stroke={stroke} strokeWidth="1.9" strokeLinecap="round" />
      </svg>
    )
  }

  return null
}

function RoundIcon({ name, className = '', dark = false }) {
  return (
    <span className={`grid shrink-0 place-items-center rounded-full ${dark ? 'size-14 border-2 border-white/65 text-white' : 'size-11 bg-white/20 text-white'} ${className}`}>
      <IconGlyph name={name} className={dark ? 'h-8 w-8' : 'h-5 w-5'} />
    </span>
  )
}

function CallButton({ className = '', stacked = false, compact = false, split = false }) {
  return (
    <a className={`btn-green ${stacked ? 'flex-col gap-0 leading-tight' : ''} ${className}`} href={`tel:${phone}`}>
      <RoundIcon name="phone" className={stacked ? 'mb-1 size-9' : compact ? 'size-7' : 'size-10'} />
      {split ? (
        <span className="flex flex-col items-start leading-none">
          <span className="text-[13px]">CALL TODAY</span>
          <span className="mt-1 text-[14px]">{phone}</span>
        </span>
      ) : (
        <>
          <span>{stacked ? 'Call Today' : 'CALL TODAY'}</span>
          <span>{phone}</span>
        </>
      )}
    </a>
  )
}

function BookButton({ className = '' }) {
  return (
    <a className={`btn-navy ${className}`} href="#booking">
      <span className="grid size-9 place-items-center rounded-[4px] border border-white/45 bg-white/10">
        <IconGlyph name="calendar" className="h-5 w-5" />
      </span>
      <span>Book Now</span>
    </a>
  )
}

function Header({ compact = false }) {
  return (
    <header className="relative z-30 border-b border-slate-200 bg-white/95">
      <div className={`container-page flex items-center justify-between ${compact ? 'h-[82px]' : 'h-[92px]'}`}>
        <a href="#home" className="flex items-center">
          <img src={logo} alt="Pool Boyz Pool Tech" className={`${compact ? 'h-20' : 'h-24'} w-auto object-contain`} />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={`nav-link ${item === 'Home' ? 'nav-link-active' : ''}`}>
              {item}
            </a>
          ))}
        </nav>
        <CallButton compact className="hidden min-w-[150px] px-4 py-3 text-xs sm:inline-flex [&>span:nth-child(2)]:sr-only" />
      </div>
    </header>
  )
}

function WaveFooter({ tall = false }) {
  return (
    <div className={`pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden ${tall ? 'h-44' : 'h-32'}`}>
      <svg viewBox="0 0 1440 220" preserveAspectRatio="none" className="absolute bottom-0 h-full w-full">
        <path fill="#21a3e8" d="M0 112 C210 18 358 176 548 93 C750 5 937 36 1126 111 C1258 163 1355 150 1440 116 L1440 220 L0 220 Z" />
        <path fill="#0c66b4" d="M0 141 C222 55 363 199 562 122 C779 38 986 76 1161 139 C1278 181 1370 174 1440 148 L1440 220 L0 220 Z" />
        <path fill="#021947" d="M0 174 C260 96 402 222 605 151 C818 77 984 110 1173 166 C1280 198 1374 196 1440 174 L1440 220 L0 220 Z" />
      </svg>
    </div>
  )
}

function HeroWaveBorder() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 overflow-hidden md:h-28">
      <svg viewBox="0 0 1440 180" preserveAspectRatio="none" className="absolute bottom-0 h-full w-full">
        <path fill="#ffffff" d="M0 34 C170 92 332 112 509 74 C706 32 875 24 1066 55 C1211 78 1337 63 1440 25 L1440 180 L0 180 Z" />
        <path fill="#22a9ee" d="M0 72 C170 130 334 143 518 101 C709 57 889 50 1068 78 C1209 101 1329 91 1440 52 L1440 111 C1325 142 1198 146 1057 122 C888 94 716 102 530 143 C338 186 156 159 0 105 Z" />
        <path fill="#0d68b8" d="M0 92 C168 149 344 164 532 121 C719 79 893 74 1064 103 C1211 128 1330 113 1440 78 L1440 130 C1324 164 1201 171 1058 146 C892 118 725 126 540 166 C344 209 157 183 0 126 Z" />
        <path fill="#021947" d="M0 121 C166 178 344 193 536 151 C724 109 887 106 1052 134 C1205 160 1324 150 1440 116 L1440 180 L0 180 Z" />
      </svg>
    </div>
  )
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="mx-auto mb-8 max-w-2xl text-center">
      {eyebrow && <p className="text-xs font-black uppercase tracking-[0.18em] text-green">{eyebrow}</p>}
      <h2 className="mt-1 text-4xl font-black leading-none text-navy md:text-5xl">{title}</h2>
      {text && <p className="mx-auto mt-4 max-w-xl text-lg font-bold leading-snug text-deep">{text}</p>}
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-green" />
    </div>
  )
}

function Home() {
  const quickStats = [
    ['shield', '25 Years', 'Experience'],
    ['person', 'Dependable', 'Local Service'],
    ['waves', 'Above-Ground', 'or In-Ground'],
  ]

  const miniServices = [
    ['Liners', linerIcon],
    ['Pumps', pumpIcon],
    ['Filters', filterIcon],
    ['Openings', openingIcon],
    ['Closings', closingIcon],
    ['Installs', installIcon],
  ]

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-white">
      <Header />
      <div className="relative overflow-hidden">
        <picture className="absolute inset-0">
          <source media="(max-width: 767px)" srcSet={heroMobile} />
          <img src={heroDesktop} alt="" className="h-full w-full object-cover object-center" />
        </picture>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.98)_0%,rgba(255,255,255,.92)_38%,rgba(255,255,255,.28)_75%,rgba(255,255,255,.08)_100%)] md:bg-[linear-gradient(90deg,rgba(255,255,255,.98)_0%,rgba(255,255,255,.9)_43%,rgba(255,255,255,.22)_77%,rgba(255,255,255,.04)_100%)]" />
        <div className="container-page relative z-20 grid min-h-[510px] items-start gap-5 pb-28 pt-7 md:min-h-[430px] md:grid-cols-[310px_1fr] md:gap-8 md:pb-24">
          <div className="flex justify-center md:justify-start">
            <img src={logo} alt="Pool Boyz Pool Tech" className="w-[260px] max-w-full drop-shadow-xl md:w-[290px]" />
          </div>
          <div className="max-w-[545px] text-center md:pt-4 md:text-left">
            <h1 className="text-[43px] font-black leading-[0.95] text-navy sm:text-5xl md:text-[60px]">
              Built to Splash.
              <span className="block text-green">Made to Last.</span>
            </h1>
            <div className="mx-auto mt-3 h-[5px] w-[98px] rounded-full bg-green md:ml-[3px] md:mr-auto" />
            <p className="mt-5 text-[17px] font-black leading-none text-deep md:text-[19px]">Above-Ground or In-Ground.</p>
            <p className="mx-auto mt-6 max-w-[460px] text-[18px] font-black leading-[1.22] text-deep md:mx-0 md:text-[20px]">
              <span className="block">Professional Pool Installation & Service</span>
              <span className="block">You Can Count On.</span>
            </p>
            <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <CallButton split className="min-h-[58px] min-w-[258px] px-5 py-3 text-[13px] md:min-w-[252px] [&>span:first-child]:size-9" />
              <BookButton className="min-h-[58px] min-w-[214px] px-5 py-3 text-[13px]" />
            </div>
          </div>
        </div>
        <HeroWaveBorder />
      </div>
      <div className="relative z-20 bg-deep py-5 text-white">
        <div className="container-page grid gap-5 sm:grid-cols-3">
          {quickStats.map(([icon, top, bottom]) => (
            <div key={top} className="flex items-center justify-center gap-4 border-white/15 sm:border-r last:border-r-0">
              <RoundIcon name={icon} dark />
              <div className="leading-tight">
                <p className="text-base font-black">{top}</p>
                <p className="text-sm font-bold text-white/80">{bottom}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative z-20 bg-white py-7">
        <div className="container-page">
          <p className="mb-5 text-center text-base font-black uppercase text-navy">Our Services</p>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
            {miniServices.map(([name, icon]) => (
              <div key={name} className="text-center">
                <img src={icon} alt="" className="mx-auto h-14 w-14 object-contain" />
                <p className="mt-2 text-sm font-black text-deep">{name}</p>
              </div>
            ))}
          </div>
          <p className="mb-4 mt-8 text-center text-base font-black uppercase text-navy">Recent Work</p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[poolOne, poolTwo, poolThree, poolFour].map((image) => (
              <img key={image} src={image} alt="" className="h-28 w-full rounded-[3px] border-4 border-white object-cover shadow-md" />
            ))}
          </div>
          <div className="mt-5 text-center">
            <a href="#services" className="btn-green px-8 py-2.5 text-xs">View Our Services</a>
          </div>
        </div>
      </div>
      <div className="relative z-20 bg-deep py-5 text-white">
        <div className="container-page flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-xl font-black">Ready to Get Your Pool Ready?</p>
            <p className="text-sm font-semibold text-white/80">Call today or book online. We're here to help!</p>
          </div>
          <a href={`tel:${phone}`} className="inline-flex items-center gap-3 text-3xl font-black">
            <IconGlyph name="phone" className="h-8 w-8" />
            {phone}
          </a>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white pb-36 pt-14 md:pt-16">
      <div className="container-page relative z-10">
        <SectionTitle title="About Pool Boyz Pool Tech" text="Built on Experience. Focused on You." />
        <div className="grid items-center gap-9 md:grid-cols-[1fr_1.1fr]">
          <div>
            <h3 className="text-3xl font-black text-navy">Meet Jason Cromer</h3>
            <p className="mt-1 text-lg font-black text-deep">Owner of Pool Boyz Pool Tech</p>
            <div className="mt-7 space-y-4 text-base font-semibold leading-relaxed text-slate-800">
              <p>With 25 years of hands-on experience, Jason Cromer has built a reputation for reliable service, quality workmanship, and honest pricing.</p>
              <p>From installs to repairs and seasonal care, Jason takes pride in doing the job right the first time.</p>
              <p className="font-black text-navy">Your pool is in good hands with Pool Boyz Pool Tech.</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-[8px] border-4 border-white shadow-panel">
            <img src={owner} alt="Jason Cromer" className="h-[360px] w-full object-cover object-[62%_44%]" />
          </div>
        </div>
        <div className="mt-9 grid rounded-[8px] bg-deep p-5 text-white shadow-panel md:grid-cols-3">
          {[
            ['shield', '25 Years Experience', 'Decades of knowledge in pool installation, maintenance, and repair.'],
            ['handshake', 'Honest & Reliable', 'We believe in clear communication, fair pricing, and quality work.'],
            ['drop', 'Above-Ground or In-Ground', 'We service all types of pools and equipment.'],
          ].map(([icon, title, text], index) => (
            <div key={title} className={`px-6 py-5 text-center ${index < 2 ? 'md:border-r md:border-white/20' : ''}`}>
              <RoundIcon name={icon} dark className="mx-auto" />
              <h4 className="mt-4 text-xl font-black">{title}</h4>
              <p className="mx-auto mt-2 max-w-[240px] text-sm font-semibold leading-relaxed text-white/78">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-7 text-center">
          <p className="text-2xl font-black text-green">We treat every pool like it's our own.</p>
          <p className="mx-auto mt-1 max-w-2xl text-base font-bold text-deep">Our goal is simple - keep your pool clean, safe, and ready for memories that last.</p>
        </div>
      </div>
      <WaveFooter />
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-gradient-to-b from-[#f6fbff] to-white pb-36 pt-14 md:pt-16">
      <div className="container-page relative z-10">
        <SectionTitle title="Our Services" text="Everything Your Pool Needs. All in One Place." />
        <div className="mx-auto max-w-[970px] overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-panel">
          {services.map((service) => (
            <div key={service.title} className="grid min-h-[104px] grid-cols-[90px_1fr] items-center gap-4 border-b border-slate-200 p-3 last:border-b-0 md:grid-cols-[104px_1fr_330px]">
              <div className="grid place-items-center">
                <img src={service.icon} alt="" className="h-16 w-16 object-contain" />
              </div>
              <div className="pr-2">
                <h3 className="text-xl font-black leading-tight text-navy">{service.title}</h3>
                <p className="mt-1 text-sm font-bold leading-snug text-slate-700">{service.text}</p>
              </div>
              <img src={service.image} alt="" className="hidden h-[86px] w-full rounded-[4px] object-cover md:block" />
            </div>
          ))}
        </div>
      </div>
      <WaveFooter tall />
    </section>
  )
}

function Booking() {
  const serviceOptions = ['Above-Ground Pool Installs', 'In-Ground Pool Installs', 'Pool Liners', 'Pool Pumps', 'Pool Filters', 'Pool Openings', 'Pool Closings']

  return (
    <section id="booking" className="relative overflow-hidden border-y border-navy/20 bg-white">
      <div className="grid min-h-[620px] lg:grid-cols-[36%_64%]">
        <div className="relative min-h-[500px] overflow-hidden">
          <img src={poolTwo} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/15 via-white/5 to-white/80 lg:bg-gradient-to-r lg:from-white/10 lg:via-white/0 lg:to-white" />
          <div className="absolute -right-16 top-0 h-full w-40 rounded-l-[55%] bg-white shadow-[-16px_0_0_#0c66b4,-32px_0_0_#21a3e8]" />
          <img src={logo} alt="" className="absolute left-8 top-7 w-36 drop-shadow-xl" />
          <div className="absolute bottom-10 left-10 w-56 rounded-[8px] bg-white p-5 shadow-panel">
            <p className="mb-3 text-lg font-black uppercase text-navy">Services</p>
            {serviceOptions.concat('Other').map((item) => (
              <div key={item} className="mb-1.5 flex items-center gap-2 text-xs font-black text-deep">
                <span className="grid size-4 place-items-center rounded-full bg-green text-[10px] text-white">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex items-center px-6 py-10 lg:px-14">
          <CallButton className="absolute right-8 top-5 hidden px-4 py-2 text-xs md:inline-flex [&>span:first-child]:size-6 [&>span:nth-child(2)]:sr-only" />
          <div className="grid w-full items-start gap-10 md:grid-cols-[220px_1fr]">
            <div className="pt-12">
              <h2 className="text-5xl font-black leading-none text-navy">Request Service</h2>
              <p className="mt-7 text-lg font-bold leading-snug text-deep">Fill out the form and Jason will contact you to confirm details and availability.</p>
            </div>
            <form className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <FormInput label="Full Name *" />
                <FormInput label="Phone Number *" />
                <FormInput label="Email Address *" />
                <Select label="Pool Type *" options={['Select One', 'Above-Ground', 'In-Ground', 'Not Sure']} />
              </div>
              <Select label="Service Needed *" options={['Select a Service', ...serviceOptions]} />
              <div className="grid gap-4 md:grid-cols-2">
                <FormInput label="Preferred Date" type="date" />
                <Select label="Best Time to Contact" options={['Select One', 'Morning', 'Afternoon', 'Evening']} />
              </div>
              <TextArea label="Additional Details / Message" />
              <div className="pt-2 text-center">
                <button type="button" className="btn-green min-w-60">Submit Request <span aria-hidden="true" className="text-lg leading-none">-&gt;</span></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-navy/10 bg-white">
      <div className="grid min-h-[520px] items-stretch lg:grid-cols-[1fr_350px]">
        <div className="container-page grid items-center gap-8 py-10 lg:grid-cols-[260px_1fr]">
          <div>
            <h2 className="text-5xl font-black text-navy">Contact Us</h2>
            <div className="mt-3 h-1 w-20 rounded-full bg-green" />
            <p className="mt-6 text-base font-bold leading-snug text-deep">We're here to help with all your pool needs. Call, text, or send us a message anytime!</p>
            <div className="mt-8 space-y-5">
              <ContactInfo icon="person" title="Owner" value="Jason Cromer" />
              <ContactInfo icon="phone" title="Phone" value={phone} />
              <ContactInfo icon="shield" title="25 Years" value="Experience" />
            </div>
          </div>
          <form className="rounded-[4px] border border-slate-200 bg-white p-6 shadow-panel">
            <div className="grid gap-4 md:grid-cols-2">
              <FormInput label="Full Name *" />
              <FormInput label="Phone Number *" />
            </div>
            <div className="mt-4">
              <FormInput label="Email Address *" />
            </div>
            <div className="mt-4">
              <TextArea label="Message *" rows={6} />
            </div>
            <button type="button" className="btn-green mt-4 px-8 py-3 text-xs">Send Message</button>
          </form>
        </div>
        <aside className="relative flex min-h-[420px] flex-col items-center justify-center bg-deep px-8 text-center text-white">
          <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${poolThree})` }} />
          <div className="relative z-10">
            <img src={logo} alt="" className="mx-auto w-64 drop-shadow-2xl" />
            <p className="mt-4 text-2xl font-black leading-tight">Built to Splash.<br /><span className="text-green">Made to Last.</span></p>
            <p className="mt-2 text-base font-black">Above-Ground or In-Ground.</p>
            <CallButton stacked className="mt-7 min-w-64 px-7 py-4 text-lg" />
          </div>
        </aside>
      </div>
      <div className="bg-deep py-4 text-center text-lg font-bold text-white">
        Thank you for supporting local! <span className="text-lime">♥</span>
      </div>
    </section>
  )
}

function FormInput({ label, type = 'text' }) {
  return (
    <label>
      <span className="label">{label}</span>
      <input className="field" type={type} />
    </label>
  )
}

function Select({ label, options }) {
  return (
    <label>
      <span className="label">{label}</span>
      <select className="field">
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  )
}

function TextArea({ label, rows = 5 }) {
  return (
    <label>
      <span className="label">{label}</span>
      <textarea className="field h-auto py-3" rows={rows} />
    </label>
  )
}

function ContactInfo({ icon, title, value }) {
  return (
    <div className="flex items-center gap-4">
      <div className="grid size-12 shrink-0 place-items-center rounded-full border-2 border-navy text-navy">
        <IconGlyph name={icon} className="h-7 w-7" />
      </div>
      <div>
        <p className="text-xs font-black text-slate-700">{title}</p>
        <p className="text-xl font-black leading-tight text-navy">{value}</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <main>
      <Home />
      <About />
      <Services />
      <Booking />
      <Contact />
    </main>
  )
}
