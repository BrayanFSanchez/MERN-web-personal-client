import React, { useState, useEffect } from "react";
import { Container, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { map } from "lodash";
import { Course } from "../../../api";
import "./HomeCourses.scss";

const BASE_PATH = process.env.REACT_APP_BASE_PATH;
const courseController = new Course();

export const HomeCourses = () => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await courseController.getCourses({ limit: 6 });
        setCourses(response.docs);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <Container className="home-courses">
      <h2>Mejorá tus hablidades</h2>

      <div className="home-courses__all-courses">
        {map(courses, (course) => (
          <a key={course._id} href={course.url} target="__blank">
            <Image src={`${BASE_PATH}/${course.miniature}`} />
            <div>
              <span>{course.title}</span>
              <span>{course.description}</span>
            </div>
          </a>
        ))}
      </div>

      <div className="home-courses__more">
        <Button as={Link} to="/cursos" primary>
          Ver más
        </Button>
      </div>
    </Container>
  );
};
