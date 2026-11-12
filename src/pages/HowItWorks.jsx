import { Headphones, Phone } from 'lucide-react'
import { business, telHref } from '../config.js'
import { process5, faqs } from '../data/content.js'
import { icon } from '../components/icons.js'
import { Container, G, Label, Tick, Ico, Btn, PageHero, PhoneBtn, Tiny } from '../components/ui.jsx'

export default function HowItWorks() {
  return (
    <>
      <PageHero center crumbs={[['Home', '/'], ['How it works']]} label="Process" title={<>From discovery to <G>recurring value.</G></>} text="A clear five-step delivery lane—scaled to your risk tolerance. Same lead thread whether you are migrating a catalog or shipping a net-new brand.">
        <ol className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-6 border-t border-white/10 pt-8 text-center sm:grid-cols-5">{process5.map((s) => { const I = icon(s.icon); return <li key={s.n} className="flex flex-col items-center"><span className="flex h-9 w-9 items-center justify-center border border-white/20 bg-ink text-white"><I className="h-4 w-4" /></span><span className="mt-3 text-[8px] font-bold uppercase tracking-widest text-green">{s.n} · {s.tl}</span><b className="mt-1 text-xs text-white">{s.title.split(' ')[0]}</b></li> })}</ol>
      </PageHero>
      <section className="py-16"><Container>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><Label>The engagement</Label><h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">Five steps. <G>Same lead.</G></h2></div><p className="max-w-xs text-xs">Sized to fit—from a focused theme refresh to a multi-system migration with ERP cutover.</p></div>
        <div className="space-y-3">{process5.map((s, i) => { const I = icon(s.icon); return (
          <article key={s.n} className={`grid gap-5 border border-line p-6 lg:grid-cols-[320px_1fr] ${i % 2 ? 'bg-green-soft' : 'bg-white'}`}>
            <div className="flex gap-4"><span className="text-5xl font-extrabold text-green">{s.n}</span><div><div className="flex items-center gap-2"><Ico I={I} dark className="!h-7 !w-7" /><span className="border border-green/30 bg-green-soft px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-widest text-green-dark">{s.tl}</span><span className="text-[9px] font-bold uppercase text-mute">{s.badge}</span></div><h3 className="mt-3 text-xl font-extrabold">{s.title}</h3></div></div>
            <div><p className="text-[13px] leading-relaxed">{s.text}</p>{s.bullets.length > 0 && <ul className="mt-4 grid gap-2 sm:grid-cols-3">{s.bullets.map((b) => <Tick key={b} box>{b}</Tick>)}</ul>}</div>
          </article>) })}</div>
        <div className="mt-4 flex flex-wrap items-center gap-5 bg-ink p-6 text-white"><Ico I={Headphones} className="!bg-green !text-white" /><div className="flex-1"><Tiny>After launch</Tiny><h3 className="mt-1 text-lg font-extrabold !text-white">Most clients keep the same Slack thread.</h3><p className="mt-1 max-w-xl text-xs text-slate-300">Releases, experiments, and integration debt—we batch and ship so your internal team is not stuck firefighting checkout every Friday.</p></div><Btn to="/services#support" variant="white">Growth & support</Btn></div>
      </Container></section>
      <section className="py-14"><Container>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><Label>FAQ</Label><h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">Common <G>questions.</G></h2></div><p className="max-w-xs text-xs">Short answers to what commerce leaders ask before they sign. If yours is not here, message us—we reply within one business day.</p></div>
        <div className="grid gap-3 md:grid-cols-2">{faqs.map(([q, a], i) => <div key={q} className="border border-line p-5"><Tiny>Q.0{i + 1}</Tiny><h3 className="mt-2 text-sm font-extrabold">{q}</h3><p className="mt-2 text-xs leading-relaxed">{a}</p></div>)}</div>
      </Container></section>
      <section className="pb-16"><Container><div className="flex flex-wrap items-center justify-between gap-6 bg-green p-8 text-white sm:p-10"><div className="max-w-lg"><Tiny className="!text-white/80">Get started</Tiny><h2 className="mt-2 text-3xl font-extrabold !text-white sm:text-4xl">Ready when you are—let’s talk.</h2><p className="mt-2 text-sm text-white/90">Send a brief or call the line. We will come back with a clear next step—never a black hole inbox.</p></div><div className="flex flex-col gap-3"><Btn to="/contact" arrow>Open contact form</Btn>{telHref() && <Btn href={telHref()} variant="ghostDark"><Phone className="h-3.5 w-3.5" />{business.phone}</Btn>}</div></div></Container></section>
    </>
  )
}
