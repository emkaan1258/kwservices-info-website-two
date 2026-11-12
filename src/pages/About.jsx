import { Landmark, Users, MapPin, Target as T2 } from 'lucide-react'
import { business } from '../config.js'
import { aboutPillars, bigStats } from '../data/content.js'
import { icon } from '../components/icons.js'
import { Container, G, Label, Tiny, Tick, Ico, PageHero, Btn, PhoneBtn } from '../components/ui.jsx'

export default function About() {
  const glance = [[Landmark, 'Founded', '2019'], [Users, 'Team', 'PMs, engineers & design'], [MapPin, 'HQ', business.addressLines.slice(-1)[0] || '—'], [T2, 'Focus', 'E-commerce build & growth']]
  return (
    <>
      <PageHero crumbs={[['Home', '/'], ['About']]} label="Who we are" title={<>We're <G>{business.name}.</G></>} text="A privately held e-commerce studio—clear scopes, instrumented releases, and one accountable lead from discovery through your next sprint after launch.">
        <div className="border border-white/15 bg-white/5 p-5"><p className="mb-3 text-[9px] font-bold uppercase tracking-widest text-slate-400">At a glance</p>{glance.map(([I, k, v]) => <div key={k} className="flex items-center gap-3 border-t border-white/10 py-3 text-xs"><I className="h-4 w-4 text-green" /><span className="uppercase tracking-wider text-slate-400">{k}</span><b className="ml-auto text-right text-white">{v}</b></div>)}</div>
      </PageHero>
      <section className="py-16 sm:py-24"><Container><Label>Our approach</Label>
        <p className="mt-6 max-w-4xl text-3xl font-medium leading-snug text-ink sm:text-4xl">We are builders first—senior engineers and PMs who have shipped <G>high-traffic storefronts</G>, <G>messy migrations</G>, and <G>integrations that cannot fail quietly</G>. That shows up in every roadmap and every release note.</p>
        <div className="mt-10 grid gap-8 border-t border-line pt-8 text-[13px] leading-relaxed md:grid-cols-2"><p>Every engagement starts with catalog reality, platform constraints, and the metrics you need to defend internally—then we sequence work so you get value before the big-bang launch.</p><p>Faster answers, documented decisions, and a post-launch thread that does not vanish. The stacks change; the bar for delivery does not.</p></div>
      </Container></section>
      <section className="bg-mint py-16 sm:py-24"><Container>
        <Label>Story · Mission · Vision</Label><h2 className="mb-8 mt-3 text-4xl font-extrabold sm:text-5xl">What drives <G>the work.</G></h2>
        <div className="space-y-4">{aboutPillars.map((p) => { const I = icon(p.icon); return (
          <article key={p.n} className="grid gap-4 border border-line bg-white p-6 sm:grid-cols-[auto_1fr] sm:gap-8 sm:p-8">
            <div className="flex items-center gap-3"><span className="text-5xl font-extrabold text-green">{p.n}</span><span className="flex flex-col items-center gap-1"><Ico I={I} className="!h-7 !w-7 rounded-full" /><span className="text-[8px] font-bold uppercase tracking-widest">{p.k}</span></span></div>
            <div><h3 className="text-xl font-extrabold">{p.t}</h3><p className="mt-2 max-w-2xl text-[13px] leading-relaxed">{p.n === '01' ? `${business.name} ${p.p}` : p.p}</p>{p.b && <ul className="mt-4 grid gap-2 sm:grid-cols-2">{p.b.map((b) => <Tick key={b} box>{b}</Tick>)}</ul>}</div>
          </article>) })}</div>
      </Container></section>
      <section className="py-16 sm:py-24"><Container>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><Label>By the numbers</Label><h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">Small team. <G>Serious throughput.</G></h2></div><p className="max-w-xs text-xs">A snapshot of how we measure delivery—not vanity hours billed.</p></div>
        <div className="grid gap-4 md:grid-cols-2">{bigStats.map(([v, l, ic, t]) => { const I = icon(ic); return <div key={l} className="flex gap-5 border border-line p-6"><div><Ico I={I} /><div className="mt-6 text-5xl font-extrabold text-ink">{v}</div></div><div><Tiny>{l}</Tiny><p className="mt-2 text-[13px] leading-relaxed">{t}</p></div></div> })}</div>
      </Container></section>
      <section className="bg-ink py-14"><Container className="flex flex-wrap items-center justify-between gap-8">
        <div className="max-w-xl"><Tiny>Get in touch</Tiny><h2 className="mt-3 text-4xl font-extrabold !text-white">Ready for a clearer <G>commerce roadmap?</G></h2><p className="mt-3 text-sm text-slate-300">Tell us what you sell today and what needs to change. We reply within one business day with next steps or sharp questions—not a generic brochure.</p></div>
        <div className="flex flex-col gap-3"><Btn to="/contact" variant="green" arrow>Book a call</Btn><PhoneBtn variant="ghostDark" /></div>
      </Container></section>
    </>
  )
}
