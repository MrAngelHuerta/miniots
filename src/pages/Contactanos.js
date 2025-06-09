import React from 'react';
import './Contactanos.css';

const Contactanos = () => {
  return (
    <section className="contacto">
      <div className="barra-contacto">
        <h2>Contacto</h2>
      </div>

      <div className="contacto-container">
        <div className="info-box">
          <p><span className="icon">📍</span><strong>Dirección:</strong><br />
            Lago Ginebra Ext. 96 Col. Agua Azul Grupo B Super 23, Mpio. Nezahualcóyotl, C.P. 57500, Estado de México, México.
          </p>
          <p><span className="icon">⏰</span><strong>Horarios de Oficina:</strong><br />
            Lunes a Viernes de 9:00 a.m. a 6:00 p.m.
          </p>
          <p><span className="icon">✉️</span><strong>Correo de Contacto:</strong><br />
            informa@code-connect.com.mx
          </p>
          <p><span className="icon">📞</span><strong>Número oficial de OTS:</strong><br />
            55 7385 3174
          </p>
        </div>

        {/* Formulario */}
        <div className="form-box">
          <form>
            <div className="form-row">
              <input type="text" placeholder="Nombre" required />
              <input type="text" placeholder="Apellidos" />
            </div>
            <div className="form-row">
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Teléfono particular (Celular)" />
            </div>
            <div className="form-row">
              <input type="tel" placeholder="Teléfono de Oficina" />
              <input type="text" placeholder="Empresa" />
            </div>
            <input type="text" placeholder="Cargo" />
            <textarea placeholder="¿En qué podemos ayudarte?"></textarea>
            <button type="submit" className="submit-btn">Enviar correo</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contactanos;
