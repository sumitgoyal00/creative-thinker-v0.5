import {
  ServiceItem,
  PortfolioItem,
  Differentiator,
  TechStackItem,
  ShowcaseCategoryTab,
  AwardItem,
  NewsArticle
} from '../types';
import adaniThumbnail from '../assets/images/adanii thumnail.png';
import eliteThumbnail from '../assets/images/ELITE.png';
import altitudeThumbnail from '../assets/images/ALITUDE.png';
import capitalThumbnail from '../assets/images/CAPITAL.png';
import capitalwalkThumbnail from '../assets/images/CAPITALWALK.png';
import the88Thumbnail from '../assets/images/THE 88.png';
import amarisThumbnail from '../assets/images/EMAAR AMARIS.png';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: '3d-motion',
    category: '3d-motion',
    title: '3D Animation & Motion Graphics',
    tagline: 'Hyper-real CGI, product teardowns, and futuristic title design',
    description: 'We translate complex engineering and abstract brand concepts into photorealistic 3D visuals, fluid simulations, and kinetic typography that command viewer attention.',
    iconName: 'Box',
    deliverables: ['CGI Product Exploders', 'Photoreal Fluid Physics', 'Dynamic Title Sequences', 'Unreal Engine 5 Realtime'],
    specs: 'Octane / Redshift / Houdini / Blender',
    badge: 'Flagship Craft',
    sampleVideo: 'https://assets.mixkit.co/videos/preview/mixkit-futuristic-robotic-interface-digital-animation-41484-large.mp4',
    posterImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'construction-drone',
    category: 'construction',
    title: 'Construction & Real Estate Visuals',
    tagline: 'FPV fly-throughs, LiDAR drone surveys, and luxury architectural films',
    description: 'End-to-end capture for grand architecture, civil infrastructure, and luxury properties. Combining FAA-certified 4K drone cinematography with architectural precision.',
    iconName: 'Building2',
    deliverables: ['FPV Interior Tours', 'Sub-Centimeter Drone Mapping', 'BIM-to-Video Overlays', 'Sunset Architectural Stills'],
    specs: 'DJI Inspire 3 / Zenmuse X9-8K / RTK LiDAR',
    badge: 'FAA Licensed',
    sampleVideo: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-skyscrapers-at-sunset-41457-large.mp4',
    posterImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'commercials',
    category: 'commercials',
    title: 'Advertisements & Commercials',
    tagline: 'Broadcast-tier storytelling that turns casual eyeballs into loyal consumers',
    description: 'High-concept creative direction, precision lighting, and razor-sharp pacing built for broadcast TV, OTT platforms, and viral digital launch campaigns.',
    iconName: 'Tv',
    deliverables: ['Broadcast 30s & 60s Cuts', 'Vertical Social Suites (9:16)', 'Actor & Voice Talent Directing', 'Custom Sound Identity'],
    specs: 'RED V-Raptor 8K VV / ARRI Master Anamorphic',
    badge: 'High Conversion',
    sampleVideo: 'https://assets.mixkit.co/videos/preview/mixkit-hands-holding-and-controlling-a-high-tech-device-41483-large.mp4',
    posterImage: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'weddings-events',
    category: 'weddings-films',
    title: 'Tracking & Marking',
    tagline: 'Precision 3D matchmoving, camera tracking, and spatial visual marking',
    description: 'High-precision camera tracking and visual marking for architectural overlays, VFX integration, and civil landmark documentation.',
    iconName: 'Sparkles',
    deliverables: ['3D Camera Solve Data', 'Matchmove Integration', 'LiDAR Point Cloud Alignment', 'VFX Ready Passes'],
    specs: 'Syntheyes / 3DEqualizer / LiDAR Photogrammetry / Unreal Engine',
    badge: 'Precision Grade',
    sampleVideo: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-skyscrapers-at-sunset-41457-large.mp4',
    posterImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'short-films',
    category: 'weddings-films',
    title: 'Short Films & Post-Production',
    tagline: 'DaVinci color mastering, Dolby Atmos mixing, and narrative editing',
    description: 'Full-service post-production finishing. Whether reviving existing footage or assembling festival-bound narratives, we craft rhythm, atmosphere, and cinematic depth.',
    iconName: 'Clapperboard',
    deliverables: ['ACES Color Grading', '5.1 / 7.1.4 Dolby Spatial Mix', 'VFX Cleanups & Paint Outs', 'DCP Cinema Package Creation'],
    specs: 'DaVinci Resolve Studio / Pro Tools Ultimate / EIZO ColorEdge',
    badge: 'Studio Finishing',
    sampleVideo: 'https://assets.mixkit.co/videos/preview/mixkit-night-city-traffic-and-street-lights-in-timelapse-41470-large.mp4',
    posterImage: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85'
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'godrej-samaris',
    title: 'GODREJ SAMARIS',
    client: 'Godrej Properties',
    category: 'construction',
    categoryLabel: 'CONSTRUCTION & DRONE',
    year: '2026',
    duration: '02:15',
    resolution: '8K ULTRA HD',
    videoId: 'ClyPMnSf7yk',
    youtubeId: 'ClyPMnSf7yk',
    posterUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&h=1200&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&h=1200&q=85',
    description: 'Ultra-luxurious residential cinematic showcase featuring large-format architectural drone cinematography and sunrise light play.',
    featured: true,
    tags: ['Luxury Living', 'Architectural Drone', 'Cinematic 8K'],
    caseStudy: {
      goal: 'Highlight the architectural grandeur and expansive landscaped clubhouse.',
      deliverables: ['Master Showcase Film', 'Social Cinematic Cuts', 'Print Billboard Stills'],
      impact: 'Record-breaking launch day inquiries and buyer walkthrough registrations.'
    }
  },
  {
    id: 'emaar-amaris',
    title: 'EMAAR AMARIS',
    client: 'Emaar India',
    category: 'construction',
    categoryLabel: 'CONSTRUCTION & DRONE',
    year: '2026',
    duration: '01:45',
    resolution: '6K PRORAW',
    videoId: 'fcAudTk-bUc',
    youtubeId: 'fcAudTk-bUc',
    posterUrl: amarisThumbnail,
    thumbnail: amarisThumbnail,
    description: 'Flagship lifestyle commercial film capturing bespoke interior finishes and panoramic metropolitan skydeck vistas.',
    featured: true,
    tags: ['Emaar Flagship', 'Interior Cinema', 'Luxury Aesthetics'],
    caseStudy: {
      goal: 'Elevate brand positioning for luxury urban residences with sensory cinematography.',
      deliverables: ['Broadcast Commercial', 'Digital Campaign Suites', 'Immersive VR Stills'],
      impact: 'Generated over 2.4M digital impressions in first week.'
    }
  },
  {
    id: 'emaar-elite-oasis',
    title: 'EMAAR ELITE OASIS',
    client: 'Emaar India',
    category: 'construction',
    categoryLabel: 'CONSTRUCTION & DRONE',
    year: '2025',
    duration: '02:30',
    resolution: '8K DCI',
    videoId: 'uw0kn3RlEAY',
    youtubeId: 'uw0kn3RlEAY',
    posterUrl: eliteThumbnail,
    thumbnail: eliteThumbnail,
    description: 'Sanctuary-inspired estate film focusing on water features, verdant botanical boulevards, and private villa architecture.',
    featured: true,
    tags: ['Private Oasis', 'Aerial Drone', 'Estate Living'],
    caseStudy: {
      goal: 'Communicate serenity and tranquil sanctuary living amidst prime city connectivity.',
      deliverables: ['Cinematic Experience Film', 'Macro Landscaping Vignettes'],
      impact: '100% allotment of phase-one signature villas within 48 hours.'
    }
  },
  {
    id: 'emaar-the-88',
    title: 'EMAAR THE 88',
    client: 'Emaar India',
    category: '3d-motion',
    categoryLabel: '3D & MOTION',
    year: '2026',
    duration: '01:20',
    resolution: '8K RENDER',
    videoId: 'EocNpZELje8',
    youtubeId: 'EocNpZELje8',
    posterUrl: the88Thumbnail,
    thumbnail: the88Thumbnail,
    description: 'Futuristic architectural CGI animation revealing the aerodynamic glass facade and soaring double-height sky lobbies.',
    featured: true,
    tags: ['3D Architecture', 'Facade CGI', 'Sky Lobby 8K'],
    caseStudy: {
      goal: 'Visualize architectural engineering milestones prior to topping out.',
      deliverables: ['3D Master Film', 'LED Video Wall Assets'],
      impact: 'Recognized as Best Real Estate CGI Film at Dubai Architecture Awards.'
    }
  },
  {
    id: 'paras-menor',
    title: 'GODREJ APARTMENT',
    client: 'Godrej',
    category: 'construction',
    categoryLabel: 'CONSTRUCTION & DRONE',
    year: '2025',
    duration: '01:10',
    resolution: '4K',
    videoId: 'yPX-xf8vJJw',
    youtubeId: 'yPX-xf8vJJw',
    posterUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&h=1200&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&h=1200&q=85',
    description: 'High-octane commercial showcasing contemporary European styling, private balconies, and clubhouse lifestyle.',
    featured: false,
    tags: ['European Elegance', 'Modern Facades', 'Ambient Sound'],
    caseStudy: {
      goal: 'Rebrand luxury multi-family living with international aesthetic standards.',
      deliverables: ['30s TV Spot', '60s Web Feature Film'],
      impact: 'Accelerated customer inquiries by 180% across regional channels.'
    }
  },
  {
    id: 'm3m-capitalwalk',
    title: 'M3M CAPITALWALK',
    client: 'M3M India',
    category: '3d-motion',
    categoryLabel: '3D & MOTION',
    year: '2026',
    duration: '01:50',
    resolution: '8K MASTER',
    videoId: 'bCAJp5jCkSE',
    youtubeId: 'bCAJp5jCkSE',
    posterUrl: capitalwalkThumbnail,
    thumbnail: capitalwalkThumbnail,
    description: 'Dynamic commercial destination film capturing the vibrant retail high-street, entertainment plazas, and night-lit avenues.',
    featured: false,
    tags: ['Retail Avenue', 'CGI Motion', 'Lighting Mastery'],
    caseStudy: {
      goal: 'Position Capitalwalk as the primary luxury shopping and gastronomy hub.',
      deliverables: ['Flagship Cinematic Walkthrough', 'Social Teasers'],
      impact: 'Leased 92% of anchor retail spaces to global luxury brands.'
    }
  },
  {
    id: 'capital-tower',
    title: 'M3M CAPITAL TOWER',
    client: 'M3M Group',
    category: 'construction',
    categoryLabel: 'CONSTRUCTION & DRONE',
    year: '2025',
    duration: '02:00',
    resolution: '6K PRORAW',
    videoId: 'w3lglaoSkK8',
    youtubeId: 'w3lglaoSkK8',
    posterUrl: capitalThumbnail,
    thumbnail: capitalThumbnail,
    description: 'Aerial drone cinematography documenting the monolithic glass corporate headquarters and LEED Platinum atrium.',
    featured: false,
    tags: ['Corporate Architecture', 'Precision Drone', 'LEED Platinum'],
    caseStudy: {
      goal: 'Document corporate engineering excellence and high-efficiency glass envelope.',
      deliverables: ['Master Corporate Film', 'Investor Presentation Reel'],
      impact: 'Secured premier Fortune 500 corporate tenancy.'
    }
  },
  {
    id: 'altitude',
    title: 'ALTITUDE',
    client: 'Altitude Luxury Living',
    category: 'weddings-films',
    categoryLabel: 'TRACKING & MARKING',
    year: '2026',
    duration: '01:35',
    resolution: '4K CINEMA',
    videoId: 'TFTZYqdxIy0',
    youtubeId: 'TFTZYqdxIy0',
    posterUrl: altitudeThumbnail,
    thumbnail: altitudeThumbnail,
    description: 'Poetic cinematic documentary following life at 800 feet above the city with warm anamorphic lens flares.',
    featured: false,
    tags: ['Anamorphic', 'Skyline Living', 'Emotional Narrative'],
    caseStudy: {
      goal: 'Deliver an intimate, emotive luxury film focused on atmosphere and sunset horizons.',
      deliverables: ['Directors Cut Film', 'Original Score Audio Master'],
      impact: 'Featured at International Real Estate Media Awards.'
    }
  },
  {
    id: 'adani-mark-road-path',
    title: 'ADANI THE MARK ROAD PATH',
    client: 'Adani Realty',
    category: 'construction',
    categoryLabel: 'CONSTRUCTION & DRONE',
    year: '2026',
    duration: '02:40',
    resolution: '8K ULTRA HD',
    videoId: 'UfV6yQcdYio',
    youtubeId: 'UfV6yQcdYio',
    posterUrl: adaniThumbnail,
    thumbnail: adaniThumbnail,
    description: 'Epic infrastructure and connectivity documentary tracking the arterial boulevard network and urban development corridor.',
    featured: false,
    tags: ['Infrastructure Cinema', 'Adani Realty', 'FPV Drone'],
    caseStudy: {
      goal: 'Showcase strategic road network connectivity and landmark infrastructure development.',
      deliverables: ['Master Infrastructure Showcase', '4K Highway Aerial Sequences'],
      impact: 'Demonstrated multimodal connectivity for over 50,000 residents and corporate commuters.'
    }
  }
];

