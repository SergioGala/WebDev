// src/config/navConfig.js

/**
 * Navigation Configuration - Monks Style
 * Con "Solutions by Industry" para SEO
 */

export const navItems = [
  {
    label: 'Solutions',  
    hasDropdown: true,
    dropdownItems: [
      {
        label: 'Real-Time Brands',
        href: '/Real-Time/Brands',
      },
      {
        label: 'Marketing Orchestration',
        href: '/solutions/Marketing Orchestration',
      },
      {
        label: 'Glass Box Media',
        href: '/solutions/glass',
      },
      {
        label: 'Retail, CPG & E-commerce',
        href: '/solutions/retail-ecommerce',
      },
      {
        label: 'Life Sciences & Healthcare',
        href: '/solutions/healthcare',
      },
      {
        label: 'Real Estate, Technology, Public Sector & Education',
        href: '/solutions/real-estate-tech',
      }
    ]
  },
  {
    label: 'Marketing Services',
    hasDropdown: true,
    dropdownItems: [
      {
        label: 'Brand',
        href: '/services/consulting',
      },
      {
        label: 'Custom Software & Digital Platforms',
        href: '/services/custom-software',
      },
      {
        label: 'QA & Automation Testing',
        href: '/services/qa-testing',
      },
      {
        label: 'Cloud & Infrastructure',
        href: '/services/cloud-infrastructure',
      },
      {
        label: 'Data, AI & Automation',
        href: '/services/ai-automation',
      },
      {
        label: 'Security',
        href: '/services/security',
      }
    ]
  },
    {
    label: 'Technology Services',  // ← NUEVO
    hasDropdown: true,
    dropdownItems: [
      {
        label: 'Cloud Infrastructure',
        href: '/technology/cloud',
        description: 'Escalabilidad y seguridad'
      },
      {
        label: 'DevOps & CI/CD',
        href: '/technology/devops',
        description: 'Automatización y deployment'
      },
      {
        label: 'API Development',
        href: '/technology/api',
        description: 'Integraciones robustas'
      },
      {
        label: 'Database Solutions',
        href: '/technology/database',
        description: 'PostgreSQL, MongoDB, Redis'
      }
    ]
  },
  {
    label: 'Products & Methods',  // ← Como Monks
    hasDropdown: true,
    dropdownItems: [
      {
        label: 'Agile Development',
        href: '/methods/agile',
      },
      {
        label: 'DevOps & CI/CD',
        href: '/methods/devops',
      },
      {
        label: 'Design Thinking',
        href: '/methods/design-thinking',
      }
    ]
  },
  {
    label: 'About Us',
    hasDropdown: true,
    dropdownItems: [
      {
        label: 'What We Do',
        href: '/insights/blog',
      },
      {
        label: 'Partners',
        href: '/insights/case-studies',
      },
      {
        label: 'Thinking',
        href: '/insights/whitepapers',
      },
      {
        label: 'Careers',
        href: '/insights/Careers',
      }
    ]
  }
];

// CTA Button Config
export const ctaButton = {
  label: "Connect",  
  href: '/contact',
};

// Logo Config
export const logoConfig = {
  text: '.copiasergio', 
  href: '/',
};