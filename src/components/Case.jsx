import React from "react";
import { Link } from "react-router-dom";

export default function Case({title="Case Title", imgUrl="https://picsum.photos/250/300?random=1", imgAlt="", demoRoute="/", codeUrl="#"}) {
  return (
    <div className="case">
      <h3 className="case_title mb-3">{title}</h3>
      <div className="img-container mb-4">
        <img
          className="img-container_img"
          src={imgUrl}
          alt={imgAlt}
        />
      </div>
      <div className="case_buttons gap-2">
        <Link className="btn btn-primary" to={demoRoute} >View Demo</Link>
        <a className="btn btn-success" href={codeUrl} target="_blank">View Code</a>
      </div>
    </div>
  );
}