export const DIFFERENTIATORS: Differentiator[] = [
  {
    id: '01',
    number: '01',
    title: 'Cinema-Grade Optical Pipeline',
    headline: 'RED V-Raptor 8K VV & Sony Cine-Alta',
    description: 'We shoot on the identical large-format sensor hardware and Cooke anamorphic glass utilized by Hollywood blockbusters, delivering true dynamic range, organic roll-off, and cinematic presence.',
    metrics: '8K RAW / 120 FPS',
    metricLabel: 'Capture Standard',
    iconName: 'Camera'
  },
  {
    id: '02',
    number: '02',
    title: 'Engineering-Accurate 3D Simulations',
    headline: 'Houdini, Octane & Unreal Engine 5',
    description: 'We don’t settle for generic 3D assets. Every particle fluid, cloth fold, and optical reflection is mathematically calculated and rendered using high-density GPU clusters.',
    metrics: 'Sub-Millimeter',
    metricLabel: 'Physics Precision',
    iconName: 'Cpu'
  },
  {
    id: '03',
    number: '03',
    title: 'DaVinci Resolve & Dolby Spatial Finishing',
    headline: 'Calibrated Color Science & 7.1.4 Mixing',
    description: 'Mastered in dedicated light-controlled suites on 100% DCI-P3 reference monitors. Every vocal inflection and low-end bass rumble is sculpted for theatrical and mobile playback.',
    metrics: '100% DCI-P3',
    metricLabel: 'Color Fidelity',
    iconName: 'Sliders'
  },
  {
    id: '04',
    number: '04',
    title: 'Hyper-Agile Turnaround & Cloud Review',
    headline: 'Frame.io Collaboration & 7-Day First Cuts',
    description: 'Time-to-market is everything. Our director-to-client workflow enables timestamped feedback, lossless 4K cloud review links, and rapid version turnaround without corporate red tape.',
    metrics: '48-Hour',
    metricLabel: 'Assembly Pacing',
    iconName: 'Zap'
  }
];

