import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { business, mailHref, telHref } from '../config.js'
import { policies } from '../data/policies.js'
import { Container, G, Tiny, PageHero } from '../components/ui.jsx'

const slug = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-')
const fill = (t) => t.replaceAll('{name}', business.name).replaceAll('{email}', business.email || 'our contact page').replaceAll('{jurisdiction}', business.jurisdiction || 'the jurisdiction in which we are established')

export default function Policy({ kind }) {
  const p = policies[kind]
  const contacts = [[MapPin, 'Address', business.addressLines.join(', ')], [Phone, 'Phone', business.phone], [Mail, 'Email', business.email]].filter((c) => c[2])
  return (
    <>
      <PageHero crumbs={[['Home', '/'], ['Policies'], [p.title]]} label="Legal" title={<>{p.title}<G>.</G></>} text={fill(p.intro)}>
        {p.updated && <p className="-mt-6 text-[9px] font-bold uppercase tracking-widest text-slate-400 lg:col-span-2">Last updated: {p.updated}</p>}
      </PageHero>
      <section className="py-14"><Container className="grid gap-10 lg:grid-cols-[200px_1fr]">
        <nav aria-label="On this page" className="self-start lg:sticky lg:top-32"><Tiny className="mb-3">On this page</Tiny><ol className="space-y-2 border-l border-line pl-3 text-[11px]">{[...p.sections.map((s) => s[0]), 'Contact'].map((t, i) => <li key={t}><a href={`#${slug(t)}`} className="flex gap-2 hover:text-green"><span className="text-[9px] text-mute">{String(i + 1).padStart(2, '0')}</span>{t}</a></li>)}</ol></nav>
        <div className="max-w-2xl space-y-8">
          {p.sections.map(([t, paras], i) => <section key={t} id={slug(t)} className="scroll-mt-32"><h2 className="text-xl font-extrabold">{p.numbered ? `${i + 1}. ` : ''}{t}</h2>{paras.map((x) => <p key={x} className="mt-3 text-[13px] leading-relaxed">{fill(x)}</p>)}</section>)}
          <section id="contact" className="scroll-mt-32 border border-line p-6"><h2 className="text-xl font-extrabold">Contact</h2><p className="mt-2 text-xs">Questions about this policy? {mailHref() ? <a className="font-bold text-ink" href={mailHref()}>{business.email}</a> : <Link to="/contact" className="font-bold text-ink underline">Use our contact form.</Link>}{telHref() && <> Or call <a className="font-bold text-ink" href={telHref()}>{business.phone}</a>.</>}</p>
            {contacts.length > 0 && <div className="mt-4 grid gap-4 sm:grid-cols-3">{contacts.map(([I, k, v]) => <div key={k} className="flex gap-2 text-xs"><I className="mt-0.5 h-4 w-4 shrink-0 text-green" /><span><Tiny>{k}</Tiny><b className="break-all text-ink">{v}</b></span></div>)}</div>}</section>
        </div>
      </Container></section>
    </>
  )
}
