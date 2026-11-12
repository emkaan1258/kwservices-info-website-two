export const services = [
  { id: 'store-build', n: '01', icon: 'ShoppingBag', title: 'Store design & build', kicker: 'Discovery & roadmap', text: 'Design systems, performant themes, and checkout flows your merchandising team can run without filing a ticket for every tweak.',
    long: 'We start from your catalog and brand guidelines, then ship a storefront your team can operate without filing a ticket for every tweak. Custom storefronts on Shopify, WooCommerce, and BigCommerce—performance-first, on-brand, and built to convert.',
    tags: ['Shopify Plus', 'WooCommerce', 'BigCommerce', 'Liquid / theme app'], bullets: ['Design system and component library', 'Core Web Vitals and accessibility hardening', 'Analytics, SEO, and tracking from day one'], short: ['Core Web Vitals focus', 'Accessible components', 'GA4 & events wired in'], meta: 'From 4 weeks' },
  { id: 'migration', n: '02', icon: 'ArrowLeftRight', title: 'Platform migration', text: 'Catalog, customers, and SEO preserved—staging you can sign off before DNS flips.',
    long: 'We treat SEO and order history as first-class citizens—no surprise 404 waves or orphaned customer records on launch day. Replatform with a documented data plan, preserved SEO, and staging you can sign off before cutover.',
    tags: ['Magento', 'Wix', 'Custom', 'CSV / API'], bullets: ['Catalog, customer, and order migration', 'Redirect maps and parity checks', 'Zero-downtime launch playbooks'], meta: 'Project-based' },
  { id: 'cro', n: '03', icon: 'LineChart', title: 'Conversion optimization', text: 'Hypothesis-led tests on PDP, cart, and checkout with reporting your CFO can read.',
    long: 'Every experiment ships with measurement baked in so you can defend wins to finance and iterate on what did not move the needle. Analytics-led experiments on PDP, cart, and checkout—hypotheses tied to revenue, not guesswork.',
    tags: ['GA4', 'Hotjar', 'Optimizely', 'Shopify scripts'], bullets: ['Funnel audits and event instrumentation', 'A/B tests and personalization hooks', 'Quarterly readouts on KPI and learnings'], meta: 'Retainer' },
  { id: 'integrations', n: '04', icon: 'Plug', title: 'Integrations & APIs', text: 'ERP, 3PL, tax, and marketing automation with retries, alerts, and runbooks.',
    long: 'We write defensive integrations: retries, idempotency keys, and alerts before a silent failure costs you a weekend. Connect ERPs, 3PLs, tax, payments, and marketing tools with reliable middleware and monitoring.',
    tags: ['NetSuite', 'ShipStation', 'Klaviyo', 'Stripe'], bullets: ['Webhook and REST design', 'Idempotent jobs and error budgets', 'Runbooks and on-call handoff'], meta: 'From 2 weeks' },
  { id: 'headless', n: '05', icon: 'Layers', title: 'Headless commerce', text: 'Next.js storefronts on your commerce backend—editorial speed without forking checkout.',
    long: 'We pair a fast front end with a commerce engine you already trust—so marketing moves at editorial speed without forking checkout. Composable storefronts on Next.js with your commerce backend—editorial freedom without sacrificing checkout trust.',
    tags: ['Next.js', 'Hydrogen', 'Shopify', 'Contentful'], bullets: ['Cart and checkout integration', 'CMS and preview workflows', 'Edge caching and ISR strategy'], meta: 'From 6 weeks' },
  { id: 'support', n: '06', icon: 'Rocket', title: 'Growth & support', text: 'Embedded squad for releases, integrations, and performance on a predictable retainer.',
    long: 'Most clients keep us after launch for roadmap velocity—same engineers who built it, not a rotating offshore queue. An embedded squad for releases, content updates, integrations, and performance—on a predictable retainer.',
    tags: ['Slack', 'Linear', 'GitHub', 'Sentry'], bullets: ['Dedicated lead and weekly demos', 'Backlog grooming with your team', 'Incident response SLAs where needed'], meta: 'Retainer' },
]
export const steps = [
  { n: '01', icon: 'MessageSquare', title: 'Discover', text: 'We align on catalog complexity, platforms, integrations, and success metrics—then produce a written roadmap with milestones and owners.', bullets: ['Technical audit', 'Analytics baseline', 'Scope & timeline'] },
  { n: '02', icon: 'Search', title: 'Design & prototype', text: 'Design system, key templates, and checkout flows in staging—reviewed with your team before we pour concrete into the theme.', bullets: ['Figma + component spec', 'CRO hypotheses', 'Content model'] },
  { n: '03', icon: 'Rocket', title: 'Build & grow', text: 'Ship in slices with QA, performance budgets, and launch playbooks—then stay on retainer for releases, experiments, and integrations.', bullets: ['Staging sign-off', 'Cutover checklist', 'Post-launch backlog'] },
]
export const process5 = [
  { n: '01', icon: 'MessageSquare', tl: 'Week 0', title: 'Discover & scope', badge: '2–4 wks', text: 'We map catalog complexity, integrations, analytics gaps, and launch risks—then produce a milestone plan your stakeholders can approve.', bullets: [] },
  { n: '02', icon: 'Palette', tl: 'Weeks 1–2', title: 'Design & prototype', badge: '1–2 weeks', text: 'Design system, templates, and checkout UX in Figma and staging—reviewed with your team before we harden the theme.', bullets: ['Component library', 'Content model', 'CRO hypotheses'] },
  { n: '03', icon: 'Code2', tl: 'Weeks 2–5', title: 'Build & integrate', badge: 'Varies', text: 'Theme or headless front end, middleware jobs, and QA against real catalog slices—performance budgets enforced in CI.', bullets: ['Staging parity', 'Webhook retries', 'Accessibility pass'] },
  { n: '04', icon: 'Rocket', tl: 'Cutover', title: 'Launch & stabilize', badge: 'Planned window', text: 'DNS cutover, redirect validation, smoke tests on payments and tax, and a war-room channel until metrics flatten.', bullets: ['Rollback plan', 'Monitoring dashboards', 'Hypercare window'] },
  { n: '05', icon: 'LineChart', tl: 'Post-live', title: 'Grow & optimize', badge: 'Ongoing', text: 'Experiment backlog, integration hardening, and quarterly roadmap reviews with the same engineers who shipped v1.', bullets: ['A/B tests', 'Release train', 'Incident runbooks'] },
]
export const faqs = [
  ['Do we have to use your hosting?', 'No. We work in your Git org, your Shopify or cloud accounts, and your observability stack. We document handoffs so you are never locked in.'],
  ['Can you work with our in-house team?', 'Yes—that is our default. We embed in your rituals (Slack, Linear, GitHub) and leave runbooks so your engineers can own day-two operations.'],
  ['How do you handle SEO during migrations?', 'Redirect maps, parity checks, and staged crawl comparisons before DNS moves. We do not flip traffic until both teams sign the cutover checklist.'],
  ['What if scope changes mid-project?', 'We track change requests in writing with impact on timeline and budget. No surprise invoices—if it is not approved, it is not in sprint.'],
  ['What does a retainer include?', 'A monthly bucket of hours with a named lead, prioritized backlog grooming, incident response where contracted, and quarterly roadmap reviews.'],
  ['How fast do you respond?', 'We target same-day replies during business hours and always within one business day for structured inquiries through the contact form.'],
]
export const plans = [
  { name: 'Basic', price: '$300', blurb: 'Keep an existing storefront healthy with maintenance and app coverage.', items: ['Website maintenance', 'App support'] },
  { name: 'Standard', price: '$600', blurb: 'Ship web work alongside site care and app support in one fixed package.', items: ['Web development', 'Website maintenance', 'App support'] },
  { name: 'Premium', price: '$1,500', popular: true, blurb: 'Full-stack—build, maintain, support, and commerce delivery under one lead.', items: ['Web development', 'Website maintenance', 'App support', 'Technical support', 'E-commerce solutions'] },
]
export const heroStats = [['6', 'wk', 'Typical MVP launch'], ['98', '%', 'Clients renew retainers'], ['40', '+', 'Integrations shipped']]
export const aboutStats = [['2019', 'Founded'], ['180+', 'Stores shipped'], ['4.9', 'Avg. client rating'], ['2', 'Week sprint cadence']]
export const platforms = ['Shopify Plus', 'WooCommerce', 'Headless Next.js', 'CRO & analytics']
export const aboutPillars = [
  { n: '01', icon: 'History', k: 'History', t: 'Founded where launches were treated like theater.', p: 'began when a small crew tired of agencies that sold roadmaps and outsourced the build. We standardized discovery, pricing, and engineering quality so clients could fund outcomes—not slide decks.' },
  { n: '02', icon: 'Target', k: 'Mission', t: 'Make commerce delivery legible again.', p: 'Our job is to shrink the gap between a signed SOW and a storefront your team can run—across design, data, integrations, and the day-two backlog.', b: ['Written milestones and owners', 'Staging parity before cutover', 'Instrumentation from day one', 'No hidden change-order traps'] },
  { n: '03', icon: 'Eye', k: 'Vision', t: 'The team your CFO trusts on renewal day.', p: 'We want to be the partner your peers text after a bad vendor handoff—because we document decisions, ship on schedule, and still answer when traffic spikes on Black Friday.' },
]
export const bigStats = [
  ['180+', 'Stores shipped', 'ShoppingBag', 'From Shopify Plus rollouts to headless Next.js—each with performance budgets and analytics baselines.'],
  ['6wk', 'Typical MVP', 'Timer', 'Measured from signed SOW to production cutover for focused storefronts; larger replatforms get phased milestones.'],
  ['40+', 'Integration patterns', 'Plug', 'ERP, 3PL, tax, payments, and marketing tools—idempotent jobs, alerts, and runbooks included.'],
  ['85%', 'Retainer renewal', 'RefreshCw', 'Most clients keep an embedded squad after launch for experiments, releases, and the integrations backlog.'],
]
// Reference shows named client testimonials/partners. Replace with REAL ones, then set showSocialProof: true in config.js
export const testimonials = []
export const partners = []
