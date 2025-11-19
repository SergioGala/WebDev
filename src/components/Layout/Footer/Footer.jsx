import React from 'react';
import TrampolineButton from './TrampolineButton';
import AnimatedAnchorTag from './AnimatedAnchorTag';
import useIsMobile from '../../../hooks/UseIsMobile';
import SocialFooter from './SocialFooter';
import "./Footer";

const Footer = () => {
  const isMobile = useIsMobile();

  const navItems = [
    { text: 'Qué hacemos', href: '/' },
    { text: 'Socios', href: '/' },
    { text: 'Nuestro trabajo', href: '/' },
    { text: 'Empleos', href: '/' },
    { text: 'Ideas', href: '/' },
    { text: 'Contacto', href: '/' },
  ];

  const legalLinks = [
    { text: 'Una empresa', href: 'alguna pagina' },
    { text: 'Sostenibilidad', href: 'alguna pagina' },
    { text: 'Política de privacidad', href: 'alguna pagina' },
    { text: 'Seguridad de la información', href: 'alguna pagina' },
    { text: 'Política de marketing ético', href: 'alguna pagina' },
    { text: 'Declaración contra', href: 'alguna pagina' },
    { text: 'Código de conducta', href: 'alguna pagina' },
    { text: 'Declaración contra', href: 'alguna pagina' },
    { text: 'Política de denuncia', href: 'alguna pagina' },
    { text: 'Declaración de accesibilidad', href: 'alguna pagina' },
    { text: 'Pacto de las Fuerzas Armadas', href: 'alguna pagina' },
    { text: 'Reconocimiento del terreno', href: 'alguna pagina' },
  ];

  return (
    <footer>
      <div className="footer">

        <div>
          <p>Sigue explorando...</p>
        </div>

        <div className='border'>
          <ul className={isMobile ? 'legal-links-list' : 'trampoline-list'}>
            {navItems.map(({ text, href }, i) => (
              <li key={i}>
                {isMobile ? (
                  <AnimatedAnchorTag text={text} href={href} fontSize="30px" />
                ) : (
                  <TrampolineButton text={text} href={href} />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* LEGAL LINKS */}
        <div className='border'>
          <ul className="legal-links-list">
            {legalLinks.map(({ text, href }, i) => (
              <li key={i}>
                <AnimatedAnchorTag text={text} href={href} fontSize="15px" />
              </li>
            ))}
          </ul>
        </div>

      </div>

      <SocialFooter />
    </footer>
  );
};

export default Footer;
