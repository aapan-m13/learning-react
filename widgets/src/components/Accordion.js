import React from "react";

export default function Accordion({ items }) {
  const renderedItems = items.map((item, i) => {
    return (
      <React.Fragment key={`items` + i}>
        <div className="title active">
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">{item.content}</div>
      </React.Fragment>
    );
  });
  return <div>{renderedItems}</div>;
}
