import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Mail, Check, ArrowUpRight, Star } from 'lucide-react'
import { business, telHref, mailHref } from '../config.js'
import { services, steps, heroStats, aboutStats, platforms, testimonials, partners } from '../data/content.js'
import { icon } from '../components/icons.js'
import { Btn, Container, G, Label, Tiny, Tick, Ico, SectionHead } from '../components/ui.jsx'

function ServiceCard({ s, big }) {
  const I = icon(s.icon)
  if (big) return (
    <article className="flex flex-col bg-ink p-7 text-white lg:row-span-2">
      <div className="flex items-start justify-between"><Ico I={I} className="!bg-green !text-white" /><Label dark>{s.kicker}</Label></div>
      <h3 className="mt-16 text-3xl font-extrabold !text-white">{s.title}</h3>
      <p className="mt-3 max-w-md text-sm text-slate-300">{s.text}</p>
      <ul className="mt-5 space-y-2 text-slate-300">{s.short.map((b) => <Tick key={b}>{b}</Tick>)}</ul>
      <div className="mt-auto flex items-end justify-between pt-16"><span className="text-[10px] font-bold uppercase tracking-widest text-green">{s.meta}</span><Link to={`/services#${s.id}`} aria-label={s.title} className="flex h-9 w-9 items-center justify-center bg-green text-white"><ArrowRight className="h-4 w-4" /></Link></div>
    </article>
  )
  return (
    <article className="flex flex-col border border-line bg-white p-6">
      <div className="flex items-start justify-between"><Ico I={I} /><span className="text-[10px] font-bold text-line">{s.n}</span></div>
      <h3 className="mt-5 text-lg font-extrabold">{s.title}</h3><p className="mt-2 flex-1 text-[13px] leading-relaxed">{s.text}</p>
      <div className="mt-5 flex items-center justify-between"><span className="text-[10px] font-bold uppercase tracking-widest text-green">{s.meta}</span><Link to={`/services#${s.id}`} aria-label={s.title} className="flex h-8 w-8 items-center justify-center border border-line text-ink hover:bg-mint"><ArrowRight className="h-3.5 w-3.5" /></Link></div>
    </article>
  )
}

