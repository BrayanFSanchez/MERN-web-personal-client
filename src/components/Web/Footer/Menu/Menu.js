import React from "react";
import { Grid, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Menu.scss";

export const Menu = () => {
  return (
    <div className="footer-menu">
      <h4>Navegación</h4>

      <Grid>
        <Grid.Column>
          <Link to="#">
            <Icon name="book" /> Cursos online
          </Link>
        </Grid.Column>
      </Grid>
    </div>
  );
};
