import { Leaf, TreeDeciduous, Cpu } from 'lucide-react';
import styles from './Materials.module.css';

const MATERIAL_FEATURES = [
  {
    icon: <Leaf size={32} strokeWidth={1.5} />,
    title: 'Biomateriales',
    description: 'Fabricamos con PLA y otros materiales biodegradables de extrusión de filamento para desarrollar trofeos más sostenibles y contemporáneos.'
  },
  {
    icon: <TreeDeciduous size={32} strokeWidth={1.5} />,
    title: 'Maderas seleccionadas',
    description: 'Integramos diferentes maderas, desde soluciones más asequibles hasta acabados premium como la haya vaporizada, adaptándonos al presupuesto de cada proyecto.'
  },
  {
    icon: <Cpu size={32} strokeWidth={1.5} />,
    title: 'Tecnología aplicada al diseño',
    description: 'Utilizamos impresión 3D FDM, corte y grabado láser, fresado de madera e impresión UV para lograr piezas únicas, precisas y visualmente impactantes.'
  }
];

export function Materials() {
  return (
    <section className="section">
      <div className={`container ${styles.materialsContainer}`}>
        
        <div className={styles.imageBlock}>
          <img 
            src="/assets/freepik__create-a-premium-visual-narrative-showing-the-atta__91115.png" 
            alt="Proceso de fabricación y materiales premium" 
            className={styles.image}
            loading="lazy"
          />
          <div className={styles.caption}>
            Diseño iterativo y producción digital. Fabricación zero-waste.
          </div>
        </div>

        <div className={styles.contentBlock}>
          <h2 className="section-title">Fabricación y<br/>materiales</h2>
          <p className="section-subtitle" style={{ marginLeft: 0 }}>
            Procesos optimizados donde la artesanía se encuentra con la industria 4.0.
          </p>

          <div className={styles.featuresList}>
            {MATERIAL_FEATURES.map((feature, idx) => (
              <div key={idx} className={styles.featureItem}>
                <div className={styles.icon}>{feature.icon}</div>
                <h4 className={styles.featureTitle}>{feature.title}</h4>
                <p className={styles.featureDesc}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