export default function Home() {
  const [first, ...rest] = services
  return (
    <>
      <section className="bg-mint">
        <Container className="grid items-start gap-10 py-14 sm:py-20 lg:grid-cols-[1.7fr_1fr]">
          <div>
            <h1 className="text-5xl font-extrabold leading-[1.02] sm:text-7xl">Stores that convert. Roadmaps you can fund.<br /><span className="bg-green-soft px-1 text-green">One senior squad.</span></h1>
            <p className="mt-6 max-w-lg text-sm leading-relaxed">We design, build, migrate, and optimize e-commerce—Shopify, WooCommerce, headless stacks, and the integrations that keep ops honest.</p>
            <div className="mt-7 flex flex-wrap gap-3"><Btn to="/contact" arrow>Book a call</Btn><Btn to="/how-it-works" variant="outline" arrow>See how we work</Btn></div>
            <ul className="mt-10 grid gap-3 border-t border-line pt-6 text-xs sm:grid-cols-2"><Tick>Instrumented funnels from day one</Tick><Tick>Milestones tied to scope, not vibes</Tick><Tick>Same-day replies on business days</Tick></ul>
          </div>
          <div className="space-y-3 lg:pt-8">{heroStats.map(([n, u, l]) => <div key={l} className="border border-line bg-white p-5"><div className="text-3xl font-extrabold text-ink">{n}<span className="text-sm text-green">{u}</span></div><p className="mt-1 text-[9px] font-bold uppercase tracking-widest">{l}</p></div>)}</div>
        </Container>
        <div className="border-t border-line bg-[#e9eeed] py-6"><Container><p className="mb-3 text-[9px] font-bold uppercase tracking-[0.2em]">Platforms & focus</p><div className="flex flex-wrap gap-2">{platforms.map((p) => <span key={p} className="border border-line bg-white px-3 py-1.5 text-[11px] font-semibold text-ink">{p}</span>)}</div></Container></div>
      </section>

      <section className="py-16 sm:py-24"><Container>
        <SectionHead label="What we do" title={<>Commerce delivery <G>without the agency theater.</G></>} text="Whether you are launching a net-new brand or replatforming a seven-figure catalog, we keep scope legible and ship in slices you can measure." right={<Link to="/services" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">All services <ArrowRight className="h-3 w-3" /></Link>} />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr]">
          <ServiceCard s={first} big />
          <div className="grid gap-4">{rest.slice(0, 2).map((s) => <ServiceCard key={s.id} s={s} />)}</div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">{rest.slice(2).map((s) => <ServiceCard key={s.id} s={s} />)}</div>
      </Container></section>

      <section className="bg-mint py-16 sm:py-24"><Container>
        <SectionHead label="Who we are" title={<>Engineers and PMs. <G>Partners, not ticket takers.</G></>} text="A senior-led studio that ships commerce work with clear milestones, documented handoffs, and the same people on your Slack thread after launch." />
        <dl className="grid grid-cols-2 border border-line bg-white lg:grid-cols-4">{aboutStats.map(([v, l]) => <div key={l} className="border-b border-r border-line p-5 sm:p-7"><dt className="text-4xl font-extrabold text-ink sm:text-5xl">{v}</dt><dd className="mt-2 text-[9px] font-bold uppercase tracking-[0.2em]">{l}</dd></div>)}</dl>
        <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=70&w=1400" alt="Team reviewing e-commerce analytics on monitors in a modern office" loading="lazy" className="aspect-[16/10] w-full border border-line object-cover" />
          <div><p className="text-sm leading-relaxed">We built {business.name} around a simple rule: treat every storefront like a product company would—instrumented releases, honest estimates, and no bait-and-switch scope.</p><Btn to="/about" arrow className="mt-6">Discover our story</Btn></div>
        </div>
      </Container></section>

      <section className="py-16 sm:py-24"><Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div><Label>How we work</Label><h2 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">A simple <G>three-step partnership.</G></h2><p className="mt-4 max-w-sm text-sm">Same rhythm for a net-new DTC launch or a messy replatform—scaled to your risk tolerance, never rushed past staging.</p><Link to="/how-it-works" className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-ink">See the full process <ArrowRight className="h-3 w-3" /></Link></div>
        <ol className="relative space-y-4 border-l border-line pl-8">{steps.map((s) => { const I = icon(s.icon); return (
          <li key={s.n} className="relative"><Ico I={I} dark className="absolute -left-12 top-4 !h-8 !w-8 ring-4 ring-white" />
            <article className="border border-line bg-white p-6"><Tiny>Step {s.n}</Tiny><h3 className="mt-2 text-xl font-extrabold">{s.title}</h3><p className="mt-2 text-[13px] leading-relaxed">{s.text}</p><ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-4 text-[10px] font-semibold text-mute">{s.bullets.map((b) => <li key={b}>· {b}</li>)}</ul></article></li>) })}</ol>
      </Container></section>

      {business.showSocialProof && testimonials.length > 0 && (
        <section className="bg-mint py-16 sm:py-24"><Container>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><Label>Client stories</Label><h2 className="mt-3 text-3xl font-extrabold sm:text-5xl">Trusted by <G>teams who ship revenue, not decks.</G></h2></div><div className="flex items-center gap-1 text-green">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-4 w-4 fill-current" />)}<span className="ml-2 text-[10px] font-bold uppercase tracking-widest text-mute">5.0 average</span></div></div>
          <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
            <figure className="bg-ink p-8 text-white"><blockquote className="text-2xl font-bold leading-snug">“{testimonials[0].q}”</blockquote><figcaption className="mt-8 border-t border-white/10 pt-5 text-sm"><b className="block text-white">{testimonials[0].name}</b><span className="text-[10px] uppercase tracking-widest text-green">{testimonials[0].role}</span></figcaption></figure>
            <div className="space-y-4">{testimonials.slice(1).map((t) => <figure key={t.name} className="border border-line bg-white p-5 text-sm"><blockquote>“{t.q}”</blockquote><figcaption className="mt-4 border-t border-line pt-3"><b className="block text-ink">{t.name}</b><span className="text-[9px] font-bold uppercase tracking-widest">{t.role}</span></figcaption></figure>)}
              {partners.length > 0 && <div className="border border-green/30 bg-green-soft p-5 text-xs"><Tiny className="mb-3">Recent partners</Tiny><div className="grid grid-cols-2 gap-2 text-ink">{partners.map((p) => <span key={p}>{p}</span>)}</div></div>}</div>
          </div>
        </Container></section>
      )}

      <section className="py-16 sm:py-24"><Container><div className="grid lg:grid-cols-[1.4fr_1fr]">
        <div className="bg-ink p-8 text-white sm:p-12"><Label dark>Ready when you are</Label><h2 className="mt-4 text-4xl font-extrabold !text-white sm:text-5xl">Tell us the <G>commerce problem next.</G></h2><p className="mt-4 max-w-md text-sm text-slate-300">Share platform, timeline, and what “done” looks like—we reply with a scoped next step or a short list of clarifying questions.</p><Btn to="/contact" variant="green" arrow className="mt-7">Start a project</Btn><p className="mt-5 flex items-center gap-2 text-[11px] text-slate-400"><Check className="h-3 w-3 text-green" />Replies within one business day · {business.hours}</p></div>
        <div className="bg-green p-8 text-white sm:p-10"><Tiny className="!text-white/80">Or reach us directly</Tiny>
          <div className="mt-5 space-y-3">
            {telHref() && <a href={telHref()} className="flex items-center gap-3 border border-white/30 bg-white/10 p-4 text-sm"><Phone className="h-4 w-4" /><span><span className="block text-[9px] font-bold uppercase tracking-widest text-white/70">Direct line</span><b>{business.phone}</b></span><ArrowUpRight className="ml-auto h-4 w-4" /></a>}
            {mailHref() && <a href={mailHref()} className="flex items-center gap-3 border border-white/30 bg-white/10 p-4 text-sm"><Mail className="h-4 w-4" /><span className="min-w-0"><span className="block text-[9px] font-bold uppercase tracking-widest text-white/70">Email</span><b className="break-all">{business.email}</b></span><ArrowUpRight className="ml-auto h-4 w-4" /></a>}
            {!telHref() && !mailHref() && <Link to="/contact" className="block border border-white/30 bg-white/10 p-4 text-sm font-bold">Use the contact form →</Link>}
          </div><p className="mt-5 text-[11px] text-white/80">Strategy calls by appointment.</p></div>
      </div></Container></section>
    </>
  )
}