export const SHOWCASE_CATEGORIES: ShowcaseCategoryTab[] = [
  {
    id: '3d-motion',
    label: '3D & Motion',
    subtitle: 'CGI Simulation & Kinetic 3D',
    headline: 'Hyper-Real 3D Simulation & Kinetic Artistry',
    description: 'We translate complex engineering and abstract product concepts into photorealistic 3D visuals, fluid simulations, and kinetic typography that command viewer attention.',
    stats: 'Houdini Fluids • Octane Spectra • Unreal 5',
    bannerVideo: 'https://assets.mixkit.co/videos/preview/mixkit-futuristic-robotic-interface-digital-animation-41484-large.mp4',
    bannerPoster: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=85'
  },
  {
    id: 'construction',
    label: 'Construction & Drone',
    subtitle: 'Architectural & FPV Visuals',
    headline: 'Architectural Scale & Sub-Centimeter Kinematics',
    description: 'End-to-end capture for grand architecture, civil infrastructure, and luxury properties. Combining FAA-certified 4K drone cinematography with architectural precision.',
    stats: 'DJI Inspire 3 • Zenmuse X9-8K • RTK LiDAR',
    bannerVideo: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-skyscrapers-at-sunset-41457-large.mp4',
    bannerPoster: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=85'
  },
  {
    id: 'weddings-films',
    label: 'Tracking & Marking',
    subtitle: 'Camera Tracking & Visual Marking',
    headline: 'High-Precision 3D Tracking, Matchmoving & Marking',
    description: 'Precision camera tracking, 3D matchmoving, and spatial visual marking for architectural overlays, VFX integration, and landmark infrastructure.',
    stats: 'LiDAR Photogrammetry • Syntheyes • 3D Equalizer',
    bannerVideo: 'https://assets.mixkit.co/videos/preview/mixkit-young-couple-dancing-intimately-at-sunset-41464-large.mp4',
    bannerPoster: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85'
  }
];

