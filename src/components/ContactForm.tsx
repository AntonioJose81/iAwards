import { Send, MessageCircle, Phone } from 'lucide-react';
import styles from './ContactForm.module.css';

export function ContactForm() {
  return (
    <section id="contacto" className={`section ${styles.contactSection}`}>
      <div className={`container ${styles.contactContainer}`}>
        
        <div className={styles.infoBlock}>
          <h2 className="section-title">¿Hablamos de tu evento?</h2>
          <p className="section-subtitle" style={{ marginLeft: 0 }}>
            Déjanos los detalles básicos y diseñaremos una propuesta a la medida de tu presupuesto y objetivos.
          </p>

          <div className={styles.directContact}>
            <p className={styles.directLabel}>¿Prefieres un trato más directo?</p>
            <div className={styles.contactButtons}>
              <a href="tel:+34690639712" className={styles.phoneBtn}>
                <Phone size={20} />
                Llamar ahora
              </a>
              <a href="https://wa.me/34690639712" target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className={styles.formBlock}>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Nombre / Empresa</label>
                <input type="text" id="name" placeholder="Tu nombre" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email profesional</label>
                <input type="email" id="email" placeholder="hola@tuempresa.com" required />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="event">Nombre o tipo de evento</label>
              <input type="text" id="event" placeholder="Ej: Premios Innovación 2024" required />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="quantity">Cantidad aproximada</label>
                <select id="quantity">
                  <option value="">Seleccionar rango</option>
                  <option value="1-10">1 - 10 unidades</option>
                  <option value="11-50">11 - 50 unidades</option>
                  <option value="50+">Más de 50 unidades</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="date">Fecha del evento</label>
                <input type="date" id="date" required />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="budget">Presupuesto orientativo (por unidad)</label>
              <select id="budget">
                <option value="">Seleccionar rango</option>
                <option value="30-50">30€ - 50€</option>
                <option value="50-100">50€ - 100€</option>
                <option value="100+">Más de 100€ (Premium custom)</option>
              </select>
            </div>

            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
              Recibir propuesta <Send size={18} />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
