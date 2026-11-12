import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X, Phone } from 'lucide-react'
import { business, telHref } from '../config.js'
import { services } from '../data/content.js'
import { Btn, Container } from './ui.jsx'

export const Logo = ({ dark }) => (
  <span className="flex items-center gap-3">
    <span className="flex h-8 w-8 items-center justify-center bg-green text-lg font-extrabold text-white">{business.name[0]}  </span>
    <span className={`h-6 w-px ${dark ? 'bg-white/30' : 'bg-line'}`} />
    <span className="leading-none"><span className={`block text-[15px] font-extrabold ${dark ? 'text-white' : 'text-ink'}`}>{business.name}</span><span className="mt-1 block text-[8px] font-bold uppercase tracking-[0.25em] text-mute">Commerce solutions</span></span>
  </span>
)
const policies = [['Privacy Policy', '/privacy-policy'], ['Refund Policy', '/refund-policy'], ['Terms & Conditions', '/terms-and-conditions']]
const link = ({ isActive }) => `px-3 py-1.5 text-[12px] font-medium ${isActive ? 'bg-green-soft text-green-dark' : 'text-ink hover:text-green'}`

function Dd({ label, items, active }) {
  return (
    <div className="group relative flex items-center border-l border-line">
      <button className={`inline-flex items-center gap-1 px-3 py-1.5 text-[12px] font-medium ${active ? 'text-green' : 'text-ink'} hover:text-green`}>{label}<ChevronDown className="h-3 w-3" /></button>
      <div className="invisible absolute left-0 top-full z-50 min-w-56 border border-line bg-white py-1 opacity-0 shadow-lg group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
        {items.map(([t, to]) => <Link key={to} to={to} className="block px-4 py-2 text-[12px] text-ink hover:bg-green-soft hover:text-green-dark">{t}</Link>)}
      </div>
    </div>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const close = () => setOpen(false)
  const svc = [['All services', '/services'], ...services.map((s) => [s.title, `/services#${s.id}`])]
  const mobile = [['Home', '/'], ['About', '/about'], ['Pricing', '/pricing'], ['How It Works', '/how-it-works'], ['Contact', '/contact'], ['Services', '/services'], ...policies]
  return (
    <header className="sticky top-0 z-40 bg-white">
      <div className="bg-ink text-[10px] font-medium uppercase tracking-wider text-slate-300">
        <Container className="flex items-center justify-between py-2"><span>{business.hours}</span>{telHref() && <a href={telHref()} className="inline-flex items-center gap-1.5 hover:text-white"><Phone className="h-3 w-3 text-green" />{business.phone}</a>}</Container>
      </div>
      <div className="border-b border-line">
        <Container className="flex h-16 items-center justify-between">
          <Link to="/" onClick={close}><Logo /></Link>
          <nav className="hidden items-center lg:flex">
            <NavLink to="/" end className={link}>Home</NavLink>
            <NavLink to="/about" className={(s) => `ml-1 border-l border-line ${link(s)}`}>About</NavLink>
            <NavLink to="/pricing" className={(s) => `ml-1 border-l border-line ${link(s)}`}>Pricing</NavLink>
            <NavLink to="/how-it-works" className={(s) => `ml-1 border-l border-line ${link(s)}`}>How It Works</NavLink>
            <NavLink to="/contact" className={(s) => `ml-1 border-l border-line ${link(s)}`}>Contact</NavLink>
            <Dd label="Services" items={svc} active={pathname === '/services'} />
            <Dd label="Policies" items={policies} active={policies.some(([, p]) => p === pathname)} />
            <Btn to="/contact" className="ml-4 !py-2.5">Book a call</Btn>
          </nav>
          <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
        </Container>
      </div>
      {open && (
        <div className="max-h-[75vh] overflow-y-auto border-b border-line bg-white lg:hidden">
          <Container className="py-3">
            {mobile.map(([t, to]) => <Link key={to} to={to} onClick={close} className="block border-b border-line py-3 text-sm font-medium text-ink">{t}</Link>)}
            <Btn to="/contact" onClick={close} className="mt-4 w-full">Book a call</Btn>
          </Container>
        </div>
      )}
    </header>
  )
}
