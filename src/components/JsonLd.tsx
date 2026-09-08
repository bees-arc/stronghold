import React from "react";

export default function JsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
    ? (process.env.NEXT_PUBLIC_SITE_URL.startsWith("http")
        ? process.env.NEXT_PUBLIC_SITE_URL
        : `https://${process.env.NEXT_PUBLIC_SITE_URL}`)
    : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://stronghold-kappa.vercel.app";

  const securityServiceSchema = {
    "@context": "https://schema.org",
    "@type": ["SecurityService", "LocalBusiness", "Organization"],
    "@id": `${baseUrl}/#organization`,
    name: "Stronghold Security & Investigation (Pvt) Ltd",
    alternateName: ["Stronghold Security", "Stronghold Sri Lanka", "Stronghold Security & Investigation"],
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    image: [
      `${baseUrl}/logo.png`,
      `${baseUrl}/bodyguard.jpg`,
      `${baseUrl}/guards.jpg`
    ],
    description:
      "Premier military-grade private security, executive close protection, loss prevention, industrial perimeter surveillance, and licensed private investigation services in Sri Lanka.",
    telephone: "+94 11 234 5678",
    email: "info@strongholdsecurity.lk",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Level 14, West Tower, World Trade Center, Echelon Square",
      addressLocality: "Colombo",
      addressRegion: "Western Province",
      postalCode: "00100",
      addressCountry: "LK"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 6.9271,
      longitude: 79.8612
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        opens: "00:00",
        closes: "23:59"
      }
    ],
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Western Province, Sri Lanka"
      },
      {
        "@type": "AdministrativeArea",
        name: "Colombo, Sri Lanka"
      },
      {
        "@type": "Country",
        name: "Sri Lanka"
      }
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Security & Investigation Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Manned Guarding & Static Security",
            description: "Disciplined physical guarding for commercial buildings, manufacturing zones, retail chains, and corporate offices."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Executive VIP Close Protection",
            description: "High-level armed and unarmed close protection for dignitaries, diplomats, and high-net-worth executives."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Electronic Article Surveillance & Loss Prevention",
            description: "Showroom and retail loss prevention, discreet floor monitoring, and EAS gates for commercial outlets."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Industrial & Agricultural Perimeter Protection",
            description: "24/7 centralized processing facility surveillance, container seal audits, and bonded warehouse clearance."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Special Event Crowd Control & Security",
            description: "Comprehensive risk management, access control, and VIP security coordination for large events."
          }
        }
      ]
    },
    founder: {
      "@type": "Person",
      name: "Air Vice Marshal Sampath Thuyacontha",
      jobTitle: "Chairman / Founder",
      description: "Former Commander of the Sri Lanka Air Force with distinguished service in national defense and tactical security operations."
    },
    knowsAbout: [
      "Physical Security",
      "Executive Protection",
      "Loss Prevention",
      "Perimeter Surveillance",
      "Tactical Defense",
      "Corporate Investigations",
      "CCTV Monitoring"
    ],
    client: [
      {
        "@type": "Organization",
        name: "Spring & Summer Fashion Collection",
        url: "https://springandsummer.lk/"
      },
      {
        "@type": "Organization",
        name: "Anverally & Sons (Pvt) Ltd",
        url: "https://www.anverally.com/"
      },
      {
        "@type": "Organization",
        name: "Mihila Tex (Hirdaramani Group)",
        url: "https://www.hirdaramani.com/"
      },
      {
        "@type": "Organization",
        name: "Testa Bakehouse",
        url: "https://www.facebook.com/testabakehouse/"
      },
      {
        "@type": "Organization",
        name: "Thaya Brothers (Pvt) Ltd",
        url: "https://thayabrothers.com/"
      },
      {
        "@type": "Organization",
        name: "Yara Foods",
        url: "https://www.facebook.com/yarasrilanka/"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What security services does Stronghold Security provide in Sri Lanka?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Stronghold Security & Investigation provides elite manned guarding, armed/unarmed executive close protection, electronic surveillance & CCTV monitoring, retail loss prevention, cash-in-transit, special event security, and confidential corporate investigations across Colombo and all provinces in Sri Lanka."
        }
      },
      {
        "@type": "Question",
        name: "Is Stronghold Security registered and licensed in Sri Lanka?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Stronghold Security & Investigation (Pvt) Ltd is fully licensed by the Ministry of Defence, Sri Lanka, and complies with all regulatory standards for private security organizations and investigative agencies."
        }
      },
      {
        "@type": "Question",
        name: "Who leads the tactical operations at Stronghold Security?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Operations are spearheaded by decorated veterans including former senior commanders of the Sri Lanka Armed Forces, ensuring military-grade discipline, rigorous threat modeling, and immediate tactical response capabilities."
        }
      },
      {
        "@type": "Question",
        name: "Which major companies trust Stronghold Security?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Stronghold provides physical security and operational loss prevention to premier Sri Lankan brands including Spring & Summer, Anverally & Sons Tea, Mihila Tex (Hirdaramani Group), Testa Bakehouse, Thaya Brothers, and Yara Foods."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(securityServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
