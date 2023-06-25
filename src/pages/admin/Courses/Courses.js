import React, { useState } from "react";
import { Tab, Button } from "semantic-ui-react";
import { BasicModal } from "../../../components/Shared";
import { ListCourses, CourseForm } from "../../../components/Admin/Course";
import "./Courses.scss";

const panes = [
  {
    render: () => (
      <Tab.Pane attached={false}>
        <ListCourses />
      </Tab.Pane>
    ),
  },
];

export const Courses = () => {
  const [showModal, setShowModal] = useState(false);

  const onOpenCloseModal = () => setShowModal((prevState) => !prevState);

  return (
    <>
      <div className="courses-page">
        <div className="courses-page__add">
          <Button primary onClick={onOpenCloseModal}>
            Nuevo curso
          </Button>
        </div>

        <Tab menu={{ secondary: true }} panes={panes} />
      </div>

      <BasicModal show={showModal} close={onOpenCloseModal} title="Crear curso">
        <CourseForm onClose={onOpenCloseModal} />
      </BasicModal>
    </>
  );
};
