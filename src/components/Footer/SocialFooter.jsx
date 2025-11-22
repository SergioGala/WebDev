import React, { useRef } from 'react';
import './Footer.css';

const socialIcons = [
    { name: 'Facebook', symbol: 'f' },
    { name: 'Instagram', symbol: 'i' },
    { name: 'Twitter', symbol: 't' },
    { name: 'LinkedIn', symbol: 'in' },
];

const SocialFooter = () => {
    const iconRefs = useRef([]);

    const triggerAnimation = (index) => {
        const el = iconRefs.current[index];
        if (el) {
            el.classList.remove('animate');
            void el.offsetWidth;
            el.classList.add('animate');
        }
    };

    return (
        <section className="social-footer-wrapper">
            <div className="social-footer">
                {socialIcons.map((icon, index) => (
                    <div
                        key={icon.name}
                        className="circle"
                        onMouseEnter={() => triggerAnimation(index)}
                    >
                        <span
                            ref={(el) => (iconRefs.current[index] = el)}
                            className="icon"
                        >
                            {icon.symbol}
                        </span>
                    </div>
                ))}
                Siguenos
                <a href="/" className="animated-button">
                    <span className="arrow-circle left">⭢</span>
                    <span className="button-text" style={{ fontSize: "15px" }}>Boletin</span>
                    <span className="arrow-circle right">⭢</span>
                </a>
            </div>
        </section>
    );
};

export default SocialFooter;