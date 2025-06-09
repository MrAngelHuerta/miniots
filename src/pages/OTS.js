import React from "react";
import { Users, Network, BarChart, Cpu } from "lucide-react"; // Iconos de Lucide
import "./OTS.css";

const OTS = () => {
  return (
    <div className="ots-container">
      <section className="ots-header">
        <h1>Acerca de Nosotros</h1>
      </section>

      <section className="ots-mision-vision">
        <div className="ots-mision">
          <h2>Nuestra Misión</h2>
          <p>
            Generamos el click entre la inteligencia colectiva de una red de
            expertos con las necesidades de información de las empresas de
            diversos sectores, utilizando la inteligencia de negocios basada en
            tecnología y análisis de datos.
          </p>
        </div>

        <div className="ots-vision">
          <h2>Nuestra Visión</h2>
          <p>
            Ser un referente en México sobre tendencias, indicadores y datos de
            las tecnologías y desarrollo tecnológico, para poder contribuir con
            mejores prácticas para el desarrollo económico, académico y social.
          </p>
        </div>
      </section>

      {/* Sección de tarjetas con fondo azul oscuro */}
      <section className="ots-cards">
        <div className="ots-card">
          <Users size={80} color="white" className="ots-icon" />
          <p>Inteligencia colectiva</p>
        </div>

        <div className="ots-card">
          <Network size={80} color="white" className="ots-icon" />
          <p>Red de expertos</p>
        </div>

        <div className="ots-card">
          <BarChart size={80} color="white" className="ots-icon" />
          <p>Inteligencia de negocios</p>
        </div>

        <div className="ots-card">
          <Cpu size={80} color="white" className="ots-icon" />
          <p>
            <span className="azul">Tecnología</span> y análisis de datos
          </p>
        </div>
      </section>
    </div>
  );
};

export default OTS;
