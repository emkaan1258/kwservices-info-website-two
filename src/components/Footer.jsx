import { Link } from 'react-router-dom'
import { Phone, MapPin, Mail, Check } from 'lucide-react'
import { business, telHref, mailHref } from '../config.js'
import { services } from '../data/content.js'
import { Btn, Container, G } from './ui.jsx'
import { Logo } from './Header.jsx'

const explore = [['Home', '/'], ['About', '/about'], ['Services', '/services'], ['Pricing', '/pricing'], ['How It Works', '/how-it-works'], ['Contact', '/contact']]
const h = 'mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-green'

export default function Footer() {
  return (
    <footer className="bg-ink text-[12px] text-slate-400">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-white/10 py-12">
          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">Launch and scale<br /><G>commerce that performs.</G></h2>
          <div className="flex flex-col items-start gap-3 sm:items-end"><Btn to="/contact" variant="green" arrow>Book a call</Btn>{telHref() && <a href={telHref()} className="inline-flex items-center gap-2 text-[11px] hover:text-white"><Phone className="h-3 w-3 text-green" />{business.phone}</a>}</div>
        </div>
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          <div><Link to="/"><Logo dark /></Link><p className="mt-5 max-w-sm leading-relaxed">{business.name} designs, builds, migrates, and grows online stores—Shopify, WooCommerce, headless stacks, integrations, CRO, and long-term engineering support for brands that need a senior partner.</p></div>
          <div><h4 className={h}>Explore</h4><ul className="space-y-2.5">{explore.map(([t, to]) => <li key={to}><Link className="hover:text-white" to={to}>{t}</Link></li>)}</ul></div>
          <div><h4 className={h}>Services</h4><ul className="space-y-2.5">{services.map((s) => <li key={s.id}><Link className="inline-flex items-center gap-2 hover:text-white" to={`/services#${s.id}`}><Check className="h-3 w-3 text-green" />{s.title}</Link></li>)}</ul></div>
          <div><h4 className={h}>Reach us</h4><ul className="space-y-3">
            {business.addressLines.length > 0 && <li className="flex gap-2"><MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green" /><span>{business.addressLines.map((l) => <span key={l} className="block">{l}</span>)}</span></li>}
            {telHref() && <li className="flex gap-2"><Phone className="mt-0.5 h-3.5 w-3.5 text-green" /><a href={telHref()} className="hover:text-white">{business.phone}</a></li>}
            {mailHref() && <li className="flex gap-2"><Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green" /><a href={mailHref()} className="break-all hover:text-white">{business.email}</a></li>}
            {!business.phone && !business.email && !business.addressLines.length && <li><Link className="hover:text-white" to="/contact">Use our contact form</Link></li>}
          </ul></div>
        </div>
        <div className="flex flex-col justify-between gap-3 border-t border-white/10 py-5 text-[10px] font-semibold uppercase tracking-widest sm:flex-row">
          <span>© {new Date().getFullYear()} {business.name}. All rights reserved.</span>
          <span className="flex flex-wrap items-center gap-4"><Link className="hover:text-white" to="/privacy-policy">Privacy Policy</Link><Link className="hover:text-white" to="/refund-policy">Refund Policy</Link><Link className="hover:text-white" to="/terms-and-conditions">Terms & Conditions</Link><span className="flex items-center gap-1.5 text-green"><span className="h-1.5 w-1.5 rounded-full bg-green" />Team online now</span></span>
        </div>
      </Container>
    </footer>
  )
}
