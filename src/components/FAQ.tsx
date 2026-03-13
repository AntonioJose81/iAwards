import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import styles from './FAQ.module.css';

const FAQS = [
  {
    question: '¿Qué incluye exactamente la experiencia NFC?',
    answer: 'Cada trofeo lleva un chip NFC pasivo (sin baterías). Al acercar cualquier smartphone moderno, se abre una cápsula digital web (sin descargar apps) con el contenido del paquete elegido: desde una landing básica hasta audios profesionales y galerías.'
  },
  {
    question: '¿Puedo integrar la imagen visual o el logo de nuestro evento?',
    answer: 'Por supuesto. Nuestra producción combina impresión 3D generativa, madera u otros materiales con marcaje láser de alta precisión, garantizando que tu branding se respire en cada ángulo.'
  },
  {
    question: '¿Cuánto tardan en producirse y entregarse?',
    answer: 'Dependiendo de la cantidad y el nivel de personalización (creación de modelo 3D desde cero o adaptación de una línea existente), el plazo estándar es de 2 a 4 semanas.'
  },
  {
    question: '¿Existen pedidos mínimos?',
    answer: 'Fabricamos bajo demanda desde 1 unidad (para premios únicos de alto valor), aunque recomendamos lotes a partir de 10 unidades para optimizar el coste por pieza en series.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section">
      <div className={`container ${styles.faqContainer}`}>
        <div className={styles.header}>
          <h2 className="section-title">Preguntas Frecuentes</h2>
          <p className="section-subtitle" style={{ marginLeft: 0 }}>
            Resolvemos tus dudas sobre el proceso, la tecnología y los plazos.
          </p>
        </div>

        <div className={styles.accordion}>
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className={`${styles.faqItem} ${openIndex === idx ? styles.open : ''}`}
            >
              <button 
                className={styles.faqButton}
                onClick={() => toggleAccordion(idx)}
              >
                <span className={styles.question}>{faq.question}</span>
                <span className={styles.icon}>
                  {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <div 
                className={styles.answerWrapper}
                style={{ height: openIndex === idx ? 'auto' : '0' }}
              >
                <p className={styles.answer}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
