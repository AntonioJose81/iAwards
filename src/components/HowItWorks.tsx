import { MessageSquare, LayoutTemplate, Truck } from 'lucide-react';
import styles from './HowItWorks.module.css';

const STEPS = [
  {
    icon: <MessageSquare size={32} strokeWidth={1.5} />,
    title: '1. Briefing y concepto',
    description: 'Cuéntanos la historia de tu evento. Te proponemos opciones de diseño y materiales idóneos.'
  },
  {
    icon: <LayoutTemplate size={32} strokeWidth={1.5} />,
    title: '2. Producción ágil',
    description: 'Fabricación local en 3D o mixto. Cada pieza lleva integrado el chip NFC de forma invisible.'
  },
  {
    icon: <Truck size={32} strokeWidth={1.5} />,
    title: '3. Configuración y entrega',
    description: 'Enviamos los trofeos listos con las cápsulas activadas, listos para sorprender.'
  }
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">Cómo funciona</h2>
          <p className="section-subtitle">
            Un proceso fluido desde la primera idea hasta la entrega de los trofeos configurados.
          </p>
        </header>

        <div className={styles.stepsContainer}>
          {STEPS.map((step, idx) => (
            <div key={idx} className={styles.stepItem}>
              <div className={styles.iconContainer}>
                {step.icon}
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
