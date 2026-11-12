import { useState } from 'react'
import { Phone, Mail, MapPin, Send, Calendar, Clock, ShieldCheck, Check } from 'lucide-react'
import { business, telHref, mailHref } from '../config.js'
import { Container, G, Label, Tiny, PageHero, Btn } from '../components/ui.jsx'

const inp = 'mt-1 w-full border border-line bg-mint px-3 py-2.5 text-xs text-ink placeholder:text-slate-400 focus:border-green focus:outline-none'

export default function Contact() {
  const [v, setV] = useState({ name: '', email: '', message: '' })
  const [err, setErr] = useState({})
  const [sent, setSent] = useState(false)
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    const x = {}
    if (!v.name.trim()) x.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) x.email = 'Please enter a valid email.'
    if (v.message.trim().length < 10) x.message = 'Please add a few details (10+ characters).'
    setErr(x)
    if (Object.keys(x).length) return
    if (mailHref()) window.location.href = `${mailHref()}?subject=${encodeURIComponent('Project inquiry')}&body=${encodeURIComponent(`Name: ${v.name}\nEmail: ${v.email}\n\n${v.message}`)}`
    setSent(true)
  }
  const cards = [[Phone, 'Direct line', telHref() && business.phone, business.hours], [Mail, 'Email', business.email, 'Reply within 1 business day'], [MapPin, 'Office', business.addressLines.slice(-1)[0], business.addressLines[0]]].filter((c) => c[2])
  return (
    <>
      <PageHero center crumbs={[['Home', '/'], ['Contact']]} label="Get in touch" title={<>Tell us about <G>your next release.</G></>} text="A short brief is enough for us to route build, migration, CRO, or integrations—then we reply with a scoped next step or a few clarifying questions.">
        {cards.length > 0 && <div className={`mx-auto mt-10 grid max-w-4xl border border-white/15 text-left ${["", "md:grid-cols-1", "md:grid-cols-2", "md:grid-cols-3"][cards.length]}`}>{cards.map(([I, k, val, sub]) => <div key={k} className="border-b border-white/10 p-5 md:border-b-0 md:border-r"><I className="h-4 w-4 text-green" /><p className="mt-3 text-[9px] font-bold uppercase tracking-widest text-slate-400">{k}</p><b className="mt-1 block break-all text-sm text-white">{val}</b><p className="mt-1 text-[10px] text-slate-400">{sub}</p></div>)}</div>}
      </PageHero>
      <section className="py-14"><Container>
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4"><div><Label>What happens next</Label><h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Three short steps. <G>No runaround.</G></h2></div><p className="max-w-xs text-xs">Every inquiry gets the same treatment—fast, transparent, and grounded in what you need to fund internally.</p></div>
        <div className="grid gap-4 md:grid-cols-3">{[[Send, 'You send your brief', 'Use the form below or call. A few lines about platform, catalog, and deadline is enough to get started.'], [Mail, 'We reply within 1 business day', 'A lead responds with milestone ideas, a rough estimate band, or questions to de-risk scope.'], [Calendar, 'We schedule a working session', 'Video workshop or technical deep dive—whatever fits how your team decides.']].map(([I, t, d], i) => <div key={t} className="border border-line p-5"><div className="flex items-start justify-between"><span className="text-3xl font-extrabold text-green">0{i + 1}</span><span className="flex h-7 w-7 items-center justify-center bg-ink text-white"><I className="h-3.5 w-3.5" /></span></div><h3 className="mt-4 text-sm font-extrabold">{t}</h3><p className="mt-1 text-xs">{d}</p></div>)}</div>
      </Container></section>
      <section className="bg-mint py-14"><Container className="grid gap-4 lg:grid-cols-[1.6fr_1fr]">
        {sent ? <div role="status" className="border border-line bg-white p-8"><Check className="h-6 w-6 text-green" /><h2 className="mt-3 text-2xl font-extrabold">Thanks, {v.name.split(' ')[0]}.</h2><p className="mt-2 text-sm">{mailHref() ? 'Your email app should have opened with the message ready to send.' : 'Your message is ready, but no contact email is configured yet (src/config.js), so nothing was sent.'}</p></div> : (
          <form onSubmit={submit} noValidate className="border border-line bg-white p-6 sm:p-8">
            <Label>Project inquiry</Label><div className="mt-3 flex items-baseline justify-between"><h2 className="text-2xl font-extrabold">Tell us about <G>your short list.</G></h2><span className="text-[9px] font-bold uppercase tracking-widest text-green">* Required fields</span></div>
            <div className="mt-5 space-y-4">
              <label className="block text-[11px] font-bold text-ink">Name<input value={v.name} onChange={set('name')} placeholder="Alex Rivera" className={inp} />{err.name && <span className="text-[11px] font-normal text-red-600">{err.name}</span>}</label>
              <label className="block text-[11px] font-bold text-ink">Email<input type="email" value={v.email} onChange={set('email')} placeholder="you@company.com" className={inp} />{err.email && <span className="text-[11px] font-normal text-red-600">{err.email}</span>}</label>
              <label className="block text-[11px] font-bold text-ink">How can we help?<textarea rows={4} value={v.message} onChange={set('message')} placeholder="Tell us about your store, platform, timeline, and what success looks like." className={inp} />{err.message && <span className="text-[11px] font-normal text-red-600">{err.message}</span>}</label>
            </div>
            <Btn type="submit" variant="green" className="mt-5">Send message</Btn>
            <p className="mt-4 text-[11px]">Submitting opens your mail client with the message prefilled—swap in a server endpoint whenever you are ready.</p>
          </form>)}
        <div className="space-y-4">
          <div className="bg-ink p-6 text-white"><Clock className="h-4 w-4 text-green" /><Tiny className="mt-3">Coverage</Tiny><h3 className="mt-1 text-lg font-extrabold !text-white">Team availability</h3><p className="mt-2 text-sm font-bold text-white">{business.hours}</p><p className="mt-2 text-xs text-slate-400">Messages received outside those hours are queued for the next business morning.</p></div>
          {business.addressLines.length > 0 && <div className="border border-line bg-white p-6"><Tiny>Visit</Tiny><h3 className="mt-1 text-lg font-extrabold">Office address</h3><p className="mt-3 flex gap-2 text-xs"><MapPin className="h-4 w-4 shrink-0 text-green" /><span>{business.addressLines.map((l) => <span key={l} className="block">{l}</span>)}</span></p></div>}
          <div className="flex gap-3 border border-green/30 bg-green-soft p-5 text-xs text-ink"><ShieldCheck className="h-4 w-4 shrink-0 text-green" />Inquiries are handled by our team—not a ticket queue. Phone and email reach the same people who scope and deliver your work.</div>
        </div>
      </Container></section>
    </>
  )
}