export const AWARDS_DATA: AwardItem[] = [
  {
    id: 'award-1',
    year: '2026',
    organization: 'Cannes Corporate Media & TV Awards',
    category: 'Best 3D Motion & Visual Effects',
    project: 'Chronos Mechanical: Void Horizon',
    title: 'Gold Dolphin Winner'
  },
  {
    id: 'award-2',
    year: '2025',
    organization: 'Clio Entertainment Awards',
    category: 'Cinematography & Direction',
    project: 'AeroZero: Frictionless Speed',
    title: 'Silver Trophy'
  },
  {
    id: 'award-3',
    year: '2025',
    organization: 'European Independent Film Festival',
    category: 'Best Cinematography (Short Documentary)',
    project: 'The Last Artisan of Murano',
    title: 'Grand Jury Prize'
  },
  {
    id: 'award-4',
    year: '2025',
    organization: 'Architectural Media Biennale',
    category: 'Aerial & FPV Innovation',
    project: 'Solaris Apex: Skyward Monolith',
    title: 'First Place Honor'
  },
  {
    id: 'award-5',
    year: '2024',
    organization: "Harper's Bazaar Bride Annual",
    category: 'Cinematic Storytelling Benchmark',
    project: 'The Bellagio Vows: Silk & Rain',
    title: 'Wedding Film of the Year'
  },
  {
    id: 'award-6',
    year: '2024',
    organization: 'Promax Global Excellence',
    category: 'Automotive Launch Campaign',
    project: 'HyperDrive Next-Gen Supercar',
    title: 'Gold Trophy'
  }
];

