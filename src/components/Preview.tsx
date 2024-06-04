import React from "react";
import ReactMarkdown from "react-markdown";
import { MarkdownContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

const Preview: React.FC = () => {
  const { markdown } = React.useContext(MarkdownContext);
  return (
    <div className="preview">
      <div className="preview__header">
        <FontAwesomeIcon icon={faFire} className="fire-icon" />
        <h2 className="title">Previewer</h2>
      </div>
      <div id="preview" className="preview__markdown">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Preview;
