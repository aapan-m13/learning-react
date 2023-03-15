import React from "react";

import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import "./CourseGoalList.css";

const CourseGoalList = (props) => {
  const courseList = props.items.map((goal) => {
    return (
      <CourseGoalItem key={goal.id} id={goal.id} onDelete={props.onDeleteItem}>
        {goal.text}
      </CourseGoalItem>
    );
  });

  return <ul className="goal-list">{courseList}</ul>;
};

export default CourseGoalList;