export const NEWS_DATA: NewsArticle[] = [
  {
    id: 'news-1',
    date: 'SEPTEMBER 2026',
    category: 'R&D / CGI PIPELINE',
    title: 'Engineering The Void: Inside our 8K Houdini fluid simulation cluster',
    excerpt: 'A technical breakdown of how we achieved sub-millimeter viscosity realism on the Chronos Horology campaign without GPU memory bottlenecks.',
    readTime: '4 MIN READ',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=85',
    author: 'Chief Technical Director'
  },
  {
    id: 'news-2',
    date: 'AUGUST 2026',
    category: 'COLOR SCIENCE',
    title: 'Why ACEScg and Kodak 5219 emulation define our signature look',
    excerpt: 'Moving past clinical digital sharpness to bring tactile organic grain, creamy highlight roll-offs, and true black retention to commercial screens.',
    readTime: '5 MIN READ',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=85',
    author: 'Lead Colorist'
  },
  {
    id: 'news-3',
    date: 'JULY 2026',
    category: 'AERIAL KINEMATICS',
    title: '100mph FPV through luxury skyscrapers: Navigating urban wind shears',
    excerpt: 'The safety protocols, radio-frequency spectrum coordination, and specialized custom gimbal dampers used in our Solaris Apex architectural film.',
    readTime: '6 MIN READ',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=85',
    author: 'Lead Flight Engineer'
  }
];

