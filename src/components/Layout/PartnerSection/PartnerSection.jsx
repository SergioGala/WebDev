import { useNavigate } from 'react-router-dom';
import { partnerServices } from '../../../data/patnerServices';
import './PartnerSection.css';

function PartnerCard({ service }) {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(service.href)
    };

    return (
        <article className="partner-card" onClick={handleClick}>
            <span className="partner-card__number">{service.id}</span>

            <div className="partner-card__media">
                <img
                    src={service.imageSrc}
                    alt={service.title}
                    className="partner-card__image"
                    loading="lazy"
                />
            </div>

            <div className="partner-card__content">
                <span className="partner-card__label">{service.label}</span>

                <button
                    className="partner-card__cta"
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleClick();
                    }}
                >
                    <span>{service.cta}</span>

                    <span className="partner-card__cta-icon">
                        <span className="partner-card__cta-arrow-orbit">
                            <span className="partner-card__cta-arrow">→</span>
                        </span>
                    </span>
                </button>


            </div>
        </article>
    );
}

export default function PartnerSection() {
    return (
        <section className="partner-section">
            <div className="partner-section__container">
                <h2 className="partner-section__title">
                    Tu partner de confianza para la innovación en cuatro servicios
                    estratégicos:
                </h2>

                <div className="partner-section__grid">
                    {partnerServices.map((service) => (
                        <PartnerCard key={service.slug} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
