import { CheckCircle2, ArrowRight } from 'lucide-react'
import { plans } from '../data/content.js'
import { Container, G, Tiny, PageHero, Btn } from '../components/ui.jsx'

export default function Pricing() {
  return (
    <>
      <PageHero crumbs={[['Home', '/'], ['Pricing']]} label="Plans" title={<>Simple one-time <G>pricing.</G></>} text="Three fixed packages—pick the coverage you need and we get to work." />
      <section className="bg-mint py-14"><Container>
        <div className="grid gap-4 lg:grid-cols-3">{plans.map((p) => (
          <article key={p.name} className={`flex flex-col p-6 sm:p-7 ${p.popular ? 'bg-ink text-white' : 'border border-line bg-white'}`}>
            {p.popular ? <span className="mb-3 self-start border border-green/40 bg-green/10 px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-green">Most popular</span> : <Tiny className="mb-3">Package</Tiny>}
            <h2 className={`text-2xl font-extrabold ${p.popular ? '!text-white' : ''}`}>{p.name}</h2>
            <p className={`mt-2 min-h-[48px] text-[13px] ${p.popular ? 'text-slate-300' : ''}`}>{p.blurb}</p>
            <div className={`mt-4 text-4xl font-extrabold ${p.popular ? 'text-white' : 'text-ink'}`}>{p.price} <span className="text-[10px] font-bold uppercase tracking-widest text-mute">One time</span></div>
            <ul className="mt-5 flex-1 space-y-2">{p.items.map((i) => <li key={i} className={`flex items-center gap-2 border px-3 py-2 text-[10px] font-bold uppercase tracking-wider ${p.popular ? 'border-white/15 bg-white/5 text-white' : 'border-line text-ink'}`}><CheckCircle2 className="h-3.5 w-3.5 text-green" />{i}</li>)}</ul>
            <Btn to="/contact" variant={p.popular ? 'green' : 'dark'} className="mt-8 w-full">Choose {p.name} <ArrowRight className="h-3.5 w-3.5" /></Btn>
          </article>))}</div>
        <p className="mt-6 max-w-xl text-xs">All prices are one-time payments for the listed package scope. Need something custom? We’ll scope it on a statement of work after a short discovery call.</p>
      </Container></section>
    </>
  )
}
