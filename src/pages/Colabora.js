import React from "react";
import { BarChart2, Star, DollarSign, TrendingUp } from "lucide-react";
import "./Colabora.css";

const Colabora = () => {
  return (
    <div className="colabora-container">
      <section className="colabora-banner">
        <h1>¿Cómo Colaborar?</h1>
      </section>

      <section className="colabora-intro">
        <h2>¡Gracias por tu interés!</h2>
      </section>

      <section className="colabora-porque">
        <h3>¿Por qué ser parte?</h3>
        <p>
          Las redes de colaboración en ciencia y tecnología son ejes fundamentales para el crecimiento
          de las empresas, las instituciones y las personas.
        </p>
        <p>
          Apostamos por generar inteligencia colectiva que acerque a las empresas soluciones efectivas
          para la toma de decisiones.
        </p>
      </section>

      <section className="colabora-beneficios">
        <h2>Conoce tus beneficios:</h2>
        <div className="colabora-cards">
          <div className="colabora-card">
            <BarChart2 size={60} color="#002f5f" />
            <h4>Productividad</h4>
            <p>Aumentar su actividad y participación en I+D</p>
          </div>

          <div className="colabora-card">
            <Star size={60} color="#002f5f" />
            <h4>Reconocimiento</h4>
            <p>Reconocimiento en sus áreas de investigación</p>
          </div>

          <div className="colabora-card">
            <DollarSign size={60} color="#002f5f" />
            <h4>Ingresos</h4>
            <p>Ingresos extras a su actividad de investigación</p>
          </div>

          <div className="colabora-card">
            <TrendingUp size={60} color="#002f5f" />
            <h4>Impulso</h4>
            <p>Impulso de sus proyectos de cooperación tecnológica e innovación</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Colabora;