export const TECH_STACK: TechStackItem[] = [

  { name: 'After Effects', category: 'Motion Design', iconName: 'Layers', version: '2026' },
  { name: 'Premiere Pro', category: 'Assembly & Cut', iconName: 'Film', version: '2026' },
  { name: 'Blender 4.2', category: 'Open 3D Suite', iconName: 'Box', version: 'Cycles X' },
  { name: 'Cinema 4D', category: 'Procedural Motion', iconName: 'Cuboid', version: 'Maxon Studio' },
  { name: 'DaVinci Resolve', category: 'Color & Fairlight', iconName: 'Palette', version: 'Studio 19' },
  { name: 'RED Digital Cinema', category: '8K RAW Cameras', iconName: 'Camera', version: 'V-Raptor VV' },
  { name: 'Sony FX Cine', category: 'Full Frame Sensors', iconName: 'Aperture', version: 'FX9 & FX6' },
  { name: 'DJI Drones', category: 'Aerial Kinematics', iconName: 'Navigation', version: 'Inspire 3 / X9' },
  { name: 'Unreal Engine 5', category: 'Realtime Virtual Prod', iconName: 'Gamepad2', version: 'Nanite / Lumen' },
  { name: 'Octane Render', category: 'Unbiased GPU Engine', iconName: 'Sun', version: 'Spectra 2026' }
];

export const QUOTE_OPTIONS = {
  services: [
    { id: '3d-motion', title: '3D Animation & Motion Graphics', icon: 'Box', desc: 'Product renders, VFX & Kinetic 3D' },
    { id: 'construction', title: 'Construction & Real Estate Visuals', icon: 'Building2', desc: 'Drone surveys, FPV & Architecture' },
    { id: 'commercials', title: 'Advertisements & Commercials', icon: 'Tv', desc: 'TV broadcast, OTT & social launches' },
    { id: 'weddings', title: 'Tracking & Marking', icon: 'Sparkles', desc: 'Precision 3D matchmoving & camera tracking' },
    { id: 'post-production', title: 'Short Films & Post-Production', icon: 'Clapperboard', desc: 'Finishing, color grade & sound design' },
    { id: 'full-suite', title: 'Full Retainer Production Suite', icon: 'Crown', desc: 'All-inclusive monthly video firepower' }
  ],
  budgets: [
    { id: 'tier-1', label: '$2,500 – $5,000', subtitle: 'Targeted single-asset or compact 3D motion' },
    { id: 'tier-2', label: '$5,000 – $12,000', subtitle: 'Full commercial shoot or multi-angle 3D pack' },
    { id: 'tier-3', label: '$12,000 – $30,000', subtitle: 'Comprehensive campaign, drone + multi-day shoot' },
    { id: 'tier-4', label: '$30,000+ Enterprise', subtitle: 'Feature-scale production, global teams & retainer' }
  ],
  timelines: [
    { id: 'rush', label: 'Rush (< 2 Weeks)', subtitle: 'Priority studio scheduling, 24/7 render queue' },
    { id: 'standard', label: 'Standard (3 – 5 Weeks)', subtitle: 'Optimal creative ideation, revisions & polish' },
    { id: 'flexible', label: 'Flexible (6 – 8 Weeks)', subtitle: 'Extended pre-production & flexible schedule' },
    { id: 'retainer', label: 'Ongoing Retainer', subtitle: 'Continuous monthly media output pipeline' }
  ],
  formats: [
    '4K UHD Master',
    '9:16 Vertical Cut (TikTok / Reels / Shorts)',
    '16:9 Landscape (YouTube / Broadcast)',
    'Dolby Atmos / 5.1 Surround Master',
    'Social Cutdowns (6s, 15s, 30s)',
    'Raw Footage & Project Files Archive'
  ]
};
