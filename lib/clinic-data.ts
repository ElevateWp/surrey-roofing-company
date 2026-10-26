export interface TeamProfile { id: string; slug: string; name: string; title: string; qualifications: string; specialization: string; experienceYears: number; bio: string; philosophy: string; education: string[]; memberships: string[]; specialties: string[]; image: string; warmImage: string; }
export type DentistProfile = TeamProfile;
export interface ServiceDetail { slug: string; name: string; navLabel: string; tagline: string; shortDescription: string; clinicalExplanation: string; whoNeeds: string[]; benefits: string[]; indications: { condition: string; explanation: string }[]; procedureSteps: { stepNumber: number; title: string; duration: string; description: string; clinicalDetails: string }[]; recoveryTimeline: { period: string; expectedSensations: string; careProtocol: string }[]; costTransparency: { baseRange: string; factors: string[]; whatIsIncluded: string[]; note: string }; beforeAfterCase: { category: string; clinicalContext: string; beforeLabel: string; afterLabel: string; beforeImage: string; afterImage: string; timeframe: string }; assignedDentistId: string; faqs: { question: string; answer: string; relatedSlug?: string }[]; }
export interface ClinicInformation { name: string; legalName: string; tagline: string; primaryLocation: { street: string; suite: string; city: string; state: string; postalCode: string; country: string; directions: string; landmarks: string; coordinates?: { lat: number; lng: number } }; contact: { phone: string; emergencyPhone: string; email?: string; whatsapp: string; website?: string; facebook?: string; }; identityHighlights: string[]; schedule: { day: string; hours: string; isOpenToday?: boolean; isEmergencyOnly?: boolean }[]; verifiedStats: { value: number; suffix: string; label: string; description: string }[]; accreditations: string[]; }
export const CLINIC_INFO: ClinicInformation = {
  name: 'The Surrey Roofing Company', legalName: 'The Surrey Roofing Company', tagline: 'Roof repairs and restoration in Croydon and nearby areas.',
  primaryLocation: { street: '42 N Downs Rd', suite: '', city: 'New Addington, Croydon', state: '', postalCode: 'CR0 0LB', country: 'GB', directions: '42 N Downs Rd, New Addington, Croydon CR0 0LB, United Kingdom', landmarks: '8XVH+8V Croydon, United Kingdom' },
  contact: { phone: '+44 7729 174423', emergencyPhone: '+44 7729 174423', whatsapp: '+44 7729 174423' },
  identityHighlights: ['Roof repairs and restoration', 'Chimney repointing and repairs', 'Lead flashing and ridge tile work', 'Serving Croydon and nearby areas'],
  schedule: [
    { day: 'Monday', hours: '7:00 AM–8:30 PM' }, { day: 'Tuesday', hours: '7:00 AM–8:30 PM' },
    { day: 'Wednesday', hours: '7:00 AM–8:30 PM' }, { day: 'Thursday', hours: '7:00 AM–8:30 PM' },
    { day: 'Friday', hours: '7:00 AM–2:00 AM' }, { day: 'Saturday', hours: '8:30 AM–8:30 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ], verifiedStats: [], accreditations: [],
};
const teamId = 'mark-surrey-roofing-company';
export const DENTISTS: TeamProfile[] = [{ id: teamId, slug: teamId, name: 'Mark', title: 'Roofer', qualifications: 'The Surrey Roofing Company', specialization: 'Roof repairs, chimney work and restoration', experienceYears: 0, bio: 'Mark and the team carry out roof repairs, chimney repointing, lead flashing work and ridge tile repairs. Customers describe professional service, clear communication, tidy workmanship and practical on-site solutions.', philosophy: 'Understand the roof, agree the work clearly and leave the site clean and tidy.', education: [], memberships: [], specialties: ['Roof repairs', 'Roof restoration', 'Chimney repointing', 'Lead flashing', 'Ridge tile rebedding', 'Tile repairs'], image: '/images/roofing-hero.png', warmImage: '/images/roof-saffron-walden-1024x768-1.jpg' }];
const photos = ['/images/roofing-hero.png', '/images/roof-with-tiles.png', '/images/roof-saffron-walden-1024x768-1.jpg', '/images/roofb3-1.jpg'];
const serviceNames: [string, string, string][] = [
 ['roof-repairs', 'Roof repairs', 'Roof repairs for damaged tiles, leaks and other visible issues. Discuss the roof condition and the work required before booking.'],
 ['chimney-repairs', 'Chimney repairs and repointing', 'Chimney breast repointing, chimney pot reseating and related repairs.'],
 ['lead-flashing', 'Lead flashing and leadwork', 'Lead flashing repairs and replacement to help protect roof joints and chimney areas.'],
 ['ridge-tile-repairs', 'Ridge tile repairs and rebedding', 'Lift, clean and re-bed ridge tiles, with repairs discussed as part of the job.'],
 ['roof-restoration', 'Roof restoration', 'Roofing work planned around the property, roof condition and repairs needed.'],
];
function createService([slug, name, description]: [string, string, string], index: number): ServiceDetail {
  const focus = name.toLowerCase();
  const situations = ['You have noticed an issue with your roof or chimney.', 'You are planning roof work and want to discuss the scope.', 'You would like a roofer to review the work needed at your property.'];
  return { slug, name, navLabel: name, tagline: name + ' in Croydon and nearby areas.', shortDescription: description,
    clinicalExplanation: 'The Surrey Roofing Company discusses the roof condition, access and work required before agreeing a job. Call to talk through ' + focus + ' at your property.',
    whoNeeds: situations, benefits: ['Professional and punctual service', 'Practical solutions for complex requirements', 'Careful, tidy workmanship'],
    indications: situations.map((condition) => ({ condition, explanation: 'Describe what you have noticed and where it is on the roof when you get in touch.' })),
    procedureSteps: [
      { stepNumber: 1, title: 'Tell us about the roof', duration: 'First contact', description: 'Share the issue, the property location and the work you have in mind.', clinicalDetails: 'Photos can help show the areas you would like reviewed.' },
      { stepNumber: 2, title: 'Review the requirements', duration: 'As arranged', description: 'Discuss the roof condition and the work needed for the property.', clinicalDetails: 'The details depend on access and what is found on the roof.' },
      { stepNumber: 3, title: 'Agree on the work', duration: 'Before work begins', description: 'Confirm the scope and timing before the job gets underway.', clinicalDetails: 'The quote and schedule are based on the agreed requirements.' },
      { stepNumber: 4, title: 'Complete the job', duration: 'As arranged', description: 'The team carries out the agreed roofing work and tidies the site.', clinicalDetails: 'Raise any snagging points with the team.' },
    ],
    recoveryTimeline: [
      { period: 'Before work', expectedSensations: 'Discuss the roof, access and work requested.', careProtocol: 'Confirm any access arrangements with the team.' },
      { period: 'During work', expectedSensations: 'Roof work follows the agreed scope.', careProtocol: 'Keep the agreed access area clear.' },
      { period: 'After work', expectedSensations: 'Review the completed work and any follow-up details.', careProtocol: 'Discuss any snagging points with the team.' },
    ],
    costTransparency: { baseRange: 'Call to discuss the job and request a quote.', factors: ['Roof condition and size', 'Access and work required', 'Materials and agreed scope'], whatIsIncluded: ['Discussion of your requirements', 'Agreement on the work scope', 'Timing and next steps'], note: 'Pricing depends on the property and agreed work. Contact the team to discuss a quote.' },
    beforeAfterCase: { category: name, clinicalContext: 'Roofing project reference image.', beforeLabel: 'Roof project', afterLabel: 'Completed work', beforeImage: photos[index % photos.length], afterImage: photos[(index + 1) % photos.length], timeframe: 'Timing agreed for the project' },
    assignedDentistId: teamId,
    faqs: [
      { question: 'How do I arrange ' + focus + '?', answer: 'Call The Surrey Roofing Company to describe the work and discuss timing.' },
      { question: 'Can you help with a complicated roof project?', answer: 'Call to explain the requirements and discuss what solutions may be suitable.' },
      { question: 'Do you leave the site tidy?', answer: 'Customers mention clean and tidy work areas after roofing jobs.' },
      { question: 'Where do you work?', answer: 'The company is based in New Addington, Croydon. Call to confirm availability for your property.' },
    ],
  };
}
export const SERVICES: ServiceDetail[] = serviceNames.map(createService);
export interface EmergencyCondition { id:string; title:string; urgency:'Immediate (0–2 hours)'|'Same-Day (2–6 hours)'|'Urgent (Within 24 hours)'; symptoms:string[]; immediateAction:string[]; clinicTreatment:string; }
export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [];
export interface BlogPost { slug:string; title:string; category:string; readTime:string; publishDate:string; lastUpdated:string; authorId:string; excerpt:string; leadImage:string; relatedServiceSlug:string; content:{intro:string;sections:{heading:string;body:string}[];faqs?:{question:string;answer:string}[]}; }
export const BLOG_POSTS: BlogPost[] = [
 {slug:'chimney-repointing-and-flashing',title:'Chimney repointing and lead flashing: what to discuss',category:'Roof repairs',readTime:'3 min read',publishDate:'2026-10-26',lastUpdated:'2026-10-26',authorId:teamId,excerpt:'Chimney repointing, flashing and chimney pots can all be part of a roof repair conversation.',leadImage:photos[0],relatedServiceSlug:'chimney-repairs',content:{intro:'If your chimney needs attention, note the areas that need work and discuss the full scope with your roofer.',sections:[{heading:'Check the visible areas',body:'Describe any loose or damaged pointing, flashing or chimney pots you have noticed.'},{heading:'Agree the repair scope',body:'Ask which repairs are included and how the work area will be left when the job is complete.'}]}},
 {slug:'ridge-tile-repairs',title:'When ridge tiles need attention',category:'Roof maintenance',readTime:'3 min read',publishDate:'2026-10-26',lastUpdated:'2026-10-26',authorId:teamId,excerpt:'Cleaning and re-bedding ridge tiles may be considered when discussing roof maintenance.',leadImage:photos[1],relatedServiceSlug:'ridge-tile-repairs',content:{intro:'Raise any loose or damaged ridge tiles when arranging roofing work.',sections:[{heading:'Describe what you have noticed',body:'Tell your roofer where the ridge tiles need attention and whether other roof work is planned.'},{heading:'Discuss preparation and clean-up',body:'Confirm what work is included and ask how the site will be left after the job.'}]}},
 {slug:'planning-roof-repairs',title:'Planning roof repairs at your property',category:'Roof repairs',readTime:'3 min read',publishDate:'2026-10-26',lastUpdated:'2026-10-26',authorId:teamId,excerpt:'A clear description of the roof issue can help you discuss the work and next steps.',leadImage:photos[2],relatedServiceSlug:'roof-repairs',content:{intro:'Before arranging roof repairs, note the areas that concern you and any access details for your property.',sections:[{heading:'Share the details',body:'Describe visible damage, the roof area involved and any work that may need coordinating.'},{heading:'Confirm the scope',body:'Discuss the repairs, timing and quote before the work begins.'}]}}
];
export const CUSTOMER_REVIEWS = [
 {name:'Michael Seel',date:'a year ago',text:'“I would not hesitate to recommend The Surrey Roofing Company. Mark repointed my chimney breast, replaced the lead flashing, reseated chimney pots and lifted, cleaned and re-bedded the ridge tiles.”'},
 {name:'Sam Carmichael',date:'4 months ago',text:'“Mark was an absolute professional on a major renovation with complicated requirements. He found on-the-spot solutions and delivered.”'},
 {name:'Beats By SILVASTONE',date:'a year ago',text:'“They made time for the job before Christmas and did a fantastic job on my roof. Pleasant, helpful service and great workmanship.”'},
 {name:'Heidi Williams',date:'2 years ago',text:'“The team took time to diagnose roof problems that were causing leaks and water damage, then completed the work.”'},
 {name:'Ben Porter',date:'a year ago',text:'“Mark was polite, punctual and did a lovely clean and tidy job overhauling my roof. Highly recommended.”'},
 {name:'Pete B',date:'a year ago',text:'“Fantastic tradesmen, superb job, honest and fair pricing, clean and tidy, very professional and attentive to detail.”'},
 {name:'Wayne Giddens',date:'a year ago',text:'“Mark did a great job. The roof and dormer look great, with fantastic leadwork too.”'},
 {name:'Daniel Hilton',date:'2 years ago',text:'“Mark completes all my roofs on time and, more importantly, within budget. Very good roofer.”'},
 {name:'Phoebe Browne',date:'a year ago',text:'“A responsive company that completed the job on time and left the site clean and tidy.”'},
 {name:'Dan',date:'10 months ago',text:'“Thanks for the roof repair. It was a good and quick repair.”'},
];
