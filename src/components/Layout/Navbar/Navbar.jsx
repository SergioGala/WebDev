import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useScrollBehavior } from '../../../hooks/useScrollBehavior';
import useIsMobile from '../../../hooks/useIsMobile';
import { navItems, ctaButton, logoConfig } from '../../../utils/Navconfig';

const Navbar = () => {
  const { isScrolled, isVisible } = useScrollBehavior(10, 200);
  const isMobile = useIsMobile(1200);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);


  // Cerrar dropdown/menu al hacer click fuera

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown !== null) {
        const clickedOutside = !event.target.closest(`.${styles.item}`);
        if (clickedOutside) {
          setActiveDropdown(null);
        }
      }

      if (isMobileMenuOpen && !event.target.closest(`.${styles.navbar}`)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen, activeDropdown]);

  // Cerrar dropdowns al redimensionar

  useEffect(() => {
    setActiveDropdown(null);
    setMobileActiveDropdown(null);
    setIsMobileMenuOpen(false);
  }, [isMobile]);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''} ${!isVisible ? styles.hidden : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link to={logoConfig.href} className={styles.logoLink}>
            {logoConfig.text}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className={styles.menu}>
          {navItems.map((item, index) => (
            <div
              key={index}
              className={styles.item}
              onMouseEnter={() => {
                if (item.hasDropdown) {
                  setActiveDropdown(index);
                }
              }}
              onMouseLeave={() => {
                if (item.hasDropdown) {
                  setActiveDropdown(null);
                }
              }}
            >
              {item.hasDropdown ? (
                <span className={styles.link}>
                  {item.label}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className={`${styles.chevron} ${activeDropdown === index ? styles.chevronActive : ''}`}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              ) : (
                <Link to={item.href} className={styles.link}>
                  {item.label}
                </Link>
              )}

              {/* Dropdown Menu */}
              {item.hasDropdown && activeDropdown === index && (
                <div className={styles.dropdown}>
                  {item.dropdownItems.map((dropItem, dropIndex) => (
                    <Link
                      key={dropIndex}
                      to={dropItem.href}
                      className={styles.dropdownItem}
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div className={styles.dropdownItemContent}>
                        <span className={styles.dropdownItemLabel}>
                          {dropItem.label}
                        </span>
                        {dropItem.description && (
                          <span className={styles.dropdownItemDesc}>
                            {dropItem.description}
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* CTA Button - CON FLECHA ANIMADA */}

        <div className={styles.cta}>
          <Link to={ctaButton.href}>
            <button className={`${styles.button} ${isScrolled ? styles.inverseButton : ''}`}>
              <span className={styles.arrowCircleLeft}>→</span>
              <span className={styles.buttonText}>{ctaButton.label}</span>
              <span className={styles.arrowCircleRight}>→</span>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`${styles.mobileToggle} ${!isVisible ? styles.mobileToggleVisible : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuActive : ''}`}
        >
          {navItems.map((item, index) => (
            <div key={index} className={styles.mobileItem}>
              {item.hasDropdown ? (
                <>
                  <div
                    className={styles.mobileLink}
                    onClick={() =>
                      setMobileActiveDropdown(mobileActiveDropdown === index ? null : index)
                    }
                  >
                    {item.label}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={`${styles.chevron} ${mobileActiveDropdown === index ? styles.chevronActive : ''}`}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>

                  {mobileActiveDropdown === index && (
                    <div className={styles.mobileDropdown}>
                      {item.dropdownItems.map((dropItem, dropIndex) => (
                        <Link
                          key={dropIndex}
                          to={dropItem.href}
                          className={styles.mobileDropdownItem}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setMobileActiveDropdown(null);
                          }}
                        >
                          {dropItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.href}
                  className={styles.mobileLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          {/* BOTON VERSION MOBILE */}
          <Link to={ctaButton.href} onClick={() => setIsMobileMenuOpen(false)}>
            <button className={`${styles.button} ${isScrolled ? styles.inverseButton : ''}`}>
              <span className={styles.arrowCircleLeft}>→</span>
              <span className={styles.buttonText}>{ctaButton.label}</span>
              <span className={styles.arrowCircleRight}>→</span>
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;