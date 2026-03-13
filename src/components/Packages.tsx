import { Check } from 'lucide-react';
import styles from './Packages.module.css';

const PACKAGES = [
  {
    name: 'Core Award',
    price: '30–39€',
    description: 'La esencia del reconocimiento sostenible.',
    features: [
      'Trofeo premium',
      'NFC integrado',
      'QR a cápsula del evento',
      'Enlace web único'
    ]
  },
  {
    name: 'Social Capsule',
    price: '39–59€',
    description: 'Para eventos que quieren ser compartidos.',
    features: [
      'Todo lo del Core Award',
      'Cápsula extendida (álbum/aftermovie)',
      'Resultados oficiales',
      'Botón "Compartir" optimizado'
    ],
    highlighted: true
  },
  {
    name: 'Voice Signature',
    price: '79–99€',
    description: 'Una experiencia emocional inigualable.',
    features: [
      'Todo lo del Social Capsule',
      'Narración hablada oficial (20–35s)',
      'Personalizada por premio/categoría',
      'Calidad estudio premium'
    ]
  },
  {
    name: 'Sponsor Ready',
    price: '89–99€',
    description: 'Monetiza la experiencia del ganador.',
    features: [
      'Todo lo de Voice Signature',
      'Sección exclusiva para patrocinadores',
      'Enlaces out-bound medibles',
      'Analítica de interacciones'
    ]
  }
];

export function Packages() {
  return (
    <section id="paquetes" className="section">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">Paquetes & Experiencias</h2>
          <p className="section-subtitle">
            Escala el reconocimiento según el nivel de tu evento. Desde la cápsula básica hasta la monetización con sponsors.
          </p>
        </header>

        <div className={styles.grid}>
          {PACKAGES.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`${styles.card} ${pkg.highlighted ? styles.highlighted : ''}`}
            >
              {pkg.highlighted && <div className={styles.popularBadge}>Más popular</div>}
              
              <div className={styles.cardHeader}>
                <h3 className={styles.name}>{pkg.name}</h3>
                <div className={styles.price}>{pkg.price}</div>
                <p className={styles.description}>{pkg.description}</p>
              </div>

              <div className={styles.features}>
                {pkg.features.map((feature, fIdx) => (
                  <div key={fIdx} className={styles.featureItem}>
                    <Check size={16} className={styles.checkIcon} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className={styles.cardAction}>
                <a href="#contacto" className={`btn ${pkg.highlighted ? 'btn-primary' : 'btn-outline'} ${styles.fullWidthBtn}`}>
                  Seleccionar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
