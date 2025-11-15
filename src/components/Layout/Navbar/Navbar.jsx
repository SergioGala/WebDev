import { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Navigation items
  const navItems = [
    {
      label: 'Solutions',
      hasDropdown: true,
      dropdownItems: ['Desarrollo Web', 'Apps Móviles', 'Cloud Solutions']
    },
    {
      label: 'Services',
      hasDropdown: true,
      dropdownItems: ['Consulting Services', 'Mantenimiento','Custom Software & Digital Platforms','QA & Automation Testing','Cloud & Infrastructure','Data, AI & Automation','Security']
    },
    {
      label: 'Portfolio',
      hasDropdown: false,
      href: '/portfolio'
    },
    {
      label: 'Price',
      hasDropdown: false,
      href: '/precios'
    },
    {
      label: 'About Us',
      hasDropdown: true,
      dropdownItems: ['Equipo', 'Proceso', 'Contacto']
    }
  ];

  useEffect(() => {
    // Scroll detection for navbar shrink effect
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest(`.${styles.navbar}`)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <a href="/" className={styles.logoLink}>
            .CopiaSergio
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className={styles.menu}>
          {navItems.map((item, index) => (
            <div
              key={index}
              className={styles.item}
              onMouseEnter={() => item.hasDropdown && setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a 
                href={item.href || '#'} 
                className={styles.link}
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown
                    size={16}
                    className={`${styles.chevron} ${
                      activeDropdown === index ? styles.chevronActive : ''
                    }`}
                  />
                )}
              </a>

              {/* Dropdown Menu */}
              {item.hasDropdown && (
                <div
                  className={`${styles.dropdown} ${
                    activeDropdown === index ? styles.dropdownActive : ''
                  }`}
                >
                  {item.dropdownItems.map((dropItem, dropIndex) => (
                    <a
                      key={dropIndex}
                      href="#"
                      className={styles.dropdownItem}
                    >
                      {dropItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className={styles.cta}>
          <button className={styles.button}>
            Let's Talk
            <ArrowRight size={18} className={styles.buttonIcon} />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={styles.mobileToggle}
          onClick={(e) => {
            e.stopPropagation();
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.mobileMenuActive : ''
        }`}
      >
        {navItems.map((item, index) => (
          <div key={index} className={styles.mobileItem}>
            <div
              className={styles.mobileLink}
              onClick={() => 
                item.hasDropdown && 
                setActiveDropdown(activeDropdown === index ? null : index)
              }
            >
              {item.label}
              {item.hasDropdown && (
                <ChevronDown
                  size={16}
                  className={`${styles.mobileChevron} ${
                    activeDropdown === index ? styles.mobileChevronActive : ''
                  }`}
                />
              )}
            </div>

            {/* Mobile Dropdown */}
            {item.hasDropdown && activeDropdown === index && (
              <div className={styles.mobileDropdown}>
                {item.dropdownItems.map((dropItem, dropIndex) => (
                  <a
                    key={dropIndex}
                    href="#"
                    className={styles.mobileDropdownItem}
                  >
                    {dropItem}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}

        <button className={`${styles.button} ${styles.buttonMobile}`}>
          Hablemos
          <ArrowRight size={18} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

