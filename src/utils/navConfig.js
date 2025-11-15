/**
 * Navigation Configuration
 * Configuración centralizada de navegación de sitio
 */

export const navItems = [
  {
    label: 'Solutions',
    hasDropdown: true,
    dropdownItems: [
      {
        label: 'Desarrollo Web',
        href: '/solutions/web-development',
        description: 'Aplicaciones web modernas con React'
      },
      {
        label: 'Apps Móviles',
        href: '/solutions/mobile-apps',
        description: 'Apps nativas y cross-platform'
      },
      {
        label: 'Cloud Solutions',
        href: '/solutions/cloud',
        description: 'Infraestructura escalable en la nube'
      }
    ]
  },
  {
    label: 'Services',
    hasDropdown: true,
    dropdownItems: [
      {
        label: 'Consulting Services',
        href: '/services/consulting',
        description: 'Asesoría técnica y estratégica'
      },
      {
        label: 'Mantenimiento',
        href: '/services/maintenance',
        description: 'Soporte continuo y actualizaciones'
      },
      {
        label: 'Custom Software & Digital Platforms',
        href: '/services/custom-software',
        description: 'Desarrollo a medida'
      },
      {
        label: 'QA & Automation Testing',
        href: '/services/qa-testing',
        description: 'Testing automatizado y manual'
      },
      {
        label: 'Cloud & Infrastructure',
        href: '/services/cloud-infrastructure',
        description: 'DevOps y arquitectura cloud'
      },
      {
        label: 'Data, AI & Automation',
        href: '/services/ai-automation',
        description: 'Soluciones con IA y automatización'
      },
      {
        label: 'Security',
        href: '/services/security',
        description: 'Auditorías y seguridad informática'
      }
    ]
  },
  {
    label: 'Portfolio',
    hasDropdown: false,
    href: '/portfolio'
  },
  {
    label: 'Price',
    hasDropdown: false,
    href: '/pricing'
  },
  {
    label: 'About Us',
    hasDropdown: true,
    dropdownItems: [
      {
        label: 'Equipo',
        href: '/about/team',
        description: 'Conoce a nuestro equipo'
      },
      {
        label: 'Proceso',
        href: '/about/process',
        description: 'Cómo trabajamos'
      },
      {
        label: 'Contacto',
        href: '/about/contact',
        description: 'Hablemos de tu proyecto'
      }
    ]
  }
];

// CTA Button Config
export const ctaButton = {
  label: "Let's Talk",
  href: '/contact',
  onClick: () => {
    // Aquí podrías abrir un modal de contacto
    // O redirigir a Calendly
    // O abrir WhatsApp
    console.log('CTA clicked');
  }
};

// Logo Config
export const logoConfig = {
  text: '.CopiaSergio',
  href: '/',
  // Si quieres imagen en lugar de texto:
  // image: '/logo.png',
  // alt: 'CopiaSergio Logo'
};