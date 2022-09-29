import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>
        {"("}
        {props.meaning.partOfSpeech}
        {")"}
      </h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {props.meaning.definitions[0].definition}
              <br />
              {props.meaning.definitions[0].example}
            </p>
          </div>
        );
      })}
    </div>
  );
}
