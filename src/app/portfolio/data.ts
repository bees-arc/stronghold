export interface PortfolioSector {
  name: string;
  slug: string;
  headline: string;
  description: string;
  detailedOverview: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  image: string;
  protectiveMeasures: string[];
  operationalBenefits: string[];
}

export const portfolioItems: PortfolioSector[] = [
  {
    name: "Businesses & Corporations",
    slug: "businesses",
    headline: "Integrated Corporate Headquarters and Commercial Facility Defense",
    description: "Integrated protection for offices, corporate headquarters, properties, facilities and operations.",
    detailedOverview: "Corporate enterprises face dynamic vulnerabilities ranging from intellectual property theft and unauthorized physical infiltration to executive security concerns. Stronghold engineers discreet yet impenetrable defensive ecosystems tailored specifically for commercial offices, distribution centers, and multi-tenant high-rises.",
    bgColor: "bg-navy-dark",
    textColor: "text-white",
    accentColor: "text-accent-gold",
    image: "/images/sectors/businesses.png",
    protectiveMeasures: [
      "Access control gating with biometric turnstiles and visitor logging",
      "Executive suite safeguarding and confidential meeting room sweeps",
      "24 hour loading dock inspection and asset movement tracking",
      "Perimeter thermal camera surveillance and alarm verification relays"
    ],
    operationalBenefits: [
      "Zero interruption to daily commercial business operations",
      "Enhanced tenant and employee safety confidence",
      "Immediate mitigation of internal shrinkage and corporate espionage risks"
    ]
  },
  {
    name: "Institutions",
    slug: "institutions",
    headline: "High-Traffic Public, Educational, and Governmental Sector Security",
    description: "Professional security strategies for complex, high traffic institutional environments.",
    detailedOverview: "Public institutions, healthcare campuses, universities, and government agencies demand high-visibility vigilance that balances welcoming public access with uncompromising containment protocols. Our teams maintain orderly environments, protect critical archives, and prevent unauthorized breaches.",
    bgColor: "bg-surface-ivory",
    textColor: "text-accent-navy",
    accentColor: "text-accent-gold",
    image: "/images/sectors/institutions.png",
    protectiveMeasures: [
      "Dedicated checkpoint management and bag screening stations",
      "Campus perimeter roving patrols on scheduled and randomized shifts",
      "Emergency panic button relays integrated into centralized security booths",
      "Disaster response choreography for medical and fire evacuations"
    ],
    operationalBenefits: [
      "Orderly public flow management in crowded environments",
      "Rapid de-escalation of civil disturbances and unruly visitors",
      "Strict compliance with national institutional safety regulations"
    ]
  },
  {
    name: "Private & Residential",
    slug: "residential",
    headline: "Discreet and Reliable Protection for Estates and Gated Communities",
    description: "Reliable protection for residential properties, communities and personal estates.",
    detailedOverview: "Your residence should be your sanctuary. Stronghold delivers elite residential guarding and electronic perimeter protection for luxury private estates, villa complexes, and gated neighborhoods, combining utmost discretion with instantaneous emergency response.",
    bgColor: "bg-surface-ivory",
    textColor: "text-accent-navy",
    accentColor: "text-accent-gold",
    image: "/images/sectors/residential.png",
    protectiveMeasures: [
      "Gatehouse sentry guards screening all visiting vehicles and contractors",
      "Infrared tripwire barriers and boundary motion detectors along property walls",
      "Direct radio link to our 24/7 tactical armed response patrol units",
      "Strict confidentiality agreements signed by all stationed operatives"
    ],
    operationalBenefits: [
      "Absolute peace of mind for families and property owners",
      "Total privacy with vetted, courteous, and disciplined sentries",
      "Instant intervention during unauthorized perimeter attempts"
    ]
  },
  {
    name: "Digital Infrastructure",
    slug: "digital",
    headline: "Digital Security and Information Protection for Modern Enterprise Networks",
    description: "Digital security and cyber defense protection for modern business networks.",
    detailedOverview: "Physical defense and digital security work together. Our cybersecurity division protects server facilities, sensitive corporate data, and office networks from unauthorized intrusions, data breaches, and ransomware threats.",
    bgColor: "bg-navy-dark",
    textColor: "text-white",
    accentColor: "text-accent-gold",
    image: "/images/sectors/digital.png",
    protectiveMeasures: [
      "Regular vulnerability assessments and network security reviews",
      "24/7 Security Operations Center monitoring for unauthorized access attempts",
      "Server room access control with biometric authorization",
      "Secure data backup protocols and incident response plans"
    ],
    operationalBenefits: [
      "Protection of proprietary intellectual property and customer databases",
      "Compliance with international data privacy and cyber standards",
      "Proactive neutralization of cyber attacks before data compromise occurs"
    ]
  },
  {
    name: "Events",
    slug: "events",
    headline: "Strategic Crowd Containment, Checkpoint Design, and VIP Safety",
    description: "Strategic crowd containment, checkpoint design, and protocol supervision for events.",
    detailedOverview: "High-attendance events require masterfully choreographed security blueprints. Stronghold provides complete event safety frameworks encompassing attendee credentialing, stage barrier defense, dynamic queue management, and emergency egress routing.",
    bgColor: "bg-surface-ivory",
    textColor: "text-accent-navy",
    accentColor: "text-accent-gold",
    image: "/images/sectors/events.png",
    protectiveMeasures: [
      "Turnstile metal detection arches and manual security sweeps",
      "VIP green room security and stage perimeter barricade defense",
      "Plainclothes tactical spotters monitoring crowd density and behavior",
      "Rapid medical response and evacuation coordination pathways"
    ],
    operationalBenefits: [
      "Smooth, uninterrupted event schedules from start to finish",
      "Safe, enjoyable environment for performers, attendees, and sponsors",
      "Clear coordination with municipal emergency and police agencies"
    ]
  },
  {
    name: "People",
    slug: "people",
    headline: "Executive Close Protection and Armored Transport Support",
    description: "Protection designed around safety, confidentiality, and armored VIP transport support.",
    detailedOverview: "For high-profile executives, diplomats, visiting dignitaries, and celebrities, personal security must be seamless and proactive. Our close protection officers are former military specialists trained in defensive driving, evasive maneuvering, threat anticipation, and close-quarters defense.",
    bgColor: "bg-accent-gold",
    textColor: "text-white",
    accentColor: "text-white",
    image: "/images/sectors/people.png",
    protectiveMeasures: [
      "Dedicated Bodyguard Close Protection Officers accompanying principals",
      "Advance route reconnaissance and alternative emergency path planning",
      "Armored vehicle transport support with tactical evasive drivers",
      "Direct secure communications link to command operations center"
    ],
    operationalBenefits: [
      "Unobtrusive protection allowing principals to focus on their agenda",
      "Flawless discretion regarding confidential conversations and itineraries",
      "Immediate physical shielding and extraction during crisis situations"
    ]
  }
];
