import React from "react";
import { Container } from "semantic-ui-react";
import "./Banner.scss";

export const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <h1>
          Aprendé nuevas <br /> tecnologías web y movil
        </h1>
        <h2>
          A través de cursos prácticos, concisos y actualizados, creados por
          <br /> prfesionales con años de experiencia.
        </h2>
      </Container>

      <div className="banner__dark" />
    </div>
  );
};
