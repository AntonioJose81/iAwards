import { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <main className="container section" style={{ paddingTop: '10rem' }}>
        <h1 className="section-title">Política de Privacidad y Cookies</h1>
        <div className="text-muted" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px' }}>
          <section>
            <h2 className="h3 text-white mb-4">1. Identidad del Responsable</h2>
            <p>IAWARDS (en adelante, "la Empresa") es el responsable del tratamiento de tus datos personales recogidos a través de este sitio web. Puedes contactar con nosotros para cualquier duda legal en hola@iawards.es.</p>
          </section>

          <section>
            <h2 className="h3 text-white mb-4">2. Finalidad del Tratamiento</h2>
            <p>Tratamos la información que nos facilitas con el fin de prestarte el servicio solicitado o enviarte la información requerida. Además, podemos utilizar tus datos para mejorar tu experiencia de usuario y realizar estadísticas anónimas.</p>
          </section>

          <section>
            <h2 className="h3 text-white mb-4">3. Qué son las Cookies</h2>
            <p>Una cookie es un pequeño fichero de texto que se almacena en tu navegador cuando visitas casi cualquier página web. Su utilidad es que la web sea capaz de recordar tu visita cuando vuelvas a navegar por esa página para ofrecerte contenido adaptado a tus necesidades.</p>
          </section>

          <section>
            <h2 className="h3 text-white mb-4">4. Cookies utilizadas en este sitio</h2>
            <p>Este sitio web utiliza cookies propias y de terceros, principalmente para:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
              <li><strong>Cookies técnicas:</strong> Necesarias para el funcionamiento de la web.</li>
              <li><strong>Cookies de personalización:</strong> Permiten recordar preferencias de usuario.</li>
              <li><strong>Cookies de análisis:</strong> Permiten cuantificar el número de usuarios y realizar mediciones estadísticas (Google Analytics).</li>
            </ul>
          </section>

          <section>
            <h2 className="h3 text-white mb-4">5. Cómo desactivar las cookies</h2>
            <p>En cualquier momento podrás ejercer tu derecho de desactivación o eliminación de cookies de este sitio web. Estas acciones se realizan de forma diferente en función del navegador que estés usando.</p>
          </section>
          
          <p className="mt-8 italic">Última actualización: Marzo 2026</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
