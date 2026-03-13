import styles from './Gallery.module.css';

const GALLERY_ITEMS = [
  {
    id: 1,
    image: '/assets/freepik__build-a-sophisticated-product-design-scene-around-__91106.png',
    alt: 'Trofeo premium minimalista',
    caption: 'Diseño minimalista de alta precisión',
    tag: 'Premium',
    featured: true
  },
  {
    id: 2,
    image: '/assets/freepik__create-a-premium-visual-that-represents-aiassisted__91110.png',
    alt: 'Medalla deportiva avanzada',
    caption: 'Diseño generativo · producción rápida',
    tag: 'Deporte'
  },
  {
    id: 3,
    image: '/assets/freepik__create-a-striking-futuristic-brand-image-using-the__91113.png',
    alt: 'Trofeo deportivo madera y cristal',
    caption: 'Serie deportiva · acabados limpios',
    tag: 'Deporte'
  },
  {
    id: 4,
    image: '/assets/freepik__create-a-visual-story-that-shows-the-attached-trop__91108.png',
    alt: 'Trofeo corporativo madera',
    caption: 'Ideal para convenciones y empresas',
    tag: 'Corporativo'
  },
  {
    id: 5,
    image: '/assets/freepik__use-the-attached-trophy-img1-as-the-main-product-a__91105.png',
    alt: 'Pieza personalizada en 3D',
    caption: 'Modelado custom · identidad de marca',
    tag: 'Premium'
  },
  {
    id: 6,
    image: '/assets/freepik__use-the-attached-trophy-img1-as-the-main-product-a__91109.png',
    alt: 'Galardón Premium',
    caption: 'Acabados exclusivos de alta gama',
    tag: 'Premium'
  }
];

export function Gallery() {
  return (
    <section className="section">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">Galería de proyectos</h2>
          <p className="section-subtitle">
            Explora algunos de nuestros últimos desarrollos para distintos sectores y eventos.
          </p>
        </header>

        <div className={styles.galleryGrid}>
          {GALLERY_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className={`${styles.galleryItem} ${item.featured ? styles.featured : ''}`}
            >
              <img 
                src={item.image} 
                alt={item.alt} 
                className={styles.image}
                loading="lazy"
              />
              <div className={styles.overlay}>
                <span className={styles.tag}>{item.tag}</span>
                <p className={styles.caption}>{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
