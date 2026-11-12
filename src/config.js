// SINGLE SOURCE OF TRUTH FOR BUSINESS DETAILS.
// vidalesservice.online blocked automated access, so these could NOT be verified. Fill in from your real site.
export const business = {
  name: 'Vidalesservice',      // taken from your brief; confirm exact spelling
  phone: '(833) 442-6533',                   // e.g. '(555) 123-4567'  -- UNVERIFIED
  email: 'sadiabaig551@gmail.com',                   // e.g. 'hello@vidalesservice.online' -- UNVERIFIED
  addressLines: ['1208 ROWELL AVE JOLIET, IL 6043'],            // e.g. ['123 Main St', 'City, ST 00000'] -- UNVERIFIED
  hours: 'Mon–Sat, 9am–7pm ET', // copied from reference; confirm
  // Reference site shows named client testimonials and partner names. Those belong to another business,
  // so they are hidden until you replace them with real ones in src/data/content.js.
  jurisdiction: '',            // governing-law text on Terms page; e.g. 'the State of Texas'. Left generic if empty.
  showSocialProof: false,
}
export const telHref = () => (business.phone ? `tel:+1${business.phone.replace(/\D/g, '').replace(/^1/, '')}` : null)
export const mailHref = () => (business.email ? `mailto:${business.email}` : null)
