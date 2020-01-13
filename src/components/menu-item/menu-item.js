import React from "react";
import "./menu-item.styles.scss";

export default function MenuItem({ title, imgUrl, size }) {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imgUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="sub-title">Show now</span>
      </div>
    </div>
  );
}
