import { Link } from 'react-router-dom'
import { Check, Mail, Phone, Timer, Clock, ShieldCheck, ArrowRight } from 'lucide-react'
import { services } from '../data/content.js'
import { icon } from '../components/icons.js'
import { Btn, Container, G, Label, Tiny, Ico, PageHero, PhoneBtn } from '../components/ui.jsx'

export default function Services() {
  return (
    <>
      <PageHero crumbs={[['Home', '/'], ['Services']]} label="Capabilities" title={<>Full-stack <G>commerce delivery.</G></>} text="Six service tracks from storefront build through ongoing support—same lead thread, written milestones, and staging you can sign off before cutover.">
        <nav aria-label="Jump to a pillar" className="border border-white/15 bg-white/5 p-4"><p className="mb-3 text-[9px] font-bold uppercase tracking-widest text-slate-400">Jump to a pillar</p>
          {services.map((s) => { const I = icon(s.icon); return <a key={s.id} href={`#${s.id}`} className="flex items-center gap-3 border border-white/10 px-3 py-2.5 text-xs font-medium text-white hover:bg-white/10"><I className="h-4 w-4 text-green" />{s.title}<ArrowRight className="ml-auto h-3 w-3 text-slate-500" /></a> })}</nav>
      </PageHero>
      <section className="py-16"><Container>
        <Label>What we offer</Label><h2 className="mb-8 mt-3 text-4xl font-extrabold sm:text-5xl">Pick a pillar. <G>Or use them all.</G></h2>
        <div className="space-y-4">{services.map((s) => { const I = icon(s.icon); return (
          <article key={s.id} id={s.id} className="scroll-mt-28 grid gap-6 border border-line p-6 sm:p-8 lg:grid-cols-[280px_1fr]">
            <div><div className="flex items-center gap-3"><span className="text-5xl font-extrabold text-green">{s.n}</span><Ico I={I} dark /></div><h3 className="mt-3 text-2xl font-extrabold">{s.title}</h3><div className="mt-3 flex flex-wrap gap-1.5">{s.tags.map((t) => <span key={t} className="border border-line px-2 py-1 text-[8px] font-bold uppercase tracking-wider">{t}</span>)}</div></div>
            <div><p className="text-[13px] leading-relaxed">{s.long}</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">{s.bullets.map((b) => <li key={b} className="flex items-center gap-2 border border-line bg-mint px-3 py-2 text-[11px] text-ink"><Check className="h-3.5 w-3.5 shrink-0 text-green" />{b}</li>)}</ul>
              <div className="mt-5 flex items-center justify-between border-t border-line pt-4"><span className="text-[10px] font-bold uppercase tracking-widest text-green">{s.meta}</span><Btn to="/contact" className="!py-2" arrow>Talk to us</Btn></div></div>
          </article>) })}</div>
      </Container></section>
      <section className="py-16"><Container>
        <Label>Next steps</Label><h2 className="mb-8 mt-3 text-4xl font-extrabold sm:text-5xl">Start your <G>engagement.</G></h2>
        <div className="grid gap-4 lg:grid-cols-2">
          <ol className="space-y-3">{[['Send your brief', 'Platform, catalog size, integrations, and timeline—use the contact form or call.'], ['Reply within 1 business day', 'A lead engineer or PM with next steps, a rough milestone map, or a few sharp questions.'], ['Working session', 'We align on scope and risks, then book a discovery workshop or technical deep dive.']].map(([t, d], i) => <li key={t} className="flex gap-4 border border-line p-5"><span className="text-2xl font-extrabold text-green">0{i + 1}</span><div><b className="text-ink">{t}</b><p className="mt-1 text-xs">{d}</p></div></li>)}</ol>
          <div className="bg-ink p-8 text-white"><h3 className="text-2xl font-extrabold !text-white">Tell us about <G>your stack.</G></h3><p className="mt-3 text-sm text-slate-300">A few structured fields on our contact page help us route you to build, migration, CRO, or integrations—whichever gets you answers fastest.</p><ul className="mt-4 space-y-1 text-xs text-slate-300"><li>— Current platform and catalog order of magnitude</li><li>— Must-have integrations (ERP, 3PL, tax, ESP)</li><li>— Target launch or migration window</li></ul><Btn to="/contact" variant="green" arrow className="mt-6 w-full">Open contact form</Btn><p className="mt-3 text-center text-[9px] font-bold uppercase tracking-widest text-slate-500">Prefer voice? Call the number in the header—we pick up during business hours.</p></div>
        </div>
      </Container></section>
      <section className="bg-ink py-14"><Container className="grid items-center gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div><Label dark>Production issue?</Label><h2 className="mt-4 text-4xl font-extrabold !text-white">Checkout down or <G>integration flapping?</G></h2><p className="mt-4 text-sm text-slate-300">Call the line—we triage with whoever is on-call for your account, pull logs, and coordinate rollback or hotfix paths without a ticket black hole.</p><PhoneBtn variant="green" className="mt-6" /></div>
        <div className="grid gap-3 sm:grid-cols-3">{[[Timer, '<45 min', 'Avg. callback'], [Clock, 'Mon–Sat, 9am–7pm ET', 'Coverage'], [ShieldCheck, 'Retainer SLAs', 'Incident triage']].map(([I, v, l]) => <div key={l} className="border border-white/15 bg-white/5 p-5"><I className="h-4 w-4 text-green" /><div className="mt-5 text-xl font-extrabold text-white">{v}</div><p className="mt-1 text-[9px] font-bold uppercase tracking-widest text-slate-400">{l}</p></div>)}</div>
      </Container></section>
    </>
  )
}
