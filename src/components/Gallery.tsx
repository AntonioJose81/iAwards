import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowRight') setSelectedImageIndex((selectedImageIndex + 1) % GALLERY_ITEMS.length);
      if (e.key === 'ArrowLeft') setSelectedImageIndex((selectedImageIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  // Prevent scroll when lightbox is open
  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImageIndex]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

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
          {GALLERY_ITEMS.map((item, index) => (
            <div 
              key={item.id} 
              className={`${styles.galleryItem} ${item.featured ? styles.featured : ''}`}
              onClick={() => setSelectedImageIndex(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedImageIndex(index);
                }
              }}
              aria-label={`Ver imagen ampliada de ${item.alt}`}
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

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div 
          className={styles.lightbox} 
          onClick={() => setSelectedImageIndex(null)}
        >
          <button 
            className={styles.closeBtn} 
            onClick={() => setSelectedImageIndex(null)}
            aria-label="Cerrar"
          >
            <X size={32} />
          </button>

          <button 
            className={`${styles.navBtn} ${styles.prevBtn}`} 
            onClick={handlePrev}
            aria-label="Anterior"
          >
            <ChevronLeft size={48} />
          </button>

          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <img 
              src={GALLERY_ITEMS[selectedImageIndex].image} 
              alt={GALLERY_ITEMS[selectedImageIndex].alt} 
              className={styles.lightboxImage}
            />
            <div className={styles.lightboxInfo}>
              <span className={styles.lightboxTag}>{GALLERY_ITEMS[selectedImageIndex].tag}</span>
              <h3 className={styles.lightboxCaption}>{GALLERY_ITEMS[selectedImageIndex].caption}</h3>
            </div>
          </div>

          <button 
            className={`${styles.navBtn} ${styles.nextBtn}`} 
            onClick={handleNext}
            aria-label="Siguiente"
          >
            <ChevronRight size={48} />
          </button>

          <div className={styles.counter}>
            {selectedImageIndex + 1} / {GALLERY_ITEMS.length}
          </div>
        </div>
      )}
    </section>
  );
}
