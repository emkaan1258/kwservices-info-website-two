import { Link } from 'react-router-dom'
import { Check, ArrowRight, Phone } from 'lucide-react'
import { business, telHref } from '../config.js'

export const Container = ({ children, className = '' }) => <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>{children}</div>
export const G = ({ children }) => <span className="text-green">{children}</span>
export const Label = ({ children, dark }) => (
  <span className={`inline-flex items-center gap-1.5 border px-2 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${dark ? 'border-white/15 bg-white/5 text-green' : 'border-green/30 bg-green-soft text-green-dark'}`}>{children}</span>
)
export const Tiny = ({ children, className = '' }) => <p className={`text-[10px] font-bold uppercase tracking-[0.2em] text-green ${className}`}>{children}</p>

const v = { dark: 'bg-ink text-white hover:bg-black', green: 'bg-green text-white hover:bg-green-dark', outline: 'border border-line bg-white text-ink hover:bg-mint', ghostDark: 'border border-white/25 text-white hover:bg-white/10', white: 'bg-white text-ink hover:bg-mint' }
export function Btn({ to, href, variant = 'dark', arrow, children, className = '', ...r }) {
  const cls = `inline-flex items-center justify-center gap-2 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] transition-colors ${v[variant]} ${className}`
  const inner = <>{children}{arrow && <ArrowRight className="h-3.5 w-3.5" />}</>
  if (to) return <Link to={to} className={cls} {...r}>{inner}</Link>
  if (href) return <a href={href} className={cls} {...r}>{inner}</a>
  return <button className={cls} {...r}>{inner}</button>
}
export const Tick = ({ children, box }) => (
  <li className={`flex items-center gap-2 text-[11px] ${box ? 'border border-line bg-white px-3 py-2 font-medium uppercase tracking-wide text-ink' : ''}`}><Check className="h-3.5 w-3.5 shrink-0 text-green" />{children}</li>
)
export const PageHero = ({ crumbs, label, title, text, children, center }) => (
  <section className="bg-ink py-14 sm:py-20">
    <Container className={center ? 'text-center' : ''}>
      <div className={`mb-8 flex ${center ? 'justify-center' : ''}`}>
        <span className="inline-flex items-center gap-2 border border-white/15 px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-slate-300">{crumbs.map(([t, to], i) => <span key={t} className="inline-flex items-center gap-2">{i > 0 && <span className="text-slate-500">›</span>}{to ? <Link to={to}>{t}</Link> : <span className="text-green">{t}</span>}</span>)}</span>
      </div>
      <div className={children ? 'grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]' : ''}>
        <div>
          {label && <Tiny className="mb-3">{label}</Tiny>}
          <h1 className={`text-4xl font-extrabold leading-[1.05] text-white sm:text-6xl ${center ? 'mx-auto max-w-3xl' : ''}`}>{title}</h1>
          {text && <p className={`mt-5 max-w-xl text-sm leading-relaxed text-slate-300 ${center ? 'mx-auto' : ''}`}>{text}</p>}
        </div>
        {children}
      </div>
    </Container>
  </section>
)
export const SectionHead = ({ label, title, text, right }) => (
  <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
    <div className="max-w-2xl">{label && <Label>{label}</Label>}<h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-5xl">{title}</h2>{text && <p className="mt-3 max-w-xl text-sm">{text}</p>}</div>
    {right}
  </div>
)
export const Ico = ({ I, dark, className = '' }) => <span className={`flex h-8 w-8 shrink-0 items-center justify-center ${dark ? 'bg-ink text-white' : 'bg-green-soft text-green'} ${className}`}><I className="h-4 w-4" /></span>
export const PhoneBtn = ({ variant = 'outline', className = '' }) => telHref() ? <Btn href={telHref()} variant={variant} className={className}><Phone className="h-3.5 w-3.5" />{business.phone}</Btn> : null
