export const caseStudies = [
  {
    id: 'aura-botanicals',
    title: 'E-Commerce Platform for Organic Skincare',
    subtitle: 'A complete digital transformation focusing on performance, user experience, and scalable architecture to support rapid brand growth.',
    client: 'Aura Botanicals',
    technologies: ['React', 'Spring Boot', 'AWS', 'Figma'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFA2zgvlCFYg-95uECqbVEQljJ8_-Q4YcDUgsV1jXx9rw4RCwTRntOPS4Ql8TR6Xni1CjlhVQ6ph6sVuPBG1GQKEN-Qpjxp6E4ydE5yc9dB52hdvmZaVVcs_FqsGz-aJOgBgn1OwPL1yQhYXcDhMRyZNWAMs4zDc_qxoioaFuMfRNpRU4k-ReWeZIIU05PP7rF39sAeKfI8K_t_WI9kwHdqw_YIcLlmGZwLZtLO-fxtXZHJRlg58Gd',
    challenge: 'Aura Botanicals was experiencing explosive growth, but their legacy platform couldn\'t keep up. Slow load times, a clunky mobile checkout experience, and rigid inventory management were severely bottlenecking sales and frustrating loyal customers. They needed a robust, headless architecture capable of handling traffic spikes during product drops while maintaining sub-second page loads across all devices.',
    quote: '"Our marketing was driving massive traffic, but our site was dropping the ball at the finish line. We needed a digital storefront as premium as our products."',
    quoteAuthor: 'Mia Patel',
    quoteTitle: 'Founder, Aura Botanicals',
    quoteImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgDEkHN-SGbVR5NxA8VDH9sEcsywMaLgwUDfUn0EKcfLxdKx3uZx5UeHBZx-TjAPCf6fmZhwRS9Pnj6BmPgnj62bCtHPT3AGatwKc96FOH4Dz90L8X9en2SIKIRvPTZ5ldBy8OJlYbTs51BFeWMEBlqS3EzPdODCqxtcuCA_fZfydLe-5eb6sa32R_KTNLz9Uk-t5BysBYwzkpBkswvwSHcD1_SX1aJKj5DWTamSYhAtwOv0gvm4fw',
    solutionSteps: [
      { icon: 'design_services', title: 'UI/UX Design', desc: "Created a minimalist, 'Morning Frost' aesthetic focusing on whitespace and high-quality imagery." },
      { icon: 'code', title: 'React Frontend', desc: 'Built a lightning-fast Single Page Application (SPA) for seamless transitions and instant feedback.' },
      { icon: 'database', title: 'Spring Boot API', desc: 'Developed robust microservices to handle complex inventory logic and secure payment processing.' },
      { icon: 'cloud', title: 'AWS Infrastructure', desc: 'Deployed on highly available, auto-scaling architecture ensuring 99.99% uptime during peak sales.' }
    ],
    results: [
      { value: '3x', label: 'Page Speed' },
      { value: '40%', label: 'Conversion Rate' },
      { value: '-65%', label: 'Bounce Rate' },
      { value: '100k+', label: 'Orders Handled' }
    ]
  },
  {
    id: 'ledgerflow',
    title: 'Secure FinTech Dashboard for B2B Reconciliation',
    subtitle: 'A responsive, high‑security web application that streamlined financial reconciliation for a growing FinTech startup.',
    client: 'LedgerFlow',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlkmlKGGn6kvvM7nbv-C0iDCPnfHEb2gS7Zdd1j2II8tExEdcI7N2KucXLpRvZ_jCzJx7MS6oBi9QZIxdfhMlMfM20jpxXfi4MfguiXosi2LuWFLvXwmYW-Crxyb2fB7bqYRm860B_dw0sLJbXvM1e4gtSahlTX1MHrdkns8XIZH9cvXJxZxoP8lK4QFqRzffUEbnUS_X9LnlEGh4O0Bczm7gx7FF-Q5Q3vy1VYwU2TnCD7AIbjsMQ',
    challenge: 'LedgerFlow needed a secure, real‑time dashboard for their B2B clients to reconcile transactions across multiple bank accounts. The legacy system was slow, non‑responsive on mobile, and lacked role‑based access controls, making it risky for sensitive financial data.',
    quote: '"We needed a partner who understood both security and UX. Layoutly delivered a platform our clients actually enjoy using — and trust."',
    quoteAuthor: 'David Okafor',
    quoteTitle: 'CTO, LedgerFlow',
    quoteImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgDEkHN-SGbVR5NxA8VDH9sEcsywMaLgwUDfUn0EKcfLxdKx3uZx5UeHBZx-TjAPCf6fmZhwRS9Pnj6BmPgnj62bCtHPT3AGatwKc96FOH4Dz90L8X9en2SIKIRvPTZ5ldBy8OJlYbTs51BFeWMEBlqS3EzPdODCqxtcuCA_fZfydLe-5eb6sa32R_KTNLz9Uk-t5BysBYwzkpBkswvwSHcD1_SX1aJKj5DWTamSYhAtwOv0gvm4fw',
    solutionSteps: [
      { icon: 'security', title: 'Secure Architecture', desc: 'Implemented role‑based access and end‑to‑end encryption for all sensitive data.' },
      { icon: 'dashboard', title: 'Responsive Dashboard', desc: 'Built a mobile‑first React dashboard with real‑time data updates via WebSockets.' },
      { icon: 'api', title: 'RESTful API', desc: 'Developed a Node.js API with PostgreSQL, optimised for complex financial queries.' },
      { icon: 'devops', title: 'DevOps & Monitoring', desc: 'Containerised with Docker and deployed on AWS with continuous monitoring and alerting.' }
    ],
    results: [
      { value: '99.9%', label: 'Uptime' },
      { value: '8x', label: 'Query Speed' },
      { value: 'Zero', label: 'Security Breaches' },
      { value: '200+', label: 'Active Clients' }
    ]
  },
  {
    id: 'vitaconnect',
    title: 'Telehealth MVP: 4 Weeks to Launch',
    subtitle: 'A rapid MVP development for a telehealth patient onboarding platform, built to validate market fit and attract investors.',
    client: 'VitaConnect',
    technologies: ['React Native', 'Firebase', 'Twilio', 'Figma'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdGOzRHe9ZPwlSWQApaMowm2G332aDWHmKW7GXPhE_obJ9dDdkGvQJOibreAqfZKo3j2SvA5naQ4cuUM9AZn9_yUybyr95Hr4EXoWvGvtyFIymiFIVNnMfW7xprApdnciGuS_eS593k4NeynjvQn1x2SWmVgXg18l4Tg0_Y_0cZwcWZ2KRycQjblK220XcS0jRqBuh4jGZ_1cKdnbM8vBGpUeIThXxDSCczdd-3srrE5vLqC_2n_Ex',
    challenge: 'The healthcare startup needed to validate their patient onboarding and teleconsultation concept quickly. They had a tight 4‑week deadline to deliver a working MVP for a seed round pitch. The platform needed to handle video calls, patient intake forms, and schedule management.',
    quote: '"Layoutly turned our idea into a polished MVP in just 4 weeks. We secured our seed round because we had something real to show."',
    quoteAuthor: 'Dr. Anjali Mehta',
    quoteTitle: 'Co‑founder, VitaConnect',
    quoteImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgDEkHN-SGbVR5NxA8VDH9sEcsywMaLgwUDfUn0EKcfLxdKx3uZx5UeHBZx-TjAPCf6fmZhwRS9Pnj6BmPgnj62bCtHPT3AGatwKc96FOH4Dz90L8X9en2SIKIRvPTZ5ldBy8OJlYbTs51BFeWMEBlqS3EzPdODCqxtcuCA_fZfydLe-5eb6sa32R_KTNLz9Uk-t5BysBYwzkpBkswvwSHcD1_SX1aJKj5DWTamSYhAtwOv0gvm4fw',
    solutionSteps: [
      { icon: 'design_services', title: 'Patient‑First Design', desc: 'Designed a calming, intuitive UI for patients of all ages and tech comfort levels.' },
      { icon: 'code', title: 'Cross‑Platform App', desc: 'Built with React Native to deploy on both iOS and Android simultaneously.' },
      { icon: 'video_call', title: 'Video Integration', desc: 'Integrated Twilio Programmable Video for secure, high‑quality consultations.' },
      { icon: 'cloud', title: 'Firebase Backend', desc: 'Used Firebase for authentication, real‑time database, and serverless functions.' }
    ],
    results: [
      { value: '4 Weeks', label: 'Time to Launch' },
      { value: 'Seed Round', label: 'Secured $1.2M' },
      { value: '500+', label: 'Beta Users' },
      { value: '98%', label: 'Patient Satisfaction' }
    ]
  }
];

// Helper to get a case study by id
export const getCaseStudy = (id) => {
  return caseStudies.find(study => study.id === id);
};