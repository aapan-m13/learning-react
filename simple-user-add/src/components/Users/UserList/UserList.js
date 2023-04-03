import React from "react";
import styles from "./UserList.module.css";
import Card from "../../UI/Card/Card";

export default function UserList(props) {
  const users = props.usersData.map((elm) => {
    return (
      <ul key={elm.key}>
        <li>
          {elm.name} ({elm.age} years old.)
        </li>
      </ul>
    );
  });
  return <Card className={styles["users"]}>{users}</Card>;
}
